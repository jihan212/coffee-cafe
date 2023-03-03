import React from 'react';
import Navbar from '../Navbar';
import HeroSection from '../HeroSection';
import SecondPart from '../SecondPart';
import ThirdPart from '../ThirdPart';
import FourthPart from '../FourthPart';
import FifthPart from '../FifthPart';
import SixthPart from '../SixthPart';
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
			<SixthPart />
			{/* <Footer /> */}
		</>
	);
};

export default Homepage;
