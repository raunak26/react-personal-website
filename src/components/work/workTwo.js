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

export default function WorkTwo({open, children, onClose}){
    if (!open) return null
    return (
        <div style = {OVERLAY_STYLES}>
	        <div className="workPopUp">
				<button onClick={onClose}>&#x2715;</button>
                <div className="workPopUp-content">
                    <div class="workPopUp-first-row">
                        <img src="/images/include.png" class="include-pop-up" alt="include"/>
                        <div class="work-intro">
                            <h3>#include at UC Davis</h3>
                            <h4>Director of Technology - Front End</h4>
                            <h5>March 2021 - Present</h5>
                            <h5>Davis, CA</h5>
                        </div>
                    </div>
                    <div class="workPopUp-second-row">
                        <ul>
                            <li>Lead pro bono projects where 60+ members worked to build web 
                            applications for local non-profit organizations.</li>
                            <li>Increased velocity of deployments by 100% and reduced their error rate by 21%.</li>
                            <li>Implemented Agile methodology to reduce delivery timeline by 19%.</li>
                        </ul>
                    </div>
                    <a href="http://www.includedavis.com/">http://www.includedavis.com/</a>
                </div>
			</div>
        </div>
    )
}