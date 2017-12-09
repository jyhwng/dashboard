import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import './index.css';
import App from './App';
import asyncComponent from './AsyncComponent';
import registerServiceWorker from './registerServiceWorker';
import 'semantic-ui-css/semantic.min.css';

const AsyncDashboard = asyncComponent(() => import('./pages/DashboardPage/Dashboard'));
const AsyncDropdowns = asyncComponent(() => import('./pages/DropdownPage/Dropdowns'));
const AsyncRangePicker = asyncComponent(() => import('./pages/FormPage/RangePicker'));
const AsyncInput = asyncComponent(() => import('./pages/FormPage/Input'));
const AsyncCalendar = asyncComponent(() => import('./pages/CalendarPage/Calendar'));
const AsyncChart = asyncComponent(() => import('./pages/ChartPage/Chart'));
const AsyncLayout = asyncComponent(() => import('./pages/LayoutPage/Layout'));

ReactDOM.render(
  <Router history={browserHistory}>
    <Route path="/" component={App}>
      <IndexRoute exact component={AsyncDashboard} />
      <Route path="dashboard" exact component={AsyncDashboard} />
      <Route path="input" exact component={AsyncInput} />
      <Route path="calendar" exact component={AsyncCalendar} />
      <Route path="dropdown" exact component={AsyncDropdowns} />
      <Route path="range-picker" exact component={AsyncRangePicker} />
      <Route path="chart" exact component={AsyncChart} />
      <Route path="layout" exact component={AsyncLayout} />
    </Route>
  </Router>,
  document.getElementById('root')
);

registerServiceWorker();
