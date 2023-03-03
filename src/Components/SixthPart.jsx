import React from 'react';
import play from '../images/play.png';
import opening from '../images/opening.png';
import offer from '../images/offer.png';

const SixthPart = () => {
	return (
		<div className=' mt-10 mx-1'>
			<div class='flex items-center justify-center h-screen'>
				<div class='w-1/3 col-span-img'>
					<img
						src={play}
						alt=''
					/>
				</div>
				<div class='w-2/3 coffeeFit m-5'>
					<h2>Coffee Fit For Everyone</h2>
					<p className='my-5'>
						Our journey was inspired from the growing coffee culture
						in Dhaka. We support the growth of coffee culture
						partnering with other cafés and provide opportunities
						for working students to gather valuable work experience.
						Our vision is to make our customers experience our
						quality brew and create special memories. We value our
						customers and want to make sure that when you enter our
						cafés you become part of Arabika.
					</p>
					<div class='grid grid-cols-2 gap-2'>
						<div className='p-10'>
							<img
								src={opening}
								alt=''
							/>
						</div>

						<div className='bg-white p-10'>
							<img
								src={offer}
								alt=''
							/>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default SixthPart;
