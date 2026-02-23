import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const PRELOADER_MIN_DURATION_MS = 5000;
const getNow = () => (
  window.performance && typeof window.performance.now === 'function'
    ? window.performance.now()
    : Date.now()
);
const preloaderStartTime = getNow();

const removePreloader = () => {
  const preloader = document.getElementById('preloader');
  if (!preloader) {
    return;
  }

  const now = getNow();
  const elapsed = now - preloaderStartTime;
  const waitTime = Math.max(0, PRELOADER_MIN_DURATION_MS - elapsed);

  window.setTimeout(() => {
    preloader.classList.add('fade-out');
    window.setTimeout(() => {
      preloader.remove();
    }, 380);
  }, waitTime);
};

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root'),
  () => {
    window.requestAnimationFrame(removePreloader);
  }
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
