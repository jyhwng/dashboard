import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
// import AuthenticatedRoute from "./components/AuthenticatedRoute";
// import UnauthenticatedRoute from "./components/UnauthenticatedRoute";
import './index.css';
import App from './App';
import asyncComponent from './AsyncComponent';
import registerServiceWorker from './registerServiceWorker';
import 'semantic-ui-css/semantic.min.css';

const AsyncDashboard = asyncComponent(() => import('./containers/Dashboard'));
const AsyncForm = asyncComponent(() => import('./components/Form/Form'));
const AsyncDropdowns = asyncComponent(() =>
  import('./components/Form/Dropdowns')
);

ReactDOM.render(
  <Router history={browserHistory}>
    <Route path="/" component={App}>
      <IndexRoute exact component={AsyncDashboard} />
      <Route path="dashboard" exact component={AsyncDashboard} />
      <Route path="form" exact component={AsyncForm} />
      <Route path="dropdowns" exact component={AsyncDropdowns} />
    </Route>
  </Router>,
  document.getElementById('root')
);

registerServiceWorker();
