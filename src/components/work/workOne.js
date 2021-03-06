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
                            <h5>June 2021 - September 2021</h5>
                            <h5>San Francisco Bay Area</h5>
                        </div>
                    </div>
                    <div class="workPopUp-second-row">
                        <ul>
                            <li>Implemented multi-instructor feature to appeal to a wider audience, aligning to the growth strategy initiative.</li>
                            <li>Executed database migrations and addition/deletion logics, improving QOL of Class Launch Automator (CLA) by
35% and decreased time to build an entire course by 22%.</li>
                            <li>Developed bulk admin service that automates contractor onboarding/offboarding, reducing time by 200%.</li>
                        </ul>
                    </div>
                    <a href="https://www.masterclass.com/">https://www.masterclass.com/</a>
                </div>
			</div>
        </div>
    )
}
