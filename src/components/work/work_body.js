import './work_body.css';

import React, { useState } from 'react';

import WorkOne from './workOne';
import WorkTwo from './workTwo';
import WorkThree from './workThree';
import WorkFour from './workFour';
import WorkFive from './workFive';
import WorkSix from './workSix';
import WorkSeven from './workSeven';

const Work_body = () =>{
	const [isOpen1,setIsOpen1] = useState(false)

	const [isOpen2,setIsOpen2] = useState(false)

	const [isOpen3,setIsOpen3] = useState(false)

	const [isOpen4,setIsOpen4] = useState(false)

	const [isOpen5,setIsOpen5] = useState(false)

	const [isOpen6,setIsOpen6] = useState(false)

	const [isOpen7,setIsOpen7] = useState(false)

	return(
		<React.Fragment>
			<div class="aboutMe_body">
				<h1>Work Experience</h1>
				<div class="work_experience">
					<button onClick={() => setIsOpen1(true)} class="block">
							<img src="/images/masterclass.svg" alt="masterclass"/>
							<div class="block_content">
								<h3>MasterClass</h3>
								<h4>Software Engineer, Back End Intern</h4>
							</div>
					</button>
					<WorkOne open ={isOpen1} onClose = {() => setIsOpen1(false)}></WorkOne>
					
					<button onClick={() => setIsOpen2(true)} class="block">
						<img src="/images/include.png" class="include" alt="include"/>
						<div class="block_content">
							<h3>#include at UC Davis</h3>
							<h4>Director of Technology - Front End</h4>
						</div>
					</button>
					<WorkTwo open ={isOpen2} onClose = {() => setIsOpen2(false)}></WorkTwo>

					<button onClick={() => setIsOpen3(true)} class="block">
						<img src="/images/womenindata.png" class="wid" alt="wid"/>
						<div class="block_content">
							<h3>Women in Data at UC Davis</h3>
							<h4>Technical Workshops Lead</h4>
						</div>
					</button>
					<WorkThree open ={isOpen3} onClose = {() => setIsOpen3(false)}></WorkThree>

					<button onClick={() => setIsOpen4(true)} class="block sachacks">
						<img src="/images/sachacks.png" alt="sachacks"/>
						<div class="block_content sachacks-content">
							<h3>SacHacks</h3>
							<h4>Lead Web Developer</h4>
						</div>
					</button>
					<WorkFour open ={isOpen4} onClose = {() => setIsOpen4(false)}></WorkFour>

					<button onClick={() => setIsOpen5(true)} class="block sachacks">
						<img src="/images/its.png" alt="its"/>
						<div class="block_content">
							<h3>Institute of Transportation Studies</h3>
							<h4>IT Service Desk Analyst</h4>
						</div>
					</button>
					<WorkFive open ={isOpen5} onClose = {() => setIsOpen5(false)}></WorkFive>

					<button onClick={() => setIsOpen6(true)} class="block">
						<img src="/images/airtel.png" alt="airtel"/>
						<div class="block_content">
							<h3>Bharti Airtel</h3>
							<h4>Software Engineering Intern</h4>
						</div>
					</button>
					<WorkSix open ={isOpen6} onClose = {() => setIsOpen6(false)}></WorkSix>

					<button onClick={() => setIsOpen7(true)} class="block">
						<img src="/images/renewbuy.png" alt="renewbuy"/>
						<div class="block_content sachacks-content">
							<h3>RenewBuy</h3>
							<h4>Data Analyst Intern</h4>
						</div>
					</button>
					<WorkSeven open ={isOpen7} onClose = {() => setIsOpen7(false)}></WorkSeven>

				</div>
			</div>
		</React.Fragment>
	);
}

export default Work_body;