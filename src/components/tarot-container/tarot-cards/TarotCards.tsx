import TarotCardsPath from 'src/assets/images/tarot-cards.svg';

const TarotCards = () => {
	return (
		<div className='w-full flex flex-col justify-center items-center pt-4 gap-y-10'>
			<h3 className='w-[75%]  text-xl text-center font-semibold'>
				Let’s check what awaits you in career and finances in the near future
			</h3>
			<img src={TarotCardsPath} alt='tarot-cards' />
			<p className='text-center p-0 m-0'>Take a deep breath</p>
		</div>
	);
};

export default TarotCards;
