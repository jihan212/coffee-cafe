import React from 'react';
import { Link } from 'react-router-dom';
import hero from '../images/hero.png';
import heroCorner from '../images/heroCorner.png';

const HeroSection = () => {
	return (
		<div className='HeroSection'>
			<div className='heroText'>
				<img
					src={heroCorner}
					alt=''
				/>
				<div>
					<h1>Freshly Brewed Coffee</h1>
					<p>
						Everyday in Arabika is like the colourful seasons of
						Bangladesh. Arabika welcomes all its customers to come
						and create special memories.
					</p>
					<Link to='/order'>
						<button className='bg-transparent text-white font-semibold py-2 px-4 m-5 border rounded border-white-500 '>
							Order Now
						</button>
					</Link>
				</div>
			</div>
			<div className='heroImage'>
				<img
					src={hero}
					alt=''
				/>
			</div>
		</div>
	);
};

export default HeroSection;
