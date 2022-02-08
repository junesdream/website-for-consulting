import React from 'react';
import './Demo.css';
import ReactPlayer from 'react-player/youtube';

const Demo = () => {
  return (
		<div className="demo" id="demo">
			<div className="container">
				<div className="col-1">
					<p>More than 100 advices form</p>
					<p>One Philosophy </p>
					<p>
						If you have clicked on our website then the chances are
						that you are currently struggling with something in your
						life, and you feel that counselling could possibly help
						you right now. Whether you are looking on here for
						yourself or for someone else, you will find plenty of
						information on our site about us, our way of working and
						also all the details you need about where and how the
						counselling takes place.
					</p>
					<button className="button">
						Get your free Consulting term
					</button>
				</div>
				<div className="col-2">
					<ReactPlayer
						url="https://www.youtube.com/watch?v=HO6cbtdmkIc&ab_channel=CozyRain"
						controls={true}
						width="570"
						height="320"
					/>
				</div>
			</div>
		</div>
  );
};

export default Demo;
