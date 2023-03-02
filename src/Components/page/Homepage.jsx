import React from 'react';
import Navbar from '../Navbar';
import HeroSection from '../HeroSection';
import SecondPart from '../SecondPart';
import ThirdPart from '../ThirdPart';
import Footer from '../Footer';

const Homepage = () => {
	return (
		<>
			<Navbar />
			<HeroSection />
			<SecondPart />
			<ThirdPart />
			<Footer />
		</>
	);
};

export default Homepage;
