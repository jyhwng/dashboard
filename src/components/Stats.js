import React, {Component} from 'react'
import {Statistic} from 'semantic-ui-react'

const items = [
    {key: 'faves', label: 'Faves', value: '22'},
    {key: 'views', label: 'Views', value: '31,200'},
    {key: 'members', label: 'Members', value: '22'},
]

class Stats extends Component {
    render() {
        return (
            <Statistic.Group items={items} size={'mini'}/>
        )
    }
}

export default Stats;
