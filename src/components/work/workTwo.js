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
                            <h5>March 2021 - June 2022</h5>
                            <h5>Davis, CA</h5>
                        </div>
                    </div>
                    <div class="workPopUp-second-row">
                        <ul>
                            <li>Led 60+ members to collaborate on projects that provide non-profit organizations with an online presence.</li>
                            <li>Implemented Agile methodology to reduce the delivery timeline, and increased the velocity of deployments by 100%</li>
                        </ul>
                    </div>
                    <a href="http://www.includedavis.com/">http://www.includedavis.com/</a>
                </div>
			</div>
        </div>
    )
}