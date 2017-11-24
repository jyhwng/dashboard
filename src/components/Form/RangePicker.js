import React, { Component } from 'react';
import MainContainer from '../../containers/MainContainer';
import { Segment, Grid, Divider } from 'semantic-ui-react';
import './RangePicker.css';

class RangePicker extends Component {
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
      left: dataPercent.toString() + '%'
    };
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
              <Segment />
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </MainContainer>
    );
  }
}

export default RangePicker;
