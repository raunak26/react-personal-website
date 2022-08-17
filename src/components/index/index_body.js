import './index_body.css';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faEnvelope} from '@fortawesome/free-solid-svg-icons';
import {faGithub, faSpotify, faTwitterSquare, faLinkedin} from '@fortawesome/free-brands-svg-icons';

import React from 'react';
import Particles from 'react-particles-js';
import ReactTypingEffect from 'react-typing-effect';

const Index_body = () =>{
	return(
		<React.Fragment>
			<div class="index_body">
				<Particles id="particles-js" 
    				params={{
    					particles: {
    						number: {
    							value: 80,
    							density:{
                  					enable: true,
                 		 			value_area: 650,
               					}	
	        				},
    						line_linked: {
            					shadow: {
            						enable: true,
            						color: "white",
            						blur: 5,
            					}
            				},
            				move:{
				                enable:true,
				                speed:0.75,
				                direction: "none",
				            }
            			},
            			interactivity: {
            				detect_on:"canvas",
            				events:{
	            				onhover: {
	            					enable: true,
	            					modes: "grab",
	            				},
	            				onclick:{
									enable: true,
									mode: "push",
								},

							},
							modes:{
								grab:{
									distance:200,
									line_linked:{
										opacity:1
									}
								},
								push:{
									particles_nb:4
								},
							}
            			}
					}} />

					<div class="text">

                    	<img src="/images/RaunakAnand.png" class="Raunak-Anand" alt="me"/>
                    	<div class = "title-page-name">
                    		<ReactTypingEffect
        						text={["Raunak Anand", "रौनक आनंद", "ରୋନକ ଆନନ୍ଦ"]}
        						speed={(200)}
        						eraseSpeed={(100)}
        						typingDelay={(500)}
      						/>
						</div>
                    	<h2>Software Engineer at Microsoft Semantic Machines</h2>
						<h2>UC Davis Computer Science Graduate</h2>

                    	<div className="social-logos">
							<a href="https://www.linkedin.com/in/raunak-anand/" target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faLinkedin} className = "first-page-logos"></FontAwesomeIcon></a>
							<a href="https://github.com/raunak26" target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faGithub} className = "first-page-logos"></FontAwesomeIcon></a>
							<a href="mailto:anandraunak2000@gmail.com" target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faEnvelope} className = "first-page-logos"></FontAwesomeIcon></a>
							<a href="https://open.spotify.com/user/31dxduls3536yktvdp5baavgr5ca" target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faSpotify} className = "first-page-logos"></FontAwesomeIcon></a>
							<a href="https://twitter.com/raunakanandsahu" target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faTwitterSquare} className = "first-page-logos"></FontAwesomeIcon></a>
                    	</div>

                	</div>

					
			</div>
		</React.Fragment>
	);
}

export default Index_body;