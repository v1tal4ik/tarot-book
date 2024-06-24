import React from 'react';
import Skeleton from 'react-loading-skeleton';

import { IMessageState } from '../TarotContainer';
import { ERROR_MESSAGE } from 'src/utils/constates';

import PersonAvatar from 'src/assets/images/avatar-person.svg';
import Tips from 'src/assets/icons/tip.svg';

const ExplanationSkeleton = () => (
	<>
		<div className='flex gap-2'>
			<Skeleton containerClassName='w-[15%]' />
			<Skeleton containerClassName='w-[10%]' />
			<Skeleton containerClassName='w-[30%]' />
			<Skeleton containerClassName='w-[40%]' />
		</div>
		<div className='flex gap-2'>
			<Skeleton containerClassName='w-[40%]' />
			<Skeleton containerClassName='w-[15%]' />
			<Skeleton containerClassName='w-[10%]' />
			<Skeleton containerClassName='w-[30%]' />
		</div>
		<div className='flex gap-2'>
			<Skeleton containerClassName='w-[10%]' />
			<Skeleton containerClassName='w-[15%]' />
			<Skeleton containerClassName='w-[40%]' />
			<Skeleton containerClassName='w-[30%]' />
		</div>
	</>
);

const TarotExplanation = ({ isLoading, message }: IMessageState) => {
	return (
		<div className='w-full flex flex-col justify-center items-start'>
			<div className='w-full relative'>
				<img src={PersonAvatar} alt='person-avatar' className='absolute left-[-40px] ' />
				{isLoading ? (
					<ExplanationSkeleton />
				) : (
					<p className='py-3 px-4 bg-violet-400 rounded'>
						{message?.explanation ?? ERROR_MESSAGE.explanation}
					</p>
				)}
			</div>
			<div className='w-full flex justify-between gap-14 mt-4'>
				<button className='primary-button w-[70%]'>Get the decoding</button>
				<div className=' w-[80%] flex justify-end items-start gap-2'>
					<img src={Tips} alt='tips' />
					<p className='text-[11px] text-violet-300'>
						Use this tool as a clue; for the precise answer, consult our tarot reader providing more
						data.
					</p>
				</div>
			</div>
		</div>
	);
};

export default TarotExplanation;
