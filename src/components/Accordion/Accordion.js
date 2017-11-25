import React, { Component } from 'react';
import MainContainer from '../../containers/MainContainer';
import { Segment, Grid, Icon, Divider } from 'semantic-ui-react';
import './Accordion.css';

class MultipleAccordion extends Component {
    constructor(props) {
        super(props)
        this.state = {
            active: true,
        }
    }
  render() {
      let options = [
        {title: 'option1', content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry."},
        {title: 'option2', content: "Lorem Ipsum has been the industry's standard dummy text."},
        {title: 'option3', content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text."}
      ]
      
    return (
        <div className="multiple-accordion">
            {options.map(option => {
                return (
                    <div className="panel"
                        onClick={() => this.setState({ active:!this.state.active })}
                    >
                        <span>{option.title}</span>
                        <Icon name={this.state.active ? "angle up" : "angle down" }/>
                        {this.state.active ? 
                            <div className="accordion-content">{option.content}</div> : <div></div>}
                    </div>
                )
            })}
        </div>
    )
  }
}

class Accordion extends Component {
    constructor(props) {
        super(props)
        this.state = {
            active: false,
        }
    }
  render() {
      let content;
      if (this.state.active) {
        content = (
            <div className="accordion-content">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text.</div>
        )
      } else {
        content = (
            <div></div>
        )
      }
    return (
      <MainContainer>
        <Grid>
          <Grid.Row>
            <Grid.Column width={8}>
              <Segment>
                  <p>Single Accordion</p>
                  <div className="panel"
                    onClick={() => this.setState({ active:!this.state.active })}
                    >
                    <span>option1</span>
                    <Icon name={this.state.active ? "angle up" : "angle down" }/>
                    {content}
                  </div>
                  <Divider hidden />
                  <p>Multiple Accordion</p>
                  <MultipleAccordion/>
              </Segment>
            </Grid.Column>
            <Grid.Column width={8}>
              <Segment>
              </Segment>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </MainContainer>
    )
  }
}

export default Accordion;
