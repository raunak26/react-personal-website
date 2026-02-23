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

export default function WorkThree({open, children, onClose}){
    if (!open) return null
    return (
        <div style = {OVERLAY_STYLES}>
	        <div className="workPopUp">
				<button onClick={onClose}>&#x2715;</button>
                <div className="workPopUp-content">
                    <div className="workPopUp-first-row">
                        <img src="/images/womenindata.png" className="womenindata-pop-up" alt="womenindata"/>
                        <div className="work-intro">
                            <h3>Women in Data at UC Davis</h3>
                            <h4>Technical Workshops Lead</h4>
                            <h5>January 2021 - June 2022</h5>
                            <h5>Davis, CA</h5>
                        </div>
                    </div>
                    <div className="workPopUp-second-row">
                        <ul>
                            <li>Conducted a series of Python and Jupyter tutorial workshops and increased total club membership by 85%.</li>
                            <li>Developed a machine-learning algorithm to detect Alzheimer’s disease based on a Kaggle dataset.</li>
                        </ul>
                    </div>
                    <a href="https://www.womenindata.org/">https://www.womenindata.org/</a>
                </div>
			</div>
        </div>
    )
}