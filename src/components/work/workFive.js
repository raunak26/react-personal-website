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

export default function WorkFive({open, children, onClose}){
    if (!open) return null
    return (
        <div style = {OVERLAY_STYLES}>
	        <div className="workPopUp">
				<button onClick={onClose}>&#x2715;</button>
                <div className="workPopUp-content">
                    <div class="workPopUp-first-row">
                        <img src="/images/its.png" class="its-pop-up" alt="ITS"/>
                        <div class="work-intro">
                            <h3>Institute of Transportation Studies at UC Davis</h3>
                            <h4>IT Service Desk Analyst</h4>
                            <h5>January 2020 - June 2021</h5>
                            <h5>Davis, CA</h5>
                        </div>
                    </div>
                    <div class="workPopUp-second-row">
                        <ul>
                            <li>Provided technical support to critical IT operations at the UC Davis College of Engineering.</li>
                            <li>Worked through the COVID-19 situations and provided 100% service even while working remotely and following business continuity processes.</li>
                            <li>Documented processes so that newer members could speed up their learning curve. Newer members found this to reduce their learning time by over 40%.</li>
                        </ul>
                    </div>
                    <a href="https://its.ucdavis.edu/">https://its.ucdavis.edu/</a>
                </div>
			</div>
        </div>
    )
}