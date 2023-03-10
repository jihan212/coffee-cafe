import React from 'react';
import americano from '../images/americano.png';
import babyccino from '../images/babyccino.png';
import costRica from '../images/costRica.png';
import ethopian from '../images/ethopian.png';
import positive from '../images/positive.png';
import negative from '../images/negative.png';

const FourthPart = () => {
	return (
		<div className='FourthPart mt-10'>
			<h2>To Discover More Look Into Our Coffee Menu</h2>
			<button className='bg-transparent text-white font-semibold py-2 px-4 m-5 border rounded border-white-500 '>
				See All
			</button>
			<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 m-2'>
				<div className='FourthPartColumn m-1 p-8'>
					<img
						src={americano}
						alt=''
					/>
					<h2 className='mt-5'>Americano</h2>
					<p className='mt-5'>150.00৳</p>
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
							src={negative}
							alt=''
						></img>
					</div>
					<button className='bg-transparent text-white font-semibold py-2 px-4 m-10 border rounded border-white-500 '>
						Add To Cart
					</button>
				</div>
				<div className='FourthPartColumn m-1 p-8'>
					<img
						src={babyccino}
						alt=''
					/>
					<h2 className='mt-5'>Bebyccino</h2>
					<p className='mt-5'>100.00৳</p>
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
							src={negative}
							alt=''
						></img>
					</div>
					<button className='bg-transparent text-white font-semibold py-2 px-4 m-10 border rounded border-white-500 '>
						Add To Cart
					</button>
				</div>
				<div className='FourthPartColumn m-1 p-8'>
					<img
						src={costRica}
						alt=''
					/>
					<h2 className='mt-5'>Cost Rica</h2>
					<p className='mt-5'>250.00৳</p>
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
							src={negative}
							alt=''
						></img>
					</div>
					<button className='bg-transparent text-white font-semibold py-2 px-4 m-10 border rounded border-white-500 '>
						Add To Cart
					</button>
				</div>
				<div className='FourthPartColumn m-1 p-8'>
					<img
						src={ethopian}
						alt=''
					/>
					<h2 className='mt-5'>Ethopian</h2>
					<p className='mt-5'>320.00৳</p>

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
							src={negative}
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

export default FourthPart;
