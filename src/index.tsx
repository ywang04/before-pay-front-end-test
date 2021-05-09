import ReactDOM from 'react-dom';
import App from './App';
import EmploymentProvider from './providers/EmploymentProvider';
import reportWebVitals from './reportWebVitals';

import './index.scss';

ReactDOM.render(
  <EmploymentProvider>
    <App />
  </EmploymentProvider>,

  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
