import './work_body.css';

import React, { useState } from 'react';

import WorkOne from './workOne';
import WorkTwo from './workTwo';
import WorkThree from './workThree';
import WorkFour from './workFour';
import WorkFive from './workFive';
import WorkSix from './workSix';
import WorkSeven from './workSeven';
import WorkEight from './workEight';
import WorkNine from './workNine';
import WorkTen from './workTen';
import WorkEleven from './workEleven';

const Work_body = () => {
	const [isOpen1, setIsOpen1] = useState(false);
	const [isOpen2, setIsOpen2] = useState(false);
	const [isOpen3, setIsOpen3] = useState(false);
	const [isOpen4, setIsOpen4] = useState(false);
	const [isOpen5, setIsOpen5] = useState(false);
	const [isOpen6, setIsOpen6] = useState(false);
	const [isOpen7, setIsOpen7] = useState(false);
	const [isOpen8, setIsOpen8] = useState(false);
	const [isOpen9, setIsOpen9] = useState(false);
	const [isOpen10, setIsOpen10] = useState(false);
	const [isOpen11, setIsOpen11] = useState(false);

	return (
		<React.Fragment>
			<div className="aboutMe_body">
				<p className="work-eyebrow">Experience</p>
				<h1>Work and Volunteering</h1>
				<p className="work-intro-text">
					A snapshot of roles across product engineering, AI, and community-driven technology.
					Click any card for details.
				</p>
				<div className="work_experience">
					<button onClick={() => setIsOpen10(true)} className="block">
						<img src="/images/openai.svg" alt="openai" className="block-openai"/>
						<div className="block_content">
							<h3>OpenAI</h3>
							<h4>Member of Technical Staff, Applied Evals</h4>
						</div>
					</button>
					<WorkTen open={isOpen10} onClose={() => setIsOpen10(false)}></WorkTen>
					<button onClick={() => setIsOpen9(true)} className="block">
						<img src="/images/microsoft.png" alt="microsoft" className="block-microsoft"/>
						<div className="block_content">
							<h3>Microsoft</h3>
							<h4>Software Engineer, M365 Copilot AI Evaluation</h4>
						</div>
					</button>
					<WorkNine open={isOpen9} onClose={() => setIsOpen9(false)}></WorkNine>
					<button onClick={() => setIsOpen11(true)} className="block">
						<img src="/images/microsoft.png" alt="microsoft" className="block-microsoft"/>
						<div className="block_content">
							<h3>Microsoft</h3>
							<h4>Software Engineer, Microsoft Research - Semantic Machines</h4>
						</div>
					</button>
					<WorkEleven open={isOpen11} onClose={() => setIsOpen11(false)}></WorkEleven>
					<button onClick={() => setIsOpen8(true)} className="block">
						<img src="/images/masterclass.svg" alt="masterclass"/>
						<div className="block_content">
							<h3>MasterClass</h3>
							<h4>Software Engineer, Growth</h4>
						</div>
					</button>
					<WorkEight open={isOpen8} onClose={() => setIsOpen8(false)}></WorkEight>
					<button onClick={() => setIsOpen1(true)} className="block">
						<img src="/images/masterclass.svg" alt="masterclass"/>
						<div className="block_content">
							<h3>MasterClass</h3>
							<h4>Software Engineer, Core Infra</h4>
						</div>
					</button>
					<WorkOne open={isOpen1} onClose={() => setIsOpen1(false)}></WorkOne>

					<button onClick={() => setIsOpen2(true)} className="block">
						<img src="/images/include.png" className="include" alt="include"/>
						<div className="block_content">
							<h3>#include at UC Davis</h3>
							<h4>Director of Technology - Front End</h4>
						</div>
					</button>
					<WorkTwo open={isOpen2} onClose={() => setIsOpen2(false)}></WorkTwo>

					<button onClick={() => setIsOpen3(true)} className="block">
						<img src="/images/womenindata.png" className="wid" alt="wid"/>
						<div className="block_content">
							<h3>Women in Data at UC Davis</h3>
							<h4>Technical Workshops Lead</h4>
						</div>
					</button>
					<WorkThree open={isOpen3} onClose={() => setIsOpen3(false)}></WorkThree>

					<button onClick={() => setIsOpen4(true)} className="block sachacks">
						<img src="/images/sachacks.png" alt="sachacks"/>
						<div className="block_content sachacks-content">
							<h3>SacHacks</h3>
							<h4>Lead Web Developer</h4>
						</div>
					</button>
					<WorkFour open={isOpen4} onClose={() => setIsOpen4(false)}></WorkFour>

					<button onClick={() => setIsOpen5(true)} className="block sachacks">
						<img src="/images/its.png" alt="its"/>
						<div className="block_content">
							<h3>Institute of Transportation Studies</h3>
							<h4>IT Service Desk Analyst</h4>
						</div>
					</button>
					<WorkFive open={isOpen5} onClose={() => setIsOpen5(false)}></WorkFive>

					<button onClick={() => setIsOpen6(true)} className="block">
						<img src="/images/airtel.png" alt="airtel"/>
						<div className="block_content">
							<h3>Bharti Airtel</h3>
							<h4>Software Engineering Intern</h4>
						</div>
					</button>
					<WorkSix open={isOpen6} onClose={() => setIsOpen6(false)}></WorkSix>

					<button onClick={() => setIsOpen7(true)} className="block">
						<img src="/images/renewbuy.png" alt="renewbuy"/>
						<div className="block_content sachacks-content">
							<h3>RenewBuy</h3>
							<h4>Data Analyst Intern</h4>
						</div>
					</button>
					<WorkSeven open={isOpen7} onClose={() => setIsOpen7(false)}></WorkSeven>
				</div>
			</div>
		</React.Fragment>
	);
};

export default Work_body;
