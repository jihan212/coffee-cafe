import React from 'react';
import Frame from '../images/Frame.png';

const SecondPart = () => {
	return (
		<div className='SecondPart'>
			<h2>Providing Unique Coffee Experiences</h2>
			<div class='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6'>
				<div className='leftGrid'>
					<div>
						<h1>Coffee Shop</h1>
						<p>
							Our Coffees are carefully selected for quality,
							flavor and social impact.
						</p>
					</div>
					<div>
						<h1>Coffee Machine</h1>
						<p>
							Our Coffees are carefully selected for quality,
							flavor and social impact.
						</p>
					</div>
					<div>
						<h1>High Quality</h1>
						<p>
							Our Coffees are carefully selected for quality,
							flavor and social impact.
						</p>
					</div>
				</div>
				<div className='imgGrid'>
					<img
						src={Frame}
						alt=''
					/>
				</div>
				<div className='rightGrid'>
					<div>
						<h1>Coffee Shop</h1>
						<p>
							Our Coffees are carefully selected for quality,
							flavor and social impact.
						</p>
					</div>
					<div>
						<h1>Coffee Machine</h1>
						<p>
							Our Coffees are carefully selected for quality,
							flavor and social impact.
						</p>
					</div>
					<div>
						<h1>High Quality</h1>
						<p>
							Our Coffees are carefully selected for quality,
							flavor and social impact.
						</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default SecondPart;
