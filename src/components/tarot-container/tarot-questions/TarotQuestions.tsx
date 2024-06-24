import React, { useCallback } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { IPredefinedQuestion, QuestionFormData } from 'src/interfaces';

import TarotPredefinedQuestion from './tarot-predefined-question/TarotPredefinedQuestion';
import { Input, TextArea } from 'src/components/shared';

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
				<h2 className='mt-8 text-[25px] font-semibold max-sm:hidden'>or ask the Cards</h2>
				<label className='text-base max-sm:hidden'>
					Submit your{' '}
					<span className='inline-block bg-yellow-700 py-1 px-3 text-black font-semibold rounded rotate-[-5deg]'>
						question
					</span>{' '}
					for today's guidance:
				</label>
				{/* Desktop version  */}
				<>
					<TextArea
						name='question'
						register={register}
						watch={watch}
						maxLength={TEXTAREA_MAX_LENGTH}
						containerClassName='relative max-sm:hidden'
						className='w-full mt-4 p-4 bg-violet-600 rounded-lg resize-none max-sm:hidden'
						placeholder='Type your textarea...'
						rows={10}
					/>
					<button
						className='primary-button mt-2 max-sm:hidden'
						disabled={Object.values(touchedFields).length > 0 && (!isDirty || !isValid)}>
						Get the answer
					</button>
				</>

				{/* Mobile version  */}

				<div className='sm:hidden relative w-full py-2 px-4 rounded-t-[20px] bg-violet-300'>
					<Input
						name='question'
						register={register}
						type='text'
						containerClassName='relative sm:hidden'
						className='w-full mt-4 p-4 bg-violet-600 text-[13px] rounded-lg'
						placeholder='Type your input...'
					/>
					<button
						className='primary-button mt-2 absolute top-6 right-6'
						disabled={Object.values(touchedFields).length > 0 && (!isDirty || !isValid)}>
						Get the answer
					</button>
				</div>
			</form>
		</div>
	);
});

export default TarotQuestions;
