import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';


function Loader() {
  React.useEffect(() => {
    const timer = setTimeout(() => {
      const loader = document.getElementById('page-loader');
      if (loader) loader.style.display = 'none';
    }, 1800);
    return () => clearTimeout(timer);
  }, []);
  return (
    <div id="page-loader" className="page-loader">
      <div className="loader-spinner"></div>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <>
      <div className="animated-bg"></div>
      <Loader />
      <App />
    </>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
