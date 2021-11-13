import React from 'react';

const MyOrders = () => {
	const handleCancelOrder = () => {
		// TODO: do delete operation here
	};

	return (
		<div className='space-y-4 flex flex-col items-start'>
			<h5 className='text-xl font-bold capitalize'>my orders</h5>
			<div className='w-full border rounded-lg bg-light p-2 space-y-2'>
				{/* heading */}
				<div className='lg:flex space-y-2 lg:space-y-0 justify-between'>
					{/* left heading */}
					<div className='flex justify-between lg:justify-start space-x-4'>
						<div className=''>
							<h5 className='uppercase text-sm text-gray-500 font-light'>
								order placed
							</h5>
							<p className='text-sm'>11/12/2021</p>
						</div>
						<div className=''>
							<h5 className='uppercase text-sm text-gray-500 font-light'>
								total price
							</h5>
							<p className='text-sm'>$179</p>
						</div>
					</div>
					{/* right heading */}
					<div className=''>
						<h5 className='text-sm text-gray-500 font-light'>
							ORDER #sldkjfklsdjfklsdjfkl
						</h5>
					</div>
				</div>
				{/* order item */}
				<div className='pb-2 lg:pb-0 space-y-2 lg:space-y-0 lg:flex justify-between items-center bg-white rounded-lg shadow text-gray-500 px-2'>
					{/* detail */}
					<div className='pb:2 lg:pb-0 space-y-2 lg:space-y-0 lg:flex items-center space-x-4'>
						<img
							className='object-cover h-28'
							src='https://demo1leotheme.b-cdn.net/leo_oobliss_demo/84-home_default/brown-bear-printed-sweater.jpg'
							alt='glass img'
						/>
						<h5 className='text-lg'>Armani Exchange AX4029</h5>
						<p>QTY: 5</p>
					</div>
					{/* actions */}
					<div className='flex items-center space-x-4'>
						<p className='bg-purple-100 text-purple-500 rounded-lg px-4 py-2'>
							Pending
						</p>
						<button
							onClick={handleCancelOrder}
							className='bg-red-100 text-red-500 rounded-lg px-4 py-2'
						>
							Cancel
						</button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default MyOrders;
