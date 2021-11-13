import React, { useState, useEffect } from 'react';
import useAxios from '../../../hooks/useAxios';
import SectionTitle from '../../Shared/SectionTitle/SectionTitle';
import Product from '../Product/Product';

const FeaturedProducts = () => {
	const [products, setProducts] = useState();
	const { client } = useAxios();
	let size = 6;

	useEffect(() => {
		client
			.get(`/products?size=${size}`)
			.then((response) => {
				setProducts(response.data);
			})
			.catch((error) => {
				console.log(error);
			});
	}, []);

	return (
		<div className='container mx-auto space-y-10'>
			<SectionTitle
				title='featured products'
				subtitle='for more than 5 years, we have been serving quality.'
			/>
			<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 place-items-center'>
				{products &&
					products.map((product) => (
						<Product key={product._id} product={product} />
					))}
			</div>
		</div>
	);
};

export default FeaturedProducts;
