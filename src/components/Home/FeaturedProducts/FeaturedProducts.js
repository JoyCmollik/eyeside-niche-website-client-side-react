import React, { useState, useEffect } from 'react';
import useAxios from '../../../hooks/useAxios';
import SectionTitle from '../../Shared/SectionTitle/SectionTitle';
import Product from '../Product/Product';
import {
	useTransition,
	useChain,
	animated,
	useSpringRef,
} from '@react-spring/web';
import loading from '../../../images/1490.png';

const FeaturedProducts = () => {
	const [products, setProducts] = useState([]);
	const { client } = useAxios();
	let dataSize = 4;

	const transApi = useSpringRef();
	const transition = useTransition(products ? products : [], {
		ref: transApi,
		trail: 400 / dataSize,
		from: { opacity: 0, scale: 0 },
		enter: { opacity: 1, scale: 1 },
		leave: { opacity: 0, scale: 0 },
	});

	// This will orchestrate the two animations above, comment the last arg and it creates a sequence
	useChain([transApi], [0.4]);

	useEffect(() => {
		client
			.get(`/products?size=${dataSize}`)
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

			{!products.length ? (
				<div className='flex justify-center items-center h-40'>
					<img src={loading} alt='loading' />
				</div>
			) : (
				<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 place-items-center'>
					{transition((style, item) => (
						<animated.div style={{ ...style }}>
							<Product key={item._id} product={item} />
						</animated.div>
					))}
				</div>
			)}
		</div>
	);
};

export default FeaturedProducts;
