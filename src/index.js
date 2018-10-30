import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
import Parameter from './parameter';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

const AppWrapper = () => {
  return (
    <React.StrictMode>
      {/* <Parameter /> */}
      <App />
    </React.StrictMode >
  )
}


ReactDOM.render(<AppWrapper />, document.getElementById('root'));
registerServiceWorker();
