import React from 'react';
import { Link } from 'react-router-dom';
import overviewImg from '../../../images/overview.jpg';
import overviewImg2 from '../../../images/overview2.jpg';

const Overview = () => {
	return (
		<div className='lg:grid grid-cols-2'>
			<div
				className='flex flex-col items-center pt-20 space-y-5'
				style={{
					background: `linear-gradient(rgba(255,255,255, 0.7), rgba(255,255,255, 0.19)) , url(${overviewImg2}) center/cover no-repeat`,
					height: '70vh',
				}}
			>
				<h5 className='uppercase text-4xl font-light text-center'>
					QUALITY GLASSES <br /> TRUE MODERN CLASSICS
				</h5>
				<p className='text-gray-500 w-8/12 mx-auto text-center'>
					We assure you with the best solution that you can get. We
					care and that is why we know how to shape your passion into
					wearing eyeglasses.
				</p>
				<div className='space-x-4'>
					<Link to='/explore'>
						<button className='btn bg-primary'>SHOP NOW</button>
					</Link>
					<Link to='/explore'>
						<button className='btn bg-black'>VIEW MORE</button>
					</Link>
				</div>
			</div>
			<div className='overflow-hidden'>
				<img
					className='object-cover w-full transform hover:scale-110 transition duration-300'
					style={{ height: '70vh' }}
					src={overviewImg}
					alt='overview'
				/>
			</div>
		</div>
	);
};

export default Overview;
