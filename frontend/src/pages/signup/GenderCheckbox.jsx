const GenderCheckbox = () => {
	return (
		<div className='flex'>
			<div className='form-control'>
				<label className={`label gap-2 cursor-pointer`}>
					<input type='checkbox' className='checkbox border-slate-100' />
					<span className='label-text'>Male</span>
				</label>
			</div>
			<div className='form-control'>
				<label className={`label gap-2 cursor-pointer`}>
					<input type='checkbox' className='checkbox border-slate-100' />
					<span className='label-text'>Female</span>
				</label>
			</div>
		</div>
	);
};
export default GenderCheckbox;