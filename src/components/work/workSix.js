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

export default function WorkSix({open, children, onClose}){
    if (!open) return null
    return (
        <div style = {OVERLAY_STYLES}>
	        <div className="workPopUp">
				<button onClick={onClose}>&#x2715;</button>
                <div className="workPopUp-content">
                    <div class="workPopUp-first-row">
                        <img src="/images/airtel.png" class="airtel-pop-up" alt="airtel"/>
                        <div class="work-intro">
                            <h3>Bharti Airtel - Wynk Limited</h3>
                            <h4>Software Engineering Intern</h4>
                            <h5>July 2019 - August 2019</h5>
                            <h5>Delhi, India</h5>
                        </div>
                    </div>
                    <div class="workPopUp-second-row">
                        <ul>
                            <li>Developed hardware that allowed multiple website streaming, increasing the time-shift television market by 89%.</li>
                            <li>Implemented near real-time responsive voice recognition and universal music search on Airtel TV hardware.</li>
                            <li>Built a chatbot to create a direct channel for customer service which improved the adoption rate by 17%.</li>
                        </ul>
                    </div>
                    <a href="https://www.airtel.in/">https://www.airtel.in/</a>
                </div>
			</div>
        </div>
    )
}