import React from 'react';
import Person1 from '../images/person-1.png';
import Person2 from '../images/person-2.png';
import Person3 from '../images/person-3.png';
import Person4 from '../images/person-4.png';
import Person5 from '../images/person-5.png';
import Person6 from '../images/person-6.png';

import "./Testimonials.css";

const Testimonials = () => {
  return (
		<div className="testimonials" id="testimonials">
			<div className="container">
				<h2>Testimonials</h2>
				<span className="line"></span>
				<div className="content">
					<div className="card">
						<img src={Person1} alt="person1" />
						<p>
							I had a few issues I needed to work through, but the
							idea of seeing a therapist was just crazy. I knew I
							wasn't crazy and the last thing I needed was to have
							someone treat me like I was broken. The last 3
							months have proven me wrong consistently as we
							addressed the “little quirks” that I have been
							avoiding. Things have improved so much at home and
							work. I wish I called sooner...
						</p>
						<p>
							<span>Syndia Gomez</span>
						</p>
						<p>Student</p>
					</div>
					<div className="card">
						<img src={Person2} alt="person2" />
						<p>
							When I moved to this area, I struggled to adjust to
							my new position and home. Between the demands of my
							work and family I was overwhelmed and often felt as
							though I was drowning under the pressure. I was
							considering moving my family back to the northeast.
							Working with Dr. Judi has helped tremendously. I
							have learned the skills that I need to help me
							better manage everything...
						</p>
						<p>
							<span>Elisabeth Brown</span>
						</p>
						<p>Marekting Manager</p>
					</div>

					<div className="card">
						<img src={Person3} alt="person3" />
						<p>
							I was struggling with my dissertation for a while –
							More like a couple of years. At times it seemed so
							overwhelming and never ending that I even thought of
							giving up. Between work, family and life, there was
							no time left to conduct research and write a
							dissertation...
						</p>
						<p>
							<span>Marc Brandele</span>
						</p>
						<p>Software Developer</p>
					</div>
					<div className="card">
						<img src={Person4} alt="person4" />
						<p>
							He has access to a huge volume of supporting
							literature collected over his years of experience,
							and a lot of information to assist you to prepare
							and boost your development between sessions. There
							was frequently so much in the sessions it was worth
							taking notes and revisiting them afterwards...
						</p>
						<p>
							<span>Michale Longway</span>
						</p>
						<p>CEO Company</p>
					</div>
					<div className="card">
						<img src={Person5} alt="person5" />
						<p>
							He is ethical, thoughtful, balanced yet direct and
							to the point. I would absolutely recommend him to
							others and have already done so. He provided such a
							great atmosphere for me and my wife to really engage
							in our views. Both of us have come out of our
							interactions with a positive view on how helpful the
							sessions have been. Of course there will be tough
							moments, but Mark did a great job of facilitating...
						</p>
						<p>
							<span>Maria Orson</span>
						</p>
						<p>Banker</p>
					</div>
					<div className="card">
						<img src={Person6} alt="person6" />
						<p>
							I knew what I could expect from him and that made it
							easier to believe that I could throw anything at him
							and everything would still be okay. What I most
							appreciated was that he was honest about the
							feelings I evoked in him. His willingness to share
							that helped me become more aware of the effects I
							had on others, as well as the feelings I had been
							directing towards myself, which in turn, reminded me
							to be more mindful about practicing self-compassion...
						</p>
						<p>
							<span>Alan Wonderwood</span>
						</p>
						<p>Teacher</p>
					</div>
				</div>
			</div>
		</div>
  );
};

export default Testimonials;
 