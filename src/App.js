import React, {Component} from 'react';
import './App.css';
import MainContainer from './containers/MainContainer'
import TopMenu from './components/TopMenu/TopMenu';
import 'react-dates/initialize';

class App extends Component {
    render() {
        return (
            <div className="App">
                <TopMenu/>
                <MainContainer/>
            </div>
        );
    }
}

export default App;
