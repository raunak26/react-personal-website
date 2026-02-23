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

export default function WorkSeven({open, children, onClose}){
    if (!open) return null
    return (
        <div style = {OVERLAY_STYLES}>
	        <div className="workPopUp">
				<button onClick={onClose}>&#x2715;</button>
                <div className="workPopUp-content">
                    <div className="workPopUp-first-row">
                        <img src="/images/renewbuy.png" className="renewbuy-pop-up" alt="renewbuy"/>
                        <div className="work-intro">
                            <h3>RenewBuy</h3>
                            <h4>Data Analyst Intern</h4>
                            <h5>May 2016 - July 2016</h5>
                            <h5>Gurgaon, Haryana</h5>
                        </div>
                    </div>
                    <div className="workPopUp-second-row">
                        <ul>
                            <li>Created mobile app, using Java, focussed on creating a platform for announcements for high schools to increase the accessibility of information.</li>
                            <li>Improved website UI and UX based on customer buying behavior, TOS (time-on-site) to improve marketing and increase outreach</li>
                            <li>Customer journey using ‘Design Thinking’ and understood the correlation between business and technology - was introduced to the business tech side of the platform economy companies</li>
                        </ul>
                    </div>
                    <a href="https://www.renewbuy.com/">https://www.renewbuy.com/</a>
                </div>
			</div>
        </div>
    )
}