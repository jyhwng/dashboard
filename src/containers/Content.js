import React, {Component} from 'react'

class Content extends Component {
    render() {
        return (
            <div>
                {this.props.item}
            </div>
        )
    }
}

export default Content;
