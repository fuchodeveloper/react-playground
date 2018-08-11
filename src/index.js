import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
import Parameter from './parameter';
import FAQ from './faq';
import registerServiceWorker from './registerServiceWorker';

const AppWrapper = () => {
  return (
    <React.StrictMode>
      {/* <Parameter /> */}
      <FAQ />
    </React.StrictMode >
  )
}


ReactDOM.render(<AppWrapper />, document.getElementById('root'));
registerServiceWorker();
