import React from 'react';
import Navbar from '../Navbar';
import HeroSection from '../HeroSection';
import SecondPart from '../SecondPart';
import ThirdPart from '../ThirdPart';
import FourthPart from '../FourthPart';
import FifthPart from '../FifthPart';
import Footer from '../Footer';

const Homepage = () => {
	return (
		<>
			<Navbar />
			<HeroSection />
			<SecondPart />
			<ThirdPart />
			<FourthPart />
			<FifthPart />
			{/* <Footer /> */}
		</>
	);
};

export default Homepage;
