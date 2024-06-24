import React from 'react';
import { IPredefinedQuestion } from 'src/interfaces';

interface IPredefinedQuestionProps extends IPredefinedQuestion {
	currentValue: string;
	handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const TarotPredefinedQuestion = React.memo(
	({ text, currentValue, handleChange }: IPredefinedQuestionProps) => (
		<label className='form-group-label-radio hover:bg-violet-600'>
			{text}
			<input
				type='radio'
				name='question'
				className='form-group-radio'
				value={text}
				checked={currentValue === text}
				onChange={handleChange}
			/>
		</label>
	)
);

export default TarotPredefinedQuestion;
