import React, { useState } from 'react';
import logo from '../images/logo.png';
import { ReactComponent as Hamburger } from '../images/Hamburger.svg';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
	const [showNavbar, setShowNavbar] = useState(false);
	// const [showImage, setShowImage] = useState(true);

	const handleShowNavbar = () => {
		setShowNavbar(!showNavbar);
		// setShowImage(!showImage);
	};

	return (
		<nav className='navbar'>
			<div className='NavContainer'>
				<div
					className='menu-icon'
					onClick={handleShowNavbar}
				>
					<Hamburger />
				</div>
				<div
					className={`nav-elements group  ${showNavbar && 'active'}`}
				>
					<ul>
						<li>
							<NavLink to='/'>Home</NavLink>
						</li>
						<li>
							<NavLink to='/aboutUs'>About Us</NavLink>
						</li>
						<li>
							<NavLink to='/products'>Our Product</NavLink>
						</li>
						<li>
							<NavLink to='/menu'>Menu</NavLink>
						</li>
					</ul>
				</div>
				<div className=''>
					<img
						src={logo}
						alt=''
						className='logo'
					></img>
				</div>
				<div className='nav-elements frame'>
					<ul>
						<li>
							<NavLink to='/blog'>Blog News</NavLink>
						</li>
						<li>
							<NavLink to='/contactUs'>Contact US</NavLink>
						</li>
						<li>
							<NavLink to='/cart'>Cart</NavLink>
						</li>
						<li>
							<NavLink to='/login'>Login</NavLink>
						</li>
					</ul>
				</div>
			</div>
		</nav>
	);
};

export default Navbar;
