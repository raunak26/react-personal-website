import './index_body.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faSpotify, faTwitterSquare, faLinkedin } from '@fortawesome/free-brands-svg-icons';

import React from 'react';
import ReactTypingEffect from 'react-typing-effect';

const Index_body = () => {
	return (
		<React.Fragment>
			<div className="index_body">
				<div className="hero-glow hero-glow-left"></div>
				<div className="hero-glow hero-glow-right"></div>
				<div className="hero-card" data-aos="fade-up">
					<p className="hero-eyebrow">Applied Evals @ OpenAI • Model Evaluation</p>
					<div className="title-page-name">
						<ReactTypingEffect
							text={["Raunak Anand", "रौनक आनंद", "ରୋନକ ଆନନ୍ଦ"]}
							speed={(140)}
							eraseSpeed={(80)}
							typingDelay={(600)}
						/>
					</div>
					<p className="hero-description">
						M.S. candidate in Computer Science at the University of Pennsylvania.
						I design model evaluations that make LLM quality measurable, reliable, and actionable.
					</p>
					<div className="hero-tags">
						<span>Conversational AI</span>
						<span>Model Evaluation</span>
						<span>Software Engineering</span>
						<span>Product Thinking</span>
					</div>
					<div className="hero-actions">
						<a href="/#work" className="hero-button hero-button-primary">Explore Work</a>
						<a href="/RaunakAnand_Resume.pdf" target="_blank" rel="noreferrer" className="hero-button hero-button-secondary">Open Resume</a>
					</div>
					<div className="social-logos">
						<a href="https://www.linkedin.com/in/raunak-anand/" target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faLinkedin} className="first-page-logos fp-fa-Linkedin"></FontAwesomeIcon></a>
						<a href="https://github.com/raunak26" target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faGithub} className="first-page-logos fp-fa-Github"></FontAwesomeIcon></a>
						<a href="mailto:anandraunak2000@gmail.com" target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faEnvelope} className="first-page-logos fp-fa-Envelope"></FontAwesomeIcon></a>
						<a href="https://open.spotify.com/user/31dxduls3536yktvdp5baavgr5ca" target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faSpotify} className="first-page-logos fp-fa-Spotify"></FontAwesomeIcon></a>
						<a href="https://twitter.com/raunakanandsahu" target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faTwitterSquare} className="first-page-logos fp-fa-Twitter"></FontAwesomeIcon></a>
					</div>
				</div>
				<div className="portrait-wrap" data-aos="fade-left">
					<img src="/images/profile.jpg" className="Raunak-Anand" alt="Raunak Anand"/>
				</div>
			</div>
		</React.Fragment>
	);
};

export default Index_body;
