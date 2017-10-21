import React, {Component} from 'react'
import {Grid} from 'semantic-ui-react'
import Status from '../components/Status'
import Stats from '../components/Stats'
import Activity from '../components/Activity'
import Chart from '../components/Chart'

class Overview extends Component {
    render() {
        return (
            <div>
                <Grid columns='equal'>
                    <Grid.Row>
                        <Grid.Column>
                            <Stats/>
                            <Activity />
                        </Grid.Column>
                        <Grid.Column width={10}>
                            <Chart/>
                        </Grid.Column>
                    </Grid.Row>
                </Grid>
                <Status/>
            </div>
        )
    }
}

export default Overview;
