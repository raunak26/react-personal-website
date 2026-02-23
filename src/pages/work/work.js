import './work.css';

import React from 'react';
import MetaTags from 'react-meta-tags';
import FadeIn from 'react-fade-in';

import Work_body from '../../components/work/work_body';
import Footer from '../../components/footer/footer';
import Navbar from '../../components/navbar/navbar';

const Work = () =>{
	return(
		<React.Fragment>
			<FadeIn transitionDuration={(1000)}>
				<div className="work">
					<MetaTags>
			            <title>Raunak Anand</title>
			            <meta name="description" content="Raunak Anand — Applied Evals @ OpenAI and M.S. candidate in Computer Science at the University of Pennsylvania. I design model evaluations that make LLM quality measurable, reliable, and actionable." />
			            <meta property="og:title" content="Raunak Anand" />
			            <meta property="og:image" content="/images/profile.jpg" />
			            <meta name="twitter:card" content="summary_large_image" />
			            <meta name="twitter:image" content="/images/profile.jpg" />
			         </MetaTags>
					<Navbar />
					<div className="work_content">
						<Work_body />
					</div>
					<div className="work_footer">
						<Footer />
					</div>
				</div>
			</FadeIn>
		</React.Fragment>
	);
}

export default Work;
