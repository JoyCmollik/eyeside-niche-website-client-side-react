import React from 'react';
import { Link } from 'react-router-dom';

const Banner = () => {
	return (
		<div
			className='container mx-auto'
			style={{ height: 'calc(100vh - 64px)' }}
		>
			<div className='h-full grid grid-cols-12 gap-4 p-4 lg:pb-10 lg:px-0'>
				{/* left column */}
				<div
					className='col-span-12 lg:col-span-7 bg-yellow-100 h-full'
					style={{
						background: `linear-gradient(rgba(255,255,255, 0.7), rgba(255,255,255, 0.19)) , url('https://images.unsplash.com/photo-1586652171272-8f18c34f79af?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fGV5ZXdlYXJ8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60') center/cover no-repeat`,
					}}
				>
					<div className='h-full flex flex-col ml-4 lg:ml-10 justify-center space-y-5'>
						<h5 className='uppercase text-xl font-light'>
							great accessories
						</h5>
						<h1 className='text-6xl'>
							Forest Eyes <br /> Glasses
						</h1>
						<h4 className='text-2xl'>
							Sale up to <span className='text-brand'>30%</span>{' '}
							off
						</h4>
						<Link to='/explore'>
							<button className='btn bg-black'>
								SHOP ALL GLASSES
							</button>
						</Link>
					</div>
				</div>

				{/* right column */}
				<div className='hidden col-span-5 lg:grid h-full grid-rows-2 gap-4'>
					{/* first row */}
					<div
						className='h-full bg-green-100'
						style={{
							background: `linear-gradient(rgba(255,255,255, 0.8), rgba(255,255,255, 0.5)) ,url('https://images.unsplash.com/photo-1559070081-648fb00b2ed1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80') center/cover no-repeat`,
						}}
					>
						<div className='h-full flex flex-col justify-center items-end mr-10 space-y-5'>
							<h5 className='uppercase text-xl font-light'>
								WOMAN SUNGLASSES
							</h5>
							<h5 className='uppercase text-4xl'>
								porsche glasses
							</h5>
							<Link to='/explore'>
								<button className='underline'>SHOP NOW</button>
							</Link>
						</div>
					</div>
					{/* second row */}
					<div
						className='h-full bg-green-400'
						style={{
							background: `linear-gradient(rgba(255,255,255, 0.4), rgba(255,255,255, 0.1)) ,url('https://images.unsplash.com/photo-1582142407894-ec85a1260a46?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1170&q=80') center/cover no-repeat`,
						}}
					>
						<div className='h-full flex flex-col justify-center items-end mr-10 space-y-5'>
							<h5 className='uppercase text-xl font-light'>
								flat 40% off
							</h5>
							<h5 className='uppercase text-4xl'>
								exclusive brands
							</h5>
							<Link to='/explore'>
								<button className='underline'>SHOP NOW</button>
							</Link>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Banner;
