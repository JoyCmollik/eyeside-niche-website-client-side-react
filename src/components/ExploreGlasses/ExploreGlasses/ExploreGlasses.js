import React, { useState } from 'react';
import Product from '../../Home/Product/Product';
import Footer from '../../Shared/Footer/Footer';
import Header from '../../Shared/Header/Header';

const ExploreGlasses = () => {
	const [category, setCategory] = useState('All Glasses');
	const categories = [
		'All Glasses',
		"Women's Eyeglasses",
		"Men's Eyeglasses",
		'Ray Ban Eyeglasses',
		"Multifocal's",
		'Designer Eyeglasses',
	];

	return (
		<>
			<Header />
			<div className='container mx-auto'>
				<div className='lg:grid grid-cols-12'>
					<div className='hidden lg:block col-span-4'>
						<h5 className='uppercase text-xl font-light mb-8'>
							filter by
						</h5>
						<div className='space-y-4'>
							<h5 className='text-lg border-l-2 pl-2 border-black'>
								Categories
							</h5>
							<div className='flex flex-col space-y-2 items-start text-sm'>
								{categories.map((category, index) => (
									<button
										className='transition duration-300 transform hover:text-primary hover:translate-x-1'
										onClick={() => setCategory(category)}
										key={index}
									>
										{category}
									</button>
								))}
							</div>
						</div>
					</div>
					<div className='col-span-12 lg:col-span-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 place-items-center'>
						<Product />
						<Product />
						<Product />
						<Product />
					</div>
				</div>
			</div>
			<Footer />
		</>
	);
};

export default ExploreGlasses;
