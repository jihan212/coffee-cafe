import React from 'react';
import Navbar from '../Navbar';
import HeroSection from '../HeroSection';
import SecondPart from '../SecondPart';
import ThirdPart from '../ThirdPart';
import FourthPart from '../FourthPart';
import Footer from '../Footer';

const Homepage = () => {
	return (
		<>
			<Navbar />
			<HeroSection />
			<SecondPart />
			<ThirdPart />
			<FourthPart />
			{/* <Footer /> */}
		</>
	);
};

export default Homepage;
