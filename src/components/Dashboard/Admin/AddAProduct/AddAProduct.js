import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import useAxios from '../../../../hooks/useAxios';

const colors = [
	'bg-black',
	'bg-red-500',
	'bg-purple-500',
	'bg-pink-500',
	'bg-yellow-500',
	'bg-green-500',
	'bg-blue-500',
	'bg-indigo-500',
];

const categories = [
	"Women's Eyeglasses",
	"Men's Eyeglasses",
	'Ray Ban Eyeglasses',
	"Multifocal's",
	'Designer Eyeglasses',
];

const AddAProduct = () => {
	const [colorList, setColorList] = useState(['bg-black']);
	const { register, handleSubmit, reset } = useForm();
	const { admin } = useAxios();

	const handleColorList = (color) => {
		const colorsAvailable = [...colorList];
		if (colorsAvailable.includes(color)) {
			const newColorList = colorsAvailable.filter(
				(colorItem) => colorItem !== color
			);
			setColorList(newColorList);
		} else {
			colorsAvailable.push(color);
			setColorList(colorsAvailable);
		}
	};

	// add product form submit
	const onSubmit = (data) => {
		data.product_colors = [...colorList];
		const pictures = data.product_more_img.split(',');
		data.product_more_img = [...pictures];
		data.product_more_img.unshift(data.product_img);

		admin
			.post('/addproduct', data)
			.then((response) => {
				reset();
			})
			.catch((error) => {
				console.log(error);
			});
	};

	return (
		<div className='space-y-4 flex flex-col items-start bg-light rounded-lg p-2'>
			{/* title */}
			<h5 className='text-xl font-bold capitalize'>Add A New Product</h5>
			{/* form */}
			<div className='rounded-lg shadow p-4 border w-full bg-white'>
				<form onSubmit={handleSubmit(onSubmit)}>
					{/* form grid */}
					<div className='grid grid-cols-12 text-sm gap-4'>
						{/* input */}
						<div className='col-span-12 lg:col-span-6 space-y-2'>
							<label className='uppercase text-base font-semibold'>
								Product Title*
							</label>
							<input
								className='w-full bg-light border border-gray-200 p-2 rounded outline-none text-gray-500 focus-within:text-gray-900'
								placeholder='Porsche'
								type='text'
								{...register('product_title', {
									required: true,
								})}
							/>
						</div>
						{/* input */}
						<div className='col-span-12 lg:col-span-6 space-y-2'>
							<label className='uppercase text-base font-semibold'>
								Product Image URL*
							</label>
							<input
								className='w-full bg-light border border-gray-200 p-2 rounded outline-none text-gray-500 focus-within:text-gray-900'
								placeholder='https://img.com'
								type='text'
								{...register('product_img', {
									required: true,
								})}
							/>
						</div>
						{/* input */}
						<div className='col-span-12 lg:col-span-6 space-y-2'>
							<label className='uppercase text-base font-semibold'>
								Product Description*
							</label>
							<textarea
								className='w-full bg-light border border-gray-200 p-2 rounded outline-none resize-none text-gray-500 focus-within:text-gray-900'
								placeholder='About the product'
								type='text'
								{...register('product_desc', {
									required: true,
								})}
							/>
						</div>
						{/* input */}
						<div className='col-span-12 lg:col-span-6 space-y-2'>
							<label className='uppercase text-base font-semibold'>
								Product More Images
							</label>
							<textarea
								className='w-full bg-light border border-gray-200 p-2 rounded outline-none resize-none text-gray-500 focus-within:text-gray-900'
								placeholder='Add more image links separated by comma'
								type='text'
								{...register('product_more_img', {})}
							/>
						</div>
						{/* input */}
						<div className='col-span-12 md:col-span-6 lg:col-span-3 space-y-2'>
							<label className='uppercase text-base font-semibold'>
								Product Price*
							</label>
							<input
								className='w-full bg-light border border-gray-200 p-2 rounded outline-none text-gray-500 focus-within:text-gray-900'
								placeholder='49'
								{...register('product_price', {
									required: true,
								})}
							/>
						</div>
						{/* input */}
						<div className='col-span-12 md:col-span-6 lg:col-span-3 space-y-2'>
							<label className='uppercase text-base font-semibold'>
								Product Category*
							</label>
							<select
								className='w-full bg-light border border-gray-200 text-gray-500 p-2 rounded outline-none text-gray-400 focus-within:text-gray-900'
								{...register('product_category', {
									required: true,
								})}
							>
								{categories.map((category, index) => (
									<option
										key={index}
										className='text-primary'
										value={category}
									>
										{category}
									</option>
								))}
							</select>
						</div>
						{/* input */}
						<div className='col-span-12 lg:col-span-6 space-y-2'>
							<label className='uppercase text-base font-semibold'>
								Product Available Colors
							</label>
							<div className='flex space-x-2'>
								{colors.map((color, index) => (
									<button
										key={index}
										type='button'
										onClick={() => handleColorList(color)}
										className={`${
											colorList.includes(color) &&
											'ring-2 ring-primary'
										} rounded-full p-0.5`}
									>
										<span
											className={`block p-3 rounded-full ${color}`}
										></span>
									</button>
								))}
							</div>
						</div>
						<input
							className='uppercase col-span-12 bg-primary text-white border border-gray-200 p-2 rounded outline-none'
							type='submit'
						/>
					</div>
				</form>
			</div>
		</div>
	);
};

export default AddAProduct;
