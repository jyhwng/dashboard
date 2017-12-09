import React, { Component } from 'react';
import './RangePicker.css';
import Rheostat from 'rheostat';
import styled from 'styled-components'
// https://github.com/airbnb/rheostat

class PitRangePicker extends Component {
  constructor(props) {
    super(props)
    this.state = {
      value: 32
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

    const pitPoints = [0, 5, 10, 15, 20, 25, 30, 35, 40, 45, 50, 55, 60, 65, 70, 75, 80, 85, 90, 95, 100]

    function pitComponent({ style, children }) {
      return (
        <div
          style={{
            ...style,
            background: '#e8e8ec',
            width: 1,
            height: children % 10 === 0 ? 8 : 4,
            fontSize: '10px',
            textAlign: 'center',
            color: '#9b9b9b',
          }}
        >
          <div style={{width: '20px', textAlign:'center',marginLeft: '-9px', marginTop: '6px'}}>{children % 10 === 0 ? children : ''}</div>
        </div>
      );
    }

    pitComponent.defaultProps = {
      style: null,
      children: null,
    };
  
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
          pitPoints={pitPoints}
          pitComponent={pitComponent}
        />
      </div>
    )
  }
}
export default PitRangePicker;
