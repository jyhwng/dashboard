import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
// import AuthenticatedRoute from "./components/AuthenticatedRoute";
// import UnauthenticatedRoute from "./components/UnauthenticatedRoute";
import './index.css';
import App from './App';
import asyncComponent from './components/AsyncComponent';
import registerServiceWorker from './registerServiceWorker';
import 'semantic-ui-css/semantic.min.css';

const AsyncDashboard = asyncComponent(() => import('./containers/Dashboard'));
const AsyncForm = asyncComponent(() => import('./components/Form/Form'));
const AsyncDropdown = asyncComponent(() =>
  import('./components/Form/Dropdown')
);

ReactDOM.render(
  <Router history={browserHistory}>
    <Route path="/" component={App}>
      <IndexRoute exact component={AsyncDashboard} />
      <Route path="dashboard" exact component={AsyncDashboard} />
      <Route path="form" exact component={AsyncForm} />
      <Route path="dropdown" exact component={AsyncDropdown} />
    </Route>
  </Router>,
  document.getElementById('root')
);

registerServiceWorker();
