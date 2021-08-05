import './work.css';

import React from 'react';
import { Helmet } from 'react-helmet';
import MetaTags from 'react-meta-tags';

import Work_body from '../../components/work/work_body';
import Footer from '../../components/footer/footer';
import Navbar from '../../components/navbar/navbar';

const Work = () =>{
	return(
		<React.Fragment>
			<div className="work">
				<MetaTags>
		            <title>Raunak Anand</title>
		            <meta name="description" content="Hi👋 My name is Raunak Anand! Welcome to my website! I’m a rising senior studying Computer Science and Statistics at UC Davis. I’m interested in AR/VR and ML!" />
		            <meta property="og:title" content="Raunak Anand" />
		            <meta property="og:image" content="images/me.png" />
		         </MetaTags>
				<Navbar />
				<div class="work_content">
					<Work_body />
				</div>
				<div class="work_footer">
					<Footer />
				</div>
			</div>
		</React.Fragment>
	);
}

export default Work;