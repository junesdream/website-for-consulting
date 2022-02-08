import React from 'react';
import './About.css';
import Consultant from '../images/consultant.png';

const About = () => {
  return (
		<div className="about">
			<div className="container">
				<img src={Consultant} alt="consul" />
				<div className="col-2">
					<h2>About</h2>
					<span className="line"></span>
					<p>
						Rainbow Consultancy is an International Consulting
						advice center with offices in multiple jurisdictions
						over the world. Get Advice from Rainbow with Intense
						gives you the ability to come further.
					</p>
					<p>
						I am David Pang, a senior advisor for your mental
						coaching who will accompany you well into the light
						again.
					</p>
					<button className="button">Explore More</button>
				</div>
			</div>
		</div>
  );
};

export default About;
 