import './footer.css';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faEnvelope} from '@fortawesome/free-solid-svg-icons';
import {faGithub, faSpotify, faTwitterSquare, faLinkedin} from '@fortawesome/free-brands-svg-icons';

import React from 'react';

const Footer = () =>{
	return(
		<React.Fragment>
			<div className="footer">
				<div className="footer-content">
					<a href="https://www.linkedin.com/in/raunak-anand/" target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faLinkedin} className = "faLinkedin footer_logos"></FontAwesomeIcon></a>
	                <a href="https://github.com/raunak26" target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faGithub} className = "faGithub footer_logos"></FontAwesomeIcon></a>
					<a href="mailto:anandraunak2000@gmail.com" target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faEnvelope} className = "faEnvelope footer_logos"></FontAwesomeIcon></a>
	                <a href="https://open.spotify.com/user/31dxduls3536yktvdp5baavgr5ca" target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faSpotify} className = "faSpotify footer_logos"></FontAwesomeIcon></a>
	                <a href="https://twitter.com/raunakanandsahu" target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faTwitterSquare} className = "faTwitter footer_logos"></FontAwesomeIcon></a>
				</div>
				<p>© 2021 Raunak Anand</p>
			</div>
		</React.Fragment>
	);
}

export default Footer;