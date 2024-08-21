import { IoMdSearch } from "react-icons/io";

const SearchInput = () => {
	return (
		<form className='flex items-center gap-2'>
			<input type='text' placeholder='Search…' className='input input-bordered rounded-full' />
			<button type='submit' className='btn btn-circle bg-indigo-800 text-white'>
				<IoMdSearch className='w-6 h-6 outline-none' />
			</button>
		</form>
	);
};
export default SearchInput;