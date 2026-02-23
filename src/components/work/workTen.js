import React from 'react';
import './work_body.css';

const OVERLAY_STYLES = {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0, 0, 0, .7)',
    zIndex: 1000
};

export default function WorkTen({ open, onClose }) {
    if (!open) return null;
    return (
        <div style={OVERLAY_STYLES}>
            <div className="workPopUp">
                <button onClick={onClose}>&#x2715;</button>
                <div className="workPopUp-content">
                    <div className="workPopUp-first-row">
                        <img src="/images/openai.svg" className="openai-pop-up" alt="openai"/>
                        <div className="work-intro">
                            <h3>OpenAI</h3>
                            <h4>Member of Technical Staff, Applied Evals</h4>
                            <h5>November 2025 - Present</h5>
                            <h5>San Francisco, CA</h5>
                        </div>
                    </div>
                    <div className="workPopUp-second-row">
                        <ul>
                            <li>Member of Technical Staff, Applied Evals.</li>
                        </ul>
                    </div>
                    <a href="https://openai.com/">https://openai.com/</a>
                </div>
            </div>
        </div>
    );
}
