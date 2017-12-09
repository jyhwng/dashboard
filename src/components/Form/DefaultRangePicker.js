import React, { Component } from 'react';
import './RangePicker.css';
import Rheostat from 'rheostat';
import styled from 'styled-components'
// https://github.com/airbnb/rheostat

class DefaultRangePicker extends Component {
  constructor(props) {
    super(props)
    this.state = {
      value: 56
    }
  }
  render() {
    let updateValue = (value) => {
      this.setState({value:value.values})
    }
    let rheostatHandleStyle = {
      position: 'absolute',
      left: this.state.value + '%',
    }

    const RheostatTooltip = styled.div`
      left: ${this.state.value}%;
      position: absolute;
      background-color: #01a8fe;
      width: 24px;
      margin-left: -5.5px;
      height: 16.1px;
      border-radius: 3px;
      top: -29px;        
      font-size: 10px;
      font-weight: 600;
      text-align: center;
      color: #ffffff;
      display: flex;
      align-items: center;
      justify-content: center;
    `
    return (
      <div className="range-picker">
        <RheostatTooltip>
          {this.state.value}
        </RheostatTooltip>
        <div className="tooltip start">0</div>
        <div className="tooltip end">100</div>
        <Rheostat
          style={rheostatHandleStyle}
          min={0}
          max={100}
          values={[this.state.value]}
          onValuesUpdated={updateValue}
        />
      </div>
    )
  }
}

export default DefaultRangePicker;
