import React, {Component} from 'react'
import {Segment, Grid} from 'semantic-ui-react'
import Updates from '../components/Updates'
import Board from '../components/Board'
import NameCard from '../components/NameCard'
import Chart from '../components/Chart'
import './styles/Overview.css'

class Overview extends Component {
    render() {
        return (
            <div>
                <Grid columns='equal'>
                    <Updates/>
                    <Grid.Row>
                        <Grid.Column width={5}>
                            <NameCard/>
                        </Grid.Column>
                        <Grid.Column width={11}>
                            <Segment className="chart-container">
                                <h3>Statistics title</h3>
                                <Chart/>
                            </Segment>
                        </Grid.Column>
                    </Grid.Row>
                </Grid>
                <Board/>
            </div>
        )
    }
}

export default Overview;
