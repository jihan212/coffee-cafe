import React from 'react';
import americano from '../images/americano.png';
import babyccino from '../images/babyccino.png';
import costRica from '../images/costRica.png';
import ethopian from '../images/ethopian.png';
import positive from '../images/positive.png';
import negative from '../images/negative.png';

const FourthPart = () => {
	return (
		<div className='FourthPart'>
			<h2>To Discover More Look Into Our Coffee Menu</h2>
			<button className='bg-transparent text-white font-semibold py-2 px-4 m-10 border rounded border-white-500 '>
				See All
			</button>
			<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 m-2'>
				<div className='FourthPartColumn'>
					<img
						src={americano}
						alt=''
					/>
					<h2>Americano</h2>
					<p>150.00৳</p>
					<div className='grid grid-cols-4 justify-center'>
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
				<div className='FourthPartColumn'>
					<img
						src={babyccino}
						alt=''
					/>
					<h2>Bebyccino</h2>
					<p>100.00৳</p>
					<div className='grid grid-cols-4 justify-center'>
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
				<div className='FourthPartColumn'>
					<img
						src={costRica}
						alt=''
					/>
					<h2>Cost Rica</h2>
					<p>250.00৳</p>
					<div className='grid grid-cols-4 justify-center'>
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
				<div className='FourthPartColumn'>
					<img
						src={ethopian}
						alt=''
					/>
					<h2>Ethopian</h2>
					<p>320.00৳</p>

					<div className='grid grid-cols-4 justify-center'>
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
