import React from 'react';
import coffeeOne from '../images/coffeeOne.png';
import coffeeTwo from '../images/coffeeTwo.png';
import coffeeThree from '../images/coffeeThree.png';
import coffeeFour from '../images/coffeeFour.png';
import coffeeFive from '../images/coffeeFive.png';
import coffeeSix from '../images/coffeeSix.png';
import coffeeSeven from '../images/coffeeSeven.png';
import coffeeEight from '../images/coffeeEight.png';

const SeventhPart = () => {
	return (
		<div className='SeventhPart mt-10 mb-5'>
			<h2 className='mb-10'>Coffee Moments</h2>
			<div>
				<div class='grid grid-cols-3 flex items-center justify-center'>
					<div class='m-2'>
						<img
							src={coffeeOne}
							alt=''
						/>
					</div>
					<div class='m-2'>
						<img
							src={coffeeTwo}
							alt=''
						/>
					</div>
					<div class='m-2'>
						<img
							src={coffeeThree}
							alt=''
						/>
					</div>
				</div>

				<div class='flex items-center justify-center'>
					<div class='w-2/3 '>
						<img
							src={coffeeFour}
							alt=''
						/>
					</div>
					<div class='w-1/3 '>
						<img
							src={coffeeFive}
							alt=''
						/>
					</div>
				</div>

				<div class='grid grid-cols-3 flex items-center justify-center'>
					{' '}
					<div class='m-2'>
						<img
							src={coffeeSix}
							alt=''
						/>
					</div>
					<div class='m-2'>
						<img
							src={coffeeSeven}
							alt=''
						/>
					</div>
					<div class='m-2'>
						<img
							src={coffeeEight}
							alt=''
						/>
					</div>
				</div>
			</div>
		</div>
	);
};

export default SeventhPart;
