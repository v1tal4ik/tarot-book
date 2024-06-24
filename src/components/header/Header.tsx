import { Link } from 'react-router-dom';

import { Avatar, Search } from '../shared';
import { ADMIN_USER, MAIN_ROUTES } from 'src/utils/constates';

const Header = () => {
	return (
		<header className='w-full flex justify-between items-center'>
			<Link to='/'>
				<p className='text-[22px] font-bold'>TarotBook</p>
				<span className='text-xs font-semibold'>Tarot & Astrology Readings</span>
			</Link>
			<nav className='flex justify-between items-center gap-10 bg-white py-2 px-4 rounded-full'>
				{MAIN_ROUTES.map(({ label, path }) => (
					<Link key={label} to={path} className='block text-black font-semibold'>
						{label}
					</Link>
				))}
				<Search />
			</nav>
			<div className='flex justify-center items-center gap-4'>
				<p className='text-lg font-medium'>{ADMIN_USER.name}</p>
				<Avatar width={50} height={50} path={ADMIN_USER.img} />
			</div>
		</header>
	);
};

export default Header;
