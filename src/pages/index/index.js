import './index.css';

import React from 'react';
import MetaTags from 'react-meta-tags';
import FadeIn from 'react-fade-in';

import Index_body from '../../components/index/index_body';
import Work_body from '../../components/work/work_body';
import Footer from '../../components/footer/footer';
import Navbar from '../../components/navbar/navbar';

const Index = ({ theme, onToggleTheme }) =>{
	return(
		<React.Fragment>
			<FadeIn transitionDuration={(1000)}>
				<div className="index">
					<MetaTags>
			            <title>Raunak Anand</title>
			            <meta name="description" content="Raunak Anand — Applied Evals @ OpenAI and M.S. candidate in Computer Science at the University of Pennsylvania. I design model evaluations that make LLM quality measurable, reliable, and actionable." />
			            <meta property="og:title" content="Raunak Anand" />
			            <meta property="og:image" content="images/profile.jpg" />
			         </MetaTags>
					<Navbar theme={theme} onToggleTheme={onToggleTheme} />
					<section id="home" className="index_content">
						<Index_body />
					</section>
					<section id="work" className="index_work">
						<Work_body />
					</section>
					<footer className="index_footer">
						<Footer />
					</footer>
				</div>
			</FadeIn>
		</React.Fragment>
	);
}

export default Index;
