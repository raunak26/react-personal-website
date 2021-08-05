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