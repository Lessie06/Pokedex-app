import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

//link to our components (imports)
import Home from './Home';

import { BrowserRouter, Route, Link, Switch } from 'react-router-dom';

import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <BrowserRouter>
    <div>

      {/* nav bar can go here */}

      {/* Links to different components go here*/}
      <Switch>
        <Route exact path="/" component={Home}></Route>
      </Switch>

    </div>
  </BrowserRouter>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
