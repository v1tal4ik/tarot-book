import React, { useCallback } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { IPredefinedQuestion, QuestionFormData } from 'src/interfaces';

import TarotPredefinedQuestion from './tarot-predefined-question/TarotPredefinedQuestion';
import { Input } from 'src/components/shared';

import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';

// Schema

const TEXTAREA_MAX_LENGTH = 250;

const QuestionSchema = yup.object({
	question: yup.string().max(TEXTAREA_MAX_LENGTH).required(),
});

type FormDataSchema = yup.InferType<typeof QuestionSchema>;

// Props

interface ITarotQuestionsProps {
	questions: Array<IPredefinedQuestion>;
	handleSubmitFunc: (data: QuestionFormData) => Promise<void>;
}

const TarotQuestions = React.memo(({ questions, handleSubmitFunc }: ITarotQuestionsProps) => {
	const {
		watch,
		register,
		setValue,
		handleSubmit,
		formState: { isDirty, isValid, touchedFields },
	} = useForm<FormDataSchema>({
		resolver: yupResolver(QuestionSchema),
	});

	const questionCurrentValue = watch('question');

	const handleSetQuestion = useCallback(
		(e: React.ChangeEvent<HTMLInputElement>) => {
			setValue('question', e.target.value);
		},
		[setValue]
	);

	const onSubmit: SubmitHandler<QuestionFormData> = handleSubmitFunc;

	return (
		<div className='w-full max-sm:mt-2'>
			<h2>Choose the question from below</h2>
			{questions.map((q) => (
				<TarotPredefinedQuestion
					key={q.id}
					{...q}
					currentValue={questionCurrentValue}
					handleChange={handleSetQuestion}
				/>
			))}
			<form className='mt-4' onSubmit={handleSubmit(onSubmit)}>
				<h2 className='mt-8 font-semibold max-sm:hidden'>or ask the Cards</h2>
				<label className='text-base max-sm:hidden'>
					Submit your{' '}
					<span className='inline-block bg-yellow-700 py-1 px-3 text-black font-semibold rounded rotate-[-5deg]'>
						question
					</span>{' '}
					for today's guidance:
				</label>

				<div className='relative max-sm:py-4 max-sm:px-4 max-sm:rounded-t-[20px] max-sm:bg-violet-300'>
					<Input
						name='question'
						register={register}
						watch={watch}
						maxLength={TEXTAREA_MAX_LENGTH}
						type='text'
						containerClassName='relative'
						symbolContainerClassName='absolute bottom-2 right-2 text-violet-300 text-[11px] max-sm:hidden'
						className='w-full sm:mt-4 sm:p-10 bg-violet-600 rounded-lg max-sm:text-[13px] max-sm:py-4 max-sm:px-2'
						placeholder='Type your question...'
					/>
					<button
						className='primary-button mt-2 max-sm:absolute max-sm:top-4 max-sm:right-6'
						disabled={Object.values(touchedFields).length > 0 && (!isDirty || !isValid)}>
						Get the answer
					</button>
				</div>
			</form>
		</div>
	);
});

export default TarotQuestions;
