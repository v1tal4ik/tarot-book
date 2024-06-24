import React, { useCallback } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { IPredefinedQuestion, QuestionFormData } from 'src/interfaces';

import TarotPredefinedQuestion from './tarot-predefined-question/TarotPredefinedQuestion';
import { TextArea } from 'src/components/shared';

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
		<div className='w-full'>
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
				<h2 className='mt-8 text-[25px] font-semibold'>or ask the Cards</h2>
				<label className='text-base'>
					Submit your{' '}
					<span className='inline-block bg-yellow-700 py-1 px-3 text-black font-semibold rounded rotate-[-5deg]'>
						question
					</span>{' '}
					for today's guidance:
				</label>
				<TextArea
					name='question'
					register={register}
					watch={watch}
					maxLength={TEXTAREA_MAX_LENGTH}
					className='w-full mt-4 bg-violet-600 p-4 rounded-lg resize-none'
					placeholder='Type your question...'
					rows={10}
				/>
				<button
					className='primary-button mt-2'
					disabled={Object.values(touchedFields).length > 0 && (!isDirty || !isValid)}>
					Get the answer
				</button>
			</form>
		</div>
	);
});

export default TarotQuestions;
