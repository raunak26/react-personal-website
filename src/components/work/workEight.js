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
                    <div className="workPopUp-first-row">
                        <img src="/images/masterclass.svg" className="masterclass-pop-up" alt="masterclass"/>
                        <div className="work-intro">
                            <h3>MasterClass</h3>
                            <h4>Software Engineer, Growth</h4>
                            <h5>September 2021 - December 2021</h5>
                            <h5>San Francisco, CA</h5>
                        </div>
                    </div>
                    <div className="workPopUp-second-row">
                        <ul>
                            <li>Integrated UTM (Urchin Tracking Module) tracking to measure ROI and analyze user conversion and traffic sources.</li>
                            <li>Automated the end-to-end class launch process, reducing launch time by 50% and enabling non-technical teams to manage releases independently.</li>
                            <li>Shipped a seasonal classes feature to align with strategic campaigns, which increased average subscriber retention by 11%.</li>
                        </ul>
                    </div>
                    <a href="https://www.masterclass.com/">https://www.masterclass.com/</a>
                </div>
			</div>
        </div>
    )
}
