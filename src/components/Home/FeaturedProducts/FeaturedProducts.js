import React from 'react';
import SectionTitle from '../../Shared/SectionTitle/SectionTitle';
import Product from '../Product/Product';

const FeaturedProducts = () => {
	return (
		<div className='container mx-auto space-y-10'>
			<SectionTitle
				title='featured products'
				subtitle='for more than 5 years, we have been serving quality.'
			/>
			<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 place-items-center'></div>
		</div>
	);
};

export default FeaturedProducts;
