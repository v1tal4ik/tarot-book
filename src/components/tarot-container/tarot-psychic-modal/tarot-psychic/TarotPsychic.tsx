import React from 'react';
import { Avatar } from 'src/components/shared';
import { IPsychic } from 'src/interfaces';

interface ITarotPsychicProps extends IPsychic {
	currentValue: string | null;
	handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const TarotPsychic = React.memo(
	({ id, imageUrl, name, price, currentValue, handleChange }: ITarotPsychicProps) => {
		return (
			<label className='psychic-item-form-group-radio-label'>
				<Avatar width={90} height={90} path={imageUrl} />
				<input
					type='radio'
					className='psychic-item-form-group-radio hover:cursor-pointer'
					value={id}
					checked={currentValue === id}
					onChange={handleChange}
				/>
				<p className='font-semibold'>{name}.</p>
				<p className='text-[11px]'>${price}/min </p>
			</label>
		);
	}
);

export default TarotPsychic;
