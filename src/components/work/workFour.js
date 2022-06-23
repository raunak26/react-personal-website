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

export default function WorkFour({open, children, onClose}){
    if (!open) return null
    return (
        <div style = {OVERLAY_STYLES}>
	        <div className="workPopUp">
				<button onClick={onClose}>&#x2715;</button>
                <div className="workPopUp-content">
                    <div class="workPopUp-first-row">
                        <img src="/images/sachacks.png" class="sachacks-pop-up" alt="SacHacks"/>
                        <div class="work-intro">
                            <h3>SacHacks</h3>
                            <h4>Lead Web Developer</h4>
                            <h5>November 2020 - December 2021</h5>
                            <h5>Davis, CA</h5>
                        </div>
                    </div>
                    <div class="workPopUp-second-row">
                        <ul>
                            <li>Increased hackathon participation by 45% through UI/UX improvement and Google Analytics implementation.</li>
                            <li>Developed website for Lovelace hackathon, organized to represent women and minor communities.</li>
                            <li>Migrated organization legacy code to newer frameworks to inculcate team advancement.</li>
                        </ul>
                    </div>
                    <a href="https://sachacks.io/">https://sachacks.io/</a>
                </div>
			</div>
        </div>
    )
}