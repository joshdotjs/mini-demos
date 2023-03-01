import './index.scss';
import App from './app';

// React 17:
import React from 'react';
import ReactDOM from "react-dom"
ReactDOM.render(<App />, document.querySelector("#react-faq"))

// React 18:
// import ReactDOM from 'react-dom/client';
// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );

if (module.hot) {
  module.hot.accept()
}