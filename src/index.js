import React from 'react';
import ReactDOM from 'react-dom';
import { render } from 'react-dom';
//Components
//import App from './components/App';
import FirstLogin from './components/First';


const rootElement = document.querySelector('#root');
if (rootElement) {
  render(<FirstLogin />, rootElement);
}
//ReactDOM.render(<AppWithRouter/>, document.getElementById('root'));
ReactDOM.render(<FirstLogin/>, document.getElementById('FirstLogin'));
//ReactDOM.render(<ProductList/>, document.getElementById('productList'));
