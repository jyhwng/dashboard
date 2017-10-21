import React, {Component} from 'react';
import './App.css';
import {Container} from 'semantic-ui-react'
import SideMenu from './containers/SideMenu'

class App extends Component {
    render() {
        let containerStyle = {
            marginTop: '40px'
        }
        return (
            <div className="App">
                <Container style={containerStyle}>
                    <SideMenu />
                </Container>
            </div>
        );
    }
}

export default App;
