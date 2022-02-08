import React, {useState } from "react";
import Logo from "../images/logo.png";
import { FaBars, FaTimes } from "react-icons/fa";

import "./Navbar.css";

const Navbar = () => {
const [click, setClick] = useState(false);

const handleClick = () => setClick(!click);
const closeMenu = () => setClick(false);

	return (
		<div className="header">
			<nav className="navbar">
				<a href="/" className="logo">
					<img src={Logo} alt="logo" style={{ width: "100px" }} />
					<span>
						Rainbow <br /> Consulting <br />
					</span>
				</a>

				<div className="hamburger" onClick={handleClick}>
					{click ? <FaTimes size={30} /> : <FaBars size={30} />}
				</div>
				<ul className={click ? "nav-menu active" : "nav-menu"}>
					<li className="nav-item">
						<a href="/" onClick={closeMenu}>
							Home
						</a>
					</li>
					<li className="nav-item">
						<a href="#about" onClick={closeMenu}>
							About
						</a>
					</li>
					<li className="nav-item">
						<a href="#testimonials" onClick={closeMenu}>
							Testimonials
						</a>
					</li>
					<li className="nav-item">
						<a href="#demo" onClick={closeMenu}>
							Demo
						</a>
					</li>
				</ul>
			</nav>
		</div>
	);
};

export default Navbar;
