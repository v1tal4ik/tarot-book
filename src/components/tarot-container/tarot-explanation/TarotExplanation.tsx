import React from 'react';
import Skeleton from 'react-loading-skeleton';

import { IMessageState } from '../TarotContainer';
import { ERROR_MESSAGE } from 'src/utils/constates';

import PersonAvatar from 'src/assets/images/avatar-person.svg';
import Tips from 'src/assets/icons/tip.svg';

const ExplanationSkeleton = () => (
	<React.Fragment>
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
	</React.Fragment>
);

interface ITarotExplanationProps extends IMessageState {
	onOpenModal: () => void;
	handleReset: () => void;
}

const TarotExplanation = React.memo(
	({ isLoading, message, onOpenModal, handleReset }: ITarotExplanationProps) => {
		return (
			<div className='w-full flex flex-col justify-center items-start'>
				<div className='w-full relative'>
					<img
						src={PersonAvatar}
						alt='person-avatar'
						className='absolute left-[-40px] max-sm:left-0 max-sm:top-[-40px]'
					/>
					{isLoading ? (
						<ExplanationSkeleton />
					) : (
						<p className='py-3 px-4 bg-violet-400 rounded'>
							{message?.explanation ?? ERROR_MESSAGE.explanation}
						</p>
					)}
				</div>
				<div className='w-full flex justify-between gap-14 mt-4 max-lg:flex-wrap-reverse max-lg:justify-center max-lg:gap-4'>
					<button
						className='primary-button w-[70%] max-lg:w-full'
						onClick={onOpenModal}
						disabled={isLoading}>
						Get the decoding
					</button>
					<div className=' w-[80%] flex justify-end items-start gap-2 max-lg:w-full max-lg:justify-start max-lg:gap-4 max-lg:items-center'>
						<img src={Tips} alt='tips' />
						<p className='text-[11px] text-violet-300'>
							Use this tool as a clue; for the precise answer, consult our tarot reader providing
							more data.
						</p>
					</div>
				</div>
				<button className='mt-2 ml-2 text-[11px] text-violet-300 underline' onClick={handleReset}>
					ask another question
				</button>
			</div>
		);
	}
);

export default TarotExplanation;
