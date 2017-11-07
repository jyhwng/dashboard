import React, {Component} from 'react';
import './App.css';
import Content from './containers/Content'
import TopMenu from './components/TopMenu/TopMenu';
import 'react-dates/initialize';

class App extends Component {
    render() {
        return (
            <div className="App">
                <TopMenu/>
                <Content/>
            </div>
        );
    }
}

export default App;
