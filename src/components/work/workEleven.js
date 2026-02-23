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

export default function WorkEleven({ open, onClose }) {
    if (!open) return null;
    return (
        <div style={OVERLAY_STYLES}>
            <div className="workPopUp">
                <button onClick={onClose}>&#x2715;</button>
                <div className="workPopUp-content">
                    <div className="workPopUp-first-row">
                        <img src="/images/microsoft.png" className="microsoft-pop-up" alt="microsoft"/>
                        <div className="work-intro">
                            <h3>Microsoft</h3>
                            <h4>Software Engineer, Microsoft Research - Semantic Machines</h4>
                            <h5>August 2022 - December 2023</h5>
                            <h5>Mountain View, CA</h5>
                        </div>
                    </div>
                    <div className="workPopUp-second-row">
                        <ul>
                            <li>Built multi-turn conversation support in Copilot by streamlining how user context is handled, reducing API latency by 42%, and boosting reliability at scale.</li>
                            <li>Designed a distributed job scheduler to handle real-time model calls, scaling from 1K to 15K concurrent user sessions with 99.98% uptime.</li>
                            <li>Set up full-stack observability for Copilot conversation flows using Azure Monitor, Application Insights, and Kusto (KQL), cutting debug time by 60% and catching memory leaks in long-running user sessions.</li>
                        </ul>
                    </div>
                    <a href="https://www.microsoft.com/en-us/research/project/semantic-machines/">https://www.microsoft.com/en-us/research/project/semantic-machines/</a>
                </div>
            </div>
        </div>
    );
}
