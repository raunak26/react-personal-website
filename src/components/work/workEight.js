import React from 'react'
import './work_body.css';

const OVERLAY_STYLES = {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0, 0, 0, .7)',
    zIndex: 1000
}

export default function WorkEight({open, children, onClose}){
    if (!open) return null
    return (
        <div style = {OVERLAY_STYLES}>
	        <div className="workPopUp">
				<button onClick={onClose}>&#x2715;</button>
                <div className="workPopUp-content">
                    <div class="workPopUp-first-row">
                        <img src="/images/masterclass.svg" class="masterclass-pop-up" alt="masterclass"/>
                        <div class="work-intro">
                            <h3>MasterClass</h3>
                            <h4>Software Engineer, Growth Intern</h4>
                            <h5>September 2021 - December 2021</h5>
                            <h5>San Francisco Bay Area</h5>
                        </div>
                    </div>
                    <div class="workPopUp-second-row">
                        <ul>
                            <li>Integrated UTM parameters to measure ROI and, retrieve data on conversion and traffic sources.</li>
                            <li>Automated end-to-end class launch, reducing class launch time by 50% and giving non-technical staff full control.</li>
                            <li>Implemented seasonal class feature to align with growth strategy, increased average subscriber retention by 11%.</li>
                        </ul>
                    </div>
                    <a href="https://www.masterclass.com/">https://www.masterclass.com/</a>
                </div>
			</div>
        </div>
    )
}
