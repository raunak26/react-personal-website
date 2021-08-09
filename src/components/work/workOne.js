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

export default function WorkOne({open, children, onClose}){
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
                            <h4>Software Engineer, Back End Intern</h4>
                            <h5>June 2021 - Present</h5>
                            <h5>San Francisco Bay Area</h5>
                        </div>
                    </div>
                    <div class="workPopUp-second-row">
                        <ul>
                            <li>Implemented a bulk admin user service on the back end panel to speed up the hiring process exponentially.</li>
                        </ul>
                    </div>
                    <a href="https://www.masterclass.com/">https://www.masterclass.com/</a>
                </div>
			</div>
        </div>
    )
}
