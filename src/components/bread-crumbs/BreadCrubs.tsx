import { Fragment } from 'react';

const relativePathArr = ['Main', 'Tarot', 'Yes or No answer'];

const BreadCrumbs = () => {
	return (
		<div className='fixed top-28'>
			<nav className='flex justify-start items-center gap-2'>
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
			<h1 className='block mt-2 text-[32px] font-bold'>{relativePathArr.at(-1)}</h1>
		</div>
	);
};

export default BreadCrumbs;
