import React, { useState } from 'react';
import Footer from '../../Shared/Footer/Footer';
import Header from '../../Shared/Header/Header';
import Rate from 'rc-rate';
import 'rc-rate/assets/index.css';
import { MdInsertComment, MdExpandLess, MdExpandMore } from 'react-icons/md';
import {
	TiSocialFacebook,
	TiSocialTwitter,
	TiSocialPinterest,
} from 'react-icons/ti';
import OrderModal from '../OrderModal/OrderModal';

const GlassDetailPage = () => {
	const [currImg, setCurrImg] = useState(
		'https://demo1leotheme.b-cdn.net/leo_oobliss_demo/79-large_default/hummingbird-printed-t-shirt.jpg'
	);
	const [selectedColor, setSelectedColor] = useState('');
	const [quantity, setQuantity] = useState(1);
	let [isOrderOpen, setIsOrderOpen] = useState(false);

	const handleQuantityChange = (operation) => {
		if (operation === 'add' && quantity + 1 <= 10) {
			setQuantity(quantity + 1);
		} else if (operation === 'sub' && quantity - 1 > 0) {
			setQuantity(quantity - 1);
		}
	};

	const imgLinks = [
		'https://demo1leotheme.b-cdn.net/leo_oobliss_demo/79-large_default/hummingbird-printed-t-shirt.jpg',
		'https://demo1leotheme.b-cdn.net/leo_oobliss_demo/86-large_default/the-best-is-yet-to-come-framed-poster.jpg',
		'https://demo1leotheme.b-cdn.net/leo_oobliss_demo/79-large_default/hummingbird-printed-t-shirt.jpg',
		'https://demo1leotheme.b-cdn.net/leo_oobliss_demo/79-large_default/hummingbird-printed-t-shirt.jpg',
	];

	return (
		<>
			<Header />
			<div className='container mx-auto lg:grid grid-cols-2 mt-10'>
				{/* left column */}
				<div className=''>
					<div>
						<img src={currImg} alt='glassImg' />
					</div>
					<div className='grid grid-cols-4 gap-2'>
						{imgLinks.map((img, index) => (
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
					<h5 className='text-3xl'>Armani Exchange AX4029</h5>
					{/* rating */}
					<div className='flex items-center space-x-2'>
						<span>Rating</span>
						<span>
							<Rate value={4} disabled />
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
					<h5 className='text-primary text-xl'>$23.90</h5>
					{/* desc */}
					<p>Printed on rigid matt paper and smooth surface.</p>
					{/* colors */}
					<div className='flex space-x-4 items-center'>
						<h5 className='text-lg'>COLOR</h5>
						<div className='flex space-x-2'>
							<button className='ring-2 ring-primary rounded-full p-0.5'>
								<span className='block p-3 rounded-full bg-black'></span>
							</button>
							<button>
								<span className='block p-3 rounded-full bg-red-400'></span>
							</button>
							<button>
								<span className='block p-3 rounded-full bg-yellow-500'></span>
							</button>
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
			/>
			<Footer />
		</>
	);
};

export default GlassDetailPage;
