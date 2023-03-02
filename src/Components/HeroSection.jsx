import React from 'react';
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
