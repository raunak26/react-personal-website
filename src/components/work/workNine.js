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

export default function WorkNine({open, children, onClose}){
    if (!open) return null
    return (
        <div style = {OVERLAY_STYLES}>
	        <div className="workPopUp">
				<button onClick={onClose}>&#x2715;</button>
                <div className="workPopUp-content">
                    <div class="workPopUp-first-row">
                        <img src="/images/microsoft.png" class="microsoft-pop-up" alt="microsoft"/>
                        <div class="work-intro">
                            <h3>Microsoft</h3>
                            <h4>Software Engineer, Semantic Machines</h4>
                            <h5>August 2022 - Present</h5>
                            <h5>San Francisco Bay Area</h5>
                        </div>
                    </div>
                    <div class="workPopUp-second-row">
                        <ul>
                            <li>Conversational AI</li>
                        </ul>
                    </div>
                    <a href="https://www.microsoft.com/en-us/research/project/semantic-machines/">https://www.microsoft.com/en-us/research/project/semantic-machines/</a>
                </div>
			</div>
        </div>
    )
}
