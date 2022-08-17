import './index.css';

import React from 'react';
import { Helmet } from 'react-helmet';
import MetaTags from 'react-meta-tags';
import FadeIn from 'react-fade-in';

import Index_body from '../../components/index/index_body';
import Footer from '../../components/footer/footer';
import Navbar from '../../components/navbar/navbar';

const Index = () =>{
	return(
		<React.Fragment>
			<FadeIn transitionDuration={(1000)}>
				<div className="index">
					<MetaTags>
			            <title>Raunak Anand</title>
			            <meta name="description" content="Hi👋 My name is Raunak Anand! Welcome to my website! I’m a rising senior studying Computer Science and Statistics at UC Davis. I’m interested in AR/VR and ML!" />
			            <meta property="og:title" content="Raunak Anand" />
			            <meta property="og:image" content="images/me.png" />
			         </MetaTags>
					<Navbar />
					<div class="index_content">
						<Index_body />
					</div>
				</div>
			</FadeIn>
		</React.Fragment>
	);
}

export default Index;