import React from 'react';
import {
	IoLocationOutline,
	IoCallOutline,
	IoMailOutline,
} from 'react-icons/io5';
import { Link } from 'react-router-dom';

const Footer = () => {
	const contactInfo = [
		{ icon: <IoLocationOutline />, info: '451 Wall Street, London, UK' },
		{ icon: <IoCallOutline />, info: 'Phone: (+084) 333-1233' },
		{ icon: <IoMailOutline />, info: 'eyeSide@eyewear.com' },
	];

	const helpLinks = [
		{ to: '/', text: 'Terms & Conditions' },
		{ to: '/', text: 'Contact' },
		{ to: '/', text: 'Accessories' },
		{ to: '/', text: 'Term of use' },
	];

	const aboutUsLinks = [
		{ to: '/', text: 'Help Center' },
		{ to: '/', text: 'Address Store' },
		{ to: '/', text: 'Privacy & Policy' },
		{ to: '/', text: 'eyeSide store' },
	];

	const productLinks = [
		{ to: '/', text: 'Orders' },
		{ to: '/', text: 'Downloads' },
		{ to: '/', text: 'How-to Guides' },
		{ to: '/', text: 'Quick Details' },
	];

	return (
		<div className='bg-light'>
			<div className='container mx-auto grid grid-cols-12 mt-10 p-5 lg:px-0 lg:py-10'>
				<div className='col-span-12 lg:col-span-3 space-y-4 text-center lg:text-left mb-5 lg:mb-0'>
					<h5 className='font-light'>CONTACT US</h5>
					<div className='flex flex-col space-y-2 text-gray-500 text-sm items-center lg:items-start'>
						{contactInfo.map(({ icon, info }, index) => (
							<p
								key={index}
								className='flex items-center space-x-2'
							>
								{icon}
								<span>{info}</span>
							</p>
						))}
					</div>
				</div>
				<div className='hidden col-span-6 lg:grid grid-cols-3'>
					<div className='space-y-4'>
						<h5 className='font-light'>HELP & INFORMATION</h5>
						<div className='flex flex-col space-y-2 text-gray-500 text-sm'>
							{helpLinks.map(({ to, text }, index) => (
								<Link key={index} to={to}>
									<button className=''>{text}</button>
								</Link>
							))}
						</div>
					</div>
					<div className='space-y-4'>
						<h5 className='font-light'>ABOUT US</h5>
						<div className='flex flex-col space-y-2 text-gray-500 text-sm'>
							{aboutUsLinks.map(({ to, text }, index) => (
								<Link key={index} to={to}>
									<button className=''>{text}</button>
								</Link>
							))}
						</div>
					</div>
					<div className='space-y-4'>
						<h5 className='font-light'>PRODUCT</h5>
						<div className='flex flex-col space-y-2 text-gray-500 text-sm'>
							{productLinks.map(({ to, text }, index) => (
								<Link key={index} to={to}>
									<button className=''>{text}</button>
								</Link>
							))}
						</div>
					</div>
				</div>
				<div className='col-span-12 lg:col-span-3 space-y-4 text-center lg:text-left'>
					<h5 className='font-light'>GET UPDATES</h5>
					<div className='flex flex-col space-y-2 text-gray-500 text-sm'>
						<p>Get eyeSide news updates & offers</p>
						<div className='rounded-3xl flex justify-between bg-white overflow-hidden shadow'>
							<input
								className='px-4 py-3 w-full outline-none'
								type='email'
								placeholder='Email address....'
							/>
							<button className='px-2 py-3 bg-black text-white rounded-r-3xl'>
								SUBMIT
							</button>
						</div>
					</div>
				</div>
			</div>
			<hr className='py-5' />
			<p className='text-center text-xs text-gray-500 pb-5'>
				Developed by Joy C Mollik | A Programming Hero Learner
			</p>
		</div>
	);
};

export default Footer;
