import './index.css';

import React from 'react';
import { Helmet } from 'react-helmet';

import Index_body from '../../components/index/index_body';
import Footer from '../../components/footer/footer';
import Navbar from '../../components/navbar/navbar';


const Index = () =>{
	return(
		<React.Fragment>
			<div className="index">
				<Helmet>
        			<title>Raunak Anand</title>
    			</Helmet>
				<Navbar />
				<div class="index_content">
					<Index_body />
				</div>
				<div class="index_footer">
					<Footer />
				</div>
			</div>
		</React.Fragment>
	);
}

export default Index;