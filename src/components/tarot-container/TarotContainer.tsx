import { useCallback, useState } from 'react';
import { SkeletonTheme } from 'react-loading-skeleton';

import { fetchTarotAnswer } from 'src/api/chat';

import { ERROR_MESSAGE, PREDEFINED_QUESTIONS } from 'src/utils/constates';
import { IMessageContent, QuestionFormData } from 'src/interfaces';

import TarotCards from './tarot-cards/TarotCards';
import TarotAnswer from './tarot-answer/TarotAnswer';

import TarotQuestions from './tarot-questions/TarotQuestions';
import TarotExplanation from './tarot-explanation/TarotExplanation';

// Interface for parent component props

export interface IMessageState {
	isLoading: boolean;
	message: IMessageContent | null;
}

const TarotContainer = () => {
	const [isLoading, setLoading] = useState<boolean>(false);
	const [isSubmited, setSubmit] = useState<boolean>(false);
	const [question, setQuestion] = useState<string>('');
	const [message, setMessage] = useState<IMessageContent | null>(null);

	const handleFetchAnswer = useCallback(async (data: QuestionFormData) => {
		try {
			setLoading(true);
			setQuestion(data.question);
			setSubmit(true);

			const res: IMessageContent = await fetchTarotAnswer(data.question);

			setMessage(res);
		} catch (error) {
			console.log(error);
			setMessage(ERROR_MESSAGE);
		} finally {
			setLoading(false);
		}
	}, []);

	const handleReset = useCallback(() => {
		setMessage(null);
		setQuestion('');
		setSubmit(false);
	}, []);

	return (
		<main className='main-container mt-20 flex justify-center gap-[5%]'>
			<SkeletonTheme baseColor='#F5F5F826' highlightColor='#51315D' height={25}>
				{isSubmited ? (
					<>
						<TarotAnswer isLoading={isLoading} question={question} message={message} />
						<TarotExplanation isLoading={isLoading} message={message} handleReset={handleReset} />
					</>
				) : (
					<>
						<TarotCards />
						<TarotQuestions questions={PREDEFINED_QUESTIONS} handleSubmitFunc={handleFetchAnswer} />
					</>
				)}
			</SkeletonTheme>
		</main>
	);
};

export default TarotContainer;
