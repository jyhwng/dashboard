import React, {Component} from 'react'
import {Segment, Grid} from 'semantic-ui-react'
import './styles/Footer.css'

class Footer extends Component {
    render() {
        return (
            <Segment className="fixed-footer-container">
                <Grid className="fixed-footer">
                    <Grid.Column width={8}>
                        test1
                    </Grid.Column>
                    <Grid.Column width={8}>
                        test2
                    </Grid.Column>
                </Grid>
            </Segment>
        )
    }
}

export default Footer;
