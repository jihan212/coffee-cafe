import React from 'react';

import Italian from '../images/Italian.png';
import Brazilian from '../images/Brazilian.png';
import American from '../images/American.png';
import positive from '../images/positive.png';

const FifthPart = () => {
	return (
		<div className='FifthPart mt-10'>
			<h2 className='justify-self-start ml-3'>Our Popular Products</h2>
			<button className='bg-transparent text-white font-semibold py-2 px-4 justify-self-end border rounded border-white-500 '>
				See All
			</button>
			<div className='grid grid-cols-1 gap-3 md:grid-cols-2 lg:grid-cols-3 gap-4 m-5'>
				<div className='FifthPartColumn m-2 p-8'>
					<img
						src={Italian}
						alt=''
					/>
					<h2 className='mt-5'>Italian Coffee Beans</h2>
					<p className='mt-5'>1085.00৳</p>
					<div className='grid grid-cols-5 justify-center mt-5'>
						<img
							src={positive}
							alt=''
						></img>
						<img
							src={positive}
							alt=''
						></img>
						<img
							src={positive}
							alt=''
						></img>
						<img
							src={positive}
							alt=''
						></img>
						<img
							src={positive}
							alt=''
						></img>
					</div>
					<button className='bg-transparent text-white font-semibold py-2 px-4 m-10 border rounded border-white-500 '>
						Add To Cart
					</button>
				</div>
				<div className='FifthPartColumn m-2 p-8'>
					<img
						src={Brazilian}
						alt=''
					/>
					<h2 className='mt-5'>Brazilian Coffee Beans</h2>
					<p className='mt-5'>1550.00৳</p>
					<div className='grid grid-cols-4 justify-center mt-5'>
						<img
							src={positive}
							alt=''
						></img>
						<img
							src={positive}
							alt=''
						></img>
						<img
							src={positive}
							alt=''
						></img>
						<img
							src={positive}
							alt=''
						></img>
						<img
							src={positive}
							alt=''
						></img>
					</div>
					<button className='bg-transparent text-white font-semibold py-2 px-4 m-10 border rounded border-white-500 '>
						Add To Cart
					</button>
				</div>
				<div className='FifthPartColumn m-2 p-8'>
					<img
						src={American}
						alt=''
					/>
					<h2 className='mt-5'>American Coffee Beans</h2>
					<p className='mt-5'>1085.00৳</p>
					<div className='grid grid-cols-4 justify-center mt-5'>
						<img
							src={positive}
							alt=''
						></img>
						<img
							src={positive}
							alt=''
						></img>
						<img
							src={positive}
							alt=''
						></img>
						<img
							src={positive}
							alt=''
						></img>
						<img
							src={positive}
							alt=''
						></img>
					</div>
					<button className='bg-transparent text-white font-semibold py-2 px-4 m-10 border rounded border-white-500 '>
						Add To Cart
					</button>
				</div>
			</div>
		</div>
	);
};

export default FifthPart;
