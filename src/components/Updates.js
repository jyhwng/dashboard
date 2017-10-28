import React, {Component} from 'react'
import {Segment, Grid, Icon} from 'semantic-ui-react'
import './Updates.css'

class Updates extends Component {
    render() {
        return (
            <Grid.Row className="updates">
                <Grid.Column width={4}>
                    <Segment>
                        <p>Bookstore</p>
                        <Icon name="trophy" size='big'/>
                        <span className="updates-score">38,000</span>
                    </Segment>
                </Grid.Column>
                <Grid.Column width={4}>
                    <Segment>
                        <p>Bookstore</p>
                        <Icon name="trophy" size='big'/>
                        <span className="updates-score">38,000</span>
                    </Segment>
                </Grid.Column>
                <Grid.Column width={4}>
                    <Segment>
                        <p>Bookstore</p>
                        <Icon name="trophy" size='big'/>
                        <span className="updates-score">38,000</span>
                    </Segment>
                </Grid.Column>
                <Grid.Column width={4}>
                    <Segment>
                        <p>Bookstore</p>
                        <Icon name="trophy" size='big'/>
                        <span className="updates-score">38,000</span>
                    </Segment>
                </Grid.Column>
            </Grid.Row>
        )
    }
}

export default Updates;
