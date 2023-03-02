import React from 'react';
import RectangleOne from '../images/RectangleOne.png';
import RectangleTwo from '../images/RectangleTwo.png';
import RectangleThree from '../images/RectangleThree.png';

const ThirdPart = () => {
	return (
		<div className='ThirdPart'>
			<h1>We Are Open to Create Special Memories</h1>
			<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6'>
				<div className='leftRectangle'>
					<p>
						The morning is like a quiet winter day,ideal for alone
						time and for reading books. The noon is like Autumn,
						full of colours and banters. The evening is like a
						summer night bustling with people and ideal for
						hangouts. Arabika welcomes all its customers to come and
						create special memories.
					</p>
					<img
						src={RectangleOne}
						alt=''
					/>
				</div>
				<div className='midRectangle'>
					<img
						src={RectangleTwo}
						alt=''
					/>
					<p>
						Every cup is brewed with freshly roasted single origin
						beans. 100% premium Arabica blend is used to ensure the
						exquisite taste of coffee. These beans are ground and
						then the shots are timed to perfection; ready to serve
						fresh and hot. The house blend is well balanced for both
						strong and mild coffee drinks.
					</p>
				</div>
				<div className='rightRectangle'>
					<img
						src={RectangleThree}
						alt=''
					/>
					<p>Ready Every morning. The experience creates memories.</p>
				</div>
			</div>
		</div>
	);
};

export default ThirdPart;
