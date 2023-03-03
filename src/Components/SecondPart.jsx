import React from 'react';
import Frame from '../images/Frame.png';

const SecondPart = () => {
	return (
		<div className='SecondPart mt-10'>
			<h2>Providing Unique Coffee Experiences</h2>
			<div class='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3'>
				<div className='leftGrid'>
					<div className='m-12'>
						<h1>Coffee Shop</h1>
						<p className='m-3'>
							Our Coffees are carefully selected for quality,
							flavor and social impact.
						</p>
					</div>
					<div className='m-12'>
						<h1>Coffee Machine</h1>
						<p className='m-3'>
							Our Coffees are carefully selected for quality,
							flavor and social impact.
						</p>
					</div>
					<div className='m-12'>
						<h1>High Quality</h1>
						<p className='m-3'>
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
					<div className='m-12 w-75'>
						<h1>Coffee Shop</h1>
						<p className='m-3'>
							Our Coffees are carefully selected for quality,
							flavor and social impact.
						</p>
					</div>
					<div className='m-12'>
						<h1>Coffee Machine</h1>
						<p className='m-3'>
							Our Coffees are carefully selected for quality,
							flavor and social impact.
						</p>
					</div>
					<div className='m-12'>
						<h1>High Quality</h1>
						<p className='m-3'>
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
