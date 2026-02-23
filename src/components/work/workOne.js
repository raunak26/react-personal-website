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
                    <div className="workPopUp-first-row">
                        <img src="/images/masterclass.svg" className="masterclass-pop-up" alt="masterclass"/>
                        <div className="work-intro">
                            <h3>MasterClass</h3>
                            <h4>Software Engineer, Core Infra</h4>
                            <h5>June 2021 - September 2021</h5>
                            <h5>San Francisco, CA</h5>
                        </div>
                    </div>
                    <div className="workPopUp-second-row">
                        <ul>
                            <li>Built multi-instructor course support to expand class offerings and reach a broader audience.</li>
                            <li>Migrated AWS databases and optimized add/delete logic, improving Class Launch Automator usability by 35% and reducing full course build time by 22%.</li>
                            <li>Developed a bulk admin service for contractors onboarding/offboarding, cutting manual effort by 60%.</li>
                        </ul>
                    </div>
                    <a href="https://www.masterclass.com/">https://www.masterclass.com/</a>
                </div>
			</div>
        </div>
    )
}
