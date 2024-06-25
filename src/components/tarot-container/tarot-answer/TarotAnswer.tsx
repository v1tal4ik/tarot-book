import React from 'react';
import Skeleton from 'react-loading-skeleton';

import { IMessageState } from '../TarotContainer';
import { ERROR_MESSAGE } from '../../../utils/constates';

import TarotCard from 'src/assets/images/the-empress-card.svg';

interface ITarotAnswerProps extends IMessageState {
	question: string | null;
}

const TarotAnswer = React.memo(({ isLoading, question, message }: ITarotAnswerProps) => {
	return (
		<div className='w-full flex flex-col justify-start items-center max-sm:h-[30%]'>
			<div className='text-center'>
				<h2>Your question:</h2>
				<p>{question}</p>
				{isLoading ? (
					<Skeleton width={75} height={30} />
				) : (
					<p className='text-[32px] text-pink-700 font-bold'>
						{message?.answer ?? ERROR_MESSAGE.answer}
					</p>
				)}
			</div>
			<img src={TarotCard} alt='tarot-empress-card' className='mt-4 h-[100%] max-sm:mt-2 ' />
		</div>
	);
});

export default TarotAnswer;
