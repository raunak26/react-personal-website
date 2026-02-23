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
                    <div className="workPopUp-first-row">
                        <img src="/images/microsoft.png" className="microsoft-pop-up" alt="microsoft"/>
                        <div className="work-intro">
                            <h3>Microsoft</h3>
                            <h4>Software Engineer, M365 Copilot AI Evaluation</h4>
                            <h5>December 2023 - Present</h5>
                            <h5>Mountain View, CA</h5>
                        </div>
                    </div>
                    <div className="workPopUp-second-row">
                        <ul>
                            <li>Increased ad revenue by ~12% by optimizing LLM-generated user summaries to enable shorter Copilot replies and more personalized ad delivery.</li>
                            <li>Built an automated system to detect LLM regressions across Microsoft 365 Copilot, reducing triage time by 60% and improving rollout safety through real-time alerts and behavior comparisons.</li>
                            <li>Optimized workflows that evaluate LLMs, cutting job runtime by 31% and increasing throughput by 50%, enabling faster performance testing and validation at scale.</li>
                        </ul>
                    </div>
                    <a href="https://www.microsoft.com/">https://www.microsoft.com/</a>
                </div>
			</div>
        </div>
    )
}
