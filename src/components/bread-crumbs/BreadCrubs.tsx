import { Fragment } from 'react';
import { Link } from 'react-router-dom';
import ArrowRight from 'src/assets/icons/arrow-left-white.svg';

const relativePathArr = ['Main', 'Tarot', 'Yes or No answer'];

const BreadCrumbs = () => {
	return (
		<div className='fixed top-28 max-sm:static max-sm:mt-2'>
			{/* Desktop version  */}
			<nav className='flex justify-start items-center gap-2 max-sm:hidden '>
				{relativePathArr.map((path, index, arr) =>
					index === arr.length - 1 ? (
						<p key={path} className='text-sm text-[#FFFFFF66]'>
							{path}
						</p>
					) : (
						<Fragment key={path}>
							<p className='text-sm'>{path}</p>
							<hr className='w-5' />
						</Fragment>
					)
				)}
			</nav>
			<h1 className='block mt-2 text-[32px] font-bold max-sm:hidden'>
				{relativePathArr[relativePathArr.length - 1]}
			</h1>

			{/* Mobile version  */}

			<Link to='#' className='hidden gap-4 text-[17px] max-sm:flex'>
				<img src={ArrowRight} alt='arrow-right' />
				{relativePathArr[relativePathArr.length - 1]}
			</Link>
		</div>
	);
};

export default BreadCrumbs;
