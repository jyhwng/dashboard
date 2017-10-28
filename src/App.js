import React, {Component} from 'react';
import './App.css';
import SideMenu from './components/SideMenu'
import Header from './components/Header';

class App extends Component {
    render() {
        return (
            <div className="App">
                <Header/>
                <SideMenu/>
            </div>
        );
    }
}

export default App;
