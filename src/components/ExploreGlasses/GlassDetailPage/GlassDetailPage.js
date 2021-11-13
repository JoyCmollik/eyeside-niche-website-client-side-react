import React, { useEffect, useState } from 'react';
import Footer from '../../Shared/Footer/Footer';
import Header from '../../Shared/Header/Header';
import { MdInsertComment, MdExpandLess, MdExpandMore } from 'react-icons/md';
import {
	TiSocialFacebook,
	TiSocialTwitter,
	TiSocialPinterest,
} from 'react-icons/ti';
import Rating from '@mui/material/Rating';
import OrderModal from '../OrderModal/OrderModal';
import { useParams } from 'react-router-dom';
import useAxios from '../../../hooks/useAxios';

const GlassDetailPage = () => {
	const [currImg, setCurrImg] = useState('');
	const [selectedColor, setSelectedColor] = useState(null);
	const [quantity, setQuantity] = useState(1);
	const [isOrderOpen, setIsOrderOpen] = useState(false);
	const { id } = useParams();
	const [product, setProduct] = useState(null);
	const { client } = useAxios();

	// fetching product info
	useEffect(() => {
		client.get(`/product/${id}`).then((response) => {
			setProduct(response.data);
		});
	}, []);

	const handleQuantityChange = (operation) => {
		if (operation === 'add' && quantity + 1 <= 10) {
			setQuantity(quantity + 1);
		} else if (operation === 'sub' && quantity - 1 > 0) {
			setQuantity(quantity - 1);
		}
	};

	return (
		<>
			<Header />
			<div className='container mx-auto lg:grid grid-cols-2 mt-10'>
				{/* left column */}
				<div className=''>
					<div>
						<img
							src={currImg ? currImg : product?.product_img}
							alt='glassImg'
						/>
					</div>
					<div className='grid grid-cols-4 gap-2'>
						{product?.product_more_img.map((img, index) => (
							<button
								onClick={() => setCurrImg(img)}
								key={index}
								className='border rounded'
							>
								<img src={img} alt='img' />
							</button>
						))}
					</div>
				</div>
				{/* right column */}
				<div className='space-y-4 text-sm'>
					{/* title */}
					<h5 className='text-3xl'>
						{product && product.product_title}
					</h5>
					{/* rating */}
					<div className='flex items-center space-x-2'>
						<span>Rating</span>
						<span>
							<Rating value={0} readOnly />
						</span>
					</div>
					{/* reviews */}
					<button className='flex items-center space-x-2'>
						<MdInsertComment />
						<span>Read reviews(1)</span>
					</button>
					{/* share */}
					<div className='flex items-center space-x-2'>
						<span>Share</span>
						<button style={{ color: '#3b5998' }}>
							<TiSocialFacebook />
						</button>
						<button style={{ color: '#00acee' }}>
							<TiSocialTwitter />
						</button>
						<button style={{ color: '#c8232c' }}>
							<TiSocialPinterest />
						</button>
					</div>
					{/* price */}
					<h5 className='text-primary text-xl'>
						${product && product.product_price}
					</h5>
					{/* desc */}
					<p>{product && product.product_desc}</p>
					{/* colors */}
					<div className='flex space-x-4 items-center'>
						<h5 className='text-lg'>COLOR</h5>
						<div className='flex space-x-2'>
							{product &&
								product.product_colors.map((color, index) => (
									<button
										key={index}
										onClick={() => setSelectedColor(color)}
										className={`${
											selectedColor === color &&
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
					{/* quantity */}
					<div className='flex space-x-4 items-center'>
						<h5 className='text-lg'>QUANTITY</h5>
						<div className='flex p-2 text-lg'>
							<button
								onClick={() => {
									handleQuantityChange('sub');
								}}
								className='px-2 border'
							>
								<MdExpandMore />
							</button>
							<p className='w-10 border text-center'>
								{quantity}
							</p>
							<button
								onClick={() => {
									handleQuantityChange('add');
								}}
								className='px-2 border'
							>
								<MdExpandLess />
							</button>
						</div>
					</div>
					{/* purchase button */}
					<button
						onClick={() => setIsOrderOpen(true)}
						className='btn bg-primary'
					>
						PURCHASE
					</button>
				</div>
			</div>
			<OrderModal
				isOrderOpen={isOrderOpen}
				setIsOrderOpen={setIsOrderOpen}
				selectedColor={selectedColor}
				quantity={quantity}
				product={product}
			/>
			<Footer />
		</>
	);
};

export default GlassDetailPage;
