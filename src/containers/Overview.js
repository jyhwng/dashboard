import React, {Component} from 'react'
import {Segment, Grid} from 'semantic-ui-react'
import Status from '../components/Status'
import Stats from '../components/Stats'
import Activity from '../components/Activity'
import NameCard from '../components/NameCard'
import Chart from '../components/Chart'
import './styles/Overview.css'

class Overview extends Component {
    render() {
        return (
            <div>
                <Grid columns='equal'>
                    <Grid.Row>
                        <Grid.Column width={5}>
                            <NameCard/>
                            <Stats/>
                            <Activity/>
                        </Grid.Column>
                        <Grid.Column width={11}>
                            <Segment className="chart-container">
                                <Chart/>
                            </Segment>
                        </Grid.Column>
                    </Grid.Row>
                </Grid>
                <Status/>
            </div>
        )
    }
}

export default Overview;
