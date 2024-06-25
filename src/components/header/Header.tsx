import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import { Avatar, Search } from '../shared';
import { ADMIN_USER, MAIN_ROUTES } from 'src/utils/constates';

import MenuIcon from 'src/assets/icons/menu.svg';
import CloseIcon from 'src/assets/icons/close.svg';

interface IProfileLinkProps {
	name: string;
	imgURL: string;
}

const ProfileLink = React.memo(({ name, imgURL }: IProfileLinkProps) => (
	<Link to='#' className='flex justify-center items-center gap-4'>
		<p className='text-lg font-medium text-white'>{name}</p>
		<Avatar width={50} height={50} path={imgURL} />
	</Link>
));

const Header = () => {
	const [isVisible, setVisible] = useState<boolean>(false);

	const toggleVisible = () => setVisible(!isVisible);

	return (
		<>
			{/* Desktop version */}

			<header className='w-full flex justify-between items-center max-lg:hidden'>
				<Link to='/'>
					<p className='text-[22px] font-bold'>TarotBook</p>
					<span className='text-xs font-semibold'>Tarot & Astrology Readings</span>
				</Link>
				<nav className='flex justify-between items-center gap-8 bg-white py-2 px-4 rounded-full'>
					{MAIN_ROUTES.map(({ label, path }) => (
						<Link key={label} to={path} className='block text-black font-semibold'>
							{label}
						</Link>
					))}
					<Search />
				</nav>
				<ProfileLink {...ADMIN_USER} />
			</header>

			{/* Mobile version  */}

			<header className='hidden max-lg:flex justify-between items-center'>
				<Link to='/' className='text-[14px] text-white font-bold'>
					Tarro Book
				</Link>
				<button onClick={toggleVisible}>
					<img src={MenuIcon} alt='menu-icon' className='button-icons-wrapper bg-pink-700' />
				</button>
			</header>
			{isVisible && (
				<menu className='menu'>
					<button className='flex justify-end mr-[2%]' onClick={toggleVisible}>
						<img src={CloseIcon} alt='close-icon' className='button-icons-wrapper bg-white block' />
					</button>
					<nav className='flex flex-col justify-between items-center gap-y-[5vh]'>
						{MAIN_ROUTES.map(({ label, path }) => (
							<Link key={label} to={path} className='block text-white text-lg font-semibold'>
								{label}
							</Link>
						))}
					</nav>
					<ProfileLink {...ADMIN_USER} />
				</menu>
			)}
		</>
	);
};

export default Header;
