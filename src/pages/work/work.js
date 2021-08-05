import './work.css';

import React from 'react';
import { Helmet } from 'react-helmet';

import Work_body from '../../components/work/work_body';
import Footer from '../../components/footer/footer';
import Navbar from '../../components/navbar/navbar';

const Work = () =>{
	return(
		<React.Fragment>
			<div className="work">
				<Helmet>
        			<title>Raunak Anand</title>
        			<meta
 						name="description"
          				content="Hi👋 My name is Raunak Anand! Welcome to my website! I’m a rising senior studying Computer Science and Statistics at UC Davis. I’m interested in AR/VR and ML!"
        			/>

        			{/* <!-- Google / Search Engine Tags --> */}
			        <meta itemprop="name" content="Raunak Anand" />
			        <meta
			          itemprop="description"
			          content="Hi👋 My name is Raunak Anand! Welcome to my website! I’m a rising senior studying Computer Science and Statistics at UC Davis. I’m interested in AR/VR and ML!"
			        />
			        <meta
			          itemprop="image"
			          content="https://www.raunakanand.com/images/me.png"
			        />

			        {/* <!-- Facebook Meta Tags --> */}
			        <meta property="og:url" content="https://www.raunakanand.com" />
			        <meta property="og:type" content="website" />
			        <meta property="og:title" content="Raunak Anand" />
			        <meta
			          property="og:description"
			          content="Hi👋 My name is Raunak Anand! Welcome to my website! I’m a rising senior studying Computer Science and Statistics at UC Davis. I’m interested in AR/VR and ML!"
			        />
			        <meta
			          property="og:image"
			          content="https://www.raunakanand.com/images/me.png"
			        />

			        {/* <!-- Twitter Meta Tags --> */}
			        <meta name="twitter:card" content="summary_large_image" />
			        <meta name="twitter:title" content="Raunak Anand" />
			        <meta
			          name="twitter:description"
			          content="Hi👋 My name is Raunak Anand! Welcome to my website! I’m a rising senior studying Computer Science and Statistics at UC Davis. I’m interested in AR/VR and ML!"
			        />
			        <meta
			          name="twitter:image"
			          content="https://www.raunakanand.com/images/me.png"
			        />
    			</Helmet>
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