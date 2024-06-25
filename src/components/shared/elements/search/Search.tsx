import SearchIcon from 'src/assets/icons/search-16.svg';

const Search = () => {
	return (
		<label
			htmlFor='search'
			className='relative text-gray-400 focus-within:text-gray-600 block rounded-full outline-none'>
			<img
				src={SearchIcon}
				className='pointer-events-none w-4 h-4 absolute top-1/2 left-1 transform -translate-y-1/2'
			/>

			<input type='text' className='w-5' id='search' />
		</label>
	);
};

export default Search;
