import React, { Component } from 'react';
import MainContainer from '../../containers/MainContainer';
import { Segment, Grid, Divider } from 'semantic-ui-react';
import './RangePicker.css';
import Rheostat from 'rheostat';
import styled from 'styled-components'
// https://github.com/airbnb/rheostat

class RangePicker extends Component {
  constructor(props) {
    super(props)
    this.state = {
      value: 0
    }
  }
  render() {
    let dataPercent = 56;
    const rangePickerStyle = {
      width: '80%'
    };
    const barStyle = {
      width: dataPercent.toString() + '%'
    };
    const handleStyle = {
      left: dataPercent.toString() + '%'
    };
    const tooltipStyle = {
      position: 'absolute',
      left: this.state.value.toString() + '%'
    };
    let updateValue = (value) => {
      this.setState({value:value.values})
    }
    // let rheostatHandleStyle = {
    //   '--content': dataPercent.toString(),
    // }
    let rheostatHandleStyle = {
      position: 'absolute',
      left: this.state.value + '%',
    }
    let rheostatBarStyle = {
      position: 'absolute',
      width: this.state.value + '%',
    }

    const RheostatTooltip = styled.div`
      left: ${this.state.value}%;
      position: absolute;
      background-color: #01a8fe;
      width: 24px;
      margin-left: -12px;
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

    let customHandle = () => {
      return (
        <div>
          <RheostatTooltip>{this.state.value}</RheostatTooltip>
          <div className="rheostat-handle" 
            style={rheostatHandleStyle} 
            aria-valuemax="100" aria-valuemin="0" aria-valuenow={this.state.value} 
            aria-disabled="false" data-handle-key="0" class="rheostat-handle" 
            role="slider" tabindex="0" type="button">
          </div>
        </div>
      )
    }
    let customProgressBar = () => {
      return <div className="rheostat-progress" style={rheostatBarStyle}></div>
    }
    // const scale = [0, ... , 100]
    // https://developer.mozilla.org/en-US/docs/Web/Events/dragstart
    return (
      <MainContainer>
        <Grid columns="equal">
          <Grid.Row>
            <Grid.Column>
              <Segment>
                <p>Default Range picker</p>
                <div className="range-picker" style={rangePickerStyle}>
                  <div
                    className="bar"
                    data-percent={dataPercent}
                    style={barStyle}
                  />
                  <div className="handle" style={handleStyle} />
                  <div className="tooltip start">0</div>
                  <div className="tooltip" style={tooltipStyle}>
                    {dataPercent}
                  </div>
                  <div className="tooltip end">100</div>
                </div>
                <Divider hidden />
                <p>Range picker with scale</p>
                <div className="range-picker">
                  <div
                    className="bar"
                    data-percent={dataPercent}
                    style={barStyle}
                  />
                  <div className="handle" style={handleStyle} />
                  <div className="tooltip start">0</div>
                  <div className="tooltip" style={tooltipStyle}>
                    {dataPercent}
                  </div>
                  <div className="tooltip end">100</div>
                  <div className="scale" />
                </div>
              </Segment>
            </Grid.Column>
            <Grid.Column>
              <Segment>
              <Rheostat
                min={0}
                max={100}
                values={[this.state.value]}
                handle={customHandle}
                progressBar={customProgressBar}
                onValuesUpdated={updateValue}
              />
              <Divider hidden/>
              <Rheostat
                style={rheostatHandleStyle}
                min={0}
                max={100}
                values={[56]}
              />
              </Segment>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </MainContainer>
    );
  }
}

export default RangePicker;
