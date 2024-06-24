import { BreadCrumbs, Header, TarotContainer } from 'src/components';

const HomePage = () => {
	return (
		<section className='app-container'>
			<Header />
			<BreadCrumbs />
			<TarotContainer />
		</section>
	);
};

export default HomePage;
