import React from 'react';
import footer from '../images/footer.png';
import phone from '../images/phone.png';
import location from '../images/location.png';
import mail from '../images/mail.png';
import logo from '../images/logo.png';
import facebook from '../images/facebook.png';
import insta from '../images/insta.png';
import twitter from '../images/twitter.png';
import pinterest from '../images/pinterest.png';
import youtube from '../images/youtube.png';

const Footer = () => {
	return (
		<footer className='mt-12 pb-12'>
			<div>
				<img
					src={footer}
					alt=''
				/>
				<p className='footerP mx-auto my-5'>Go To Top</p>
			</div>
			<div className='m-10 flex'>
				<div className='mx-5 flex items-center justify-center'>
					<img
						className='logo'
						src={logo}
						alt=''
					/>
				</div>
				<div className='mx-5 w-1/2 flex items-center justify-center'>
					<p className='text-left'>
						Freshly welcomes all its customers to come and create
						special memories. Our vision is to make our customers
						experience our quality brew and create special memories.
					</p>
				</div>
				<div className='mx-5 h-full grid grid-cols-5 gap-1 flex items-center justify-center'>
					<img
						src={facebook}
						alt=''
					/>
					<img
						src={insta}
						alt=''
					/>
					<img
						src={twitter}
						alt=''
					/>
					<img
						src={pinterest}
						alt=''
					/>
					<img
						src={youtube}
						alt=''
					/>
				</div>
			</div>
			<div className='grid grid-cols-3 gap-4 w-full'>
				<a
					href='/'
					className='flex w-1/3 flex items-center justify-center'
				>
					<img
						src={phone}
						alt=''
					/>
					<span className='ml-2'>+1234567890</span>
				</a>
				<a
					href='/'
					className='flex w-1/3 flex items-center justify-center'
				>
					<img
						src={location}
						alt=''
					/>
					<span className='ml-2'>Bashundhara R/A, Dhaka</span>
				</a>
				<a
					href='/'
					className='flex w-1/3 flex items-center justify-center'
				>
					<img
						src={mail}
						alt=''
					/>
					<span className='ml-2'>freshlycafe@support.com</span>
				</a>
			</div>
		</footer>
	);
};

export default Footer;
