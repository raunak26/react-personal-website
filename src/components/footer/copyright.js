import './copyright.css';

import React from 'react';

const Copyright = () =>{
	const year = new Date().getFullYear();
	return(
		<React.Fragment>
			<div className="copyright">
				<p>© {year} Raunak Anand</p>
			</div>
		</React.Fragment>
	);
}

export default Copyright;
