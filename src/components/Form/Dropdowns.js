import React, { Component } from 'react';
import { Grid, Segment, Dropdown } from 'semantic-ui-react';
import MainContainer from '../../containers/MainContainer';

const MultipleSelectionOptions = [
  { key: 'design', text: 'Graphic Design', value: 'design' },
  { key: 'html', text: 'HTML', value: 'html' },
  { key: 'javascript', text: 'Javascript', value: 'javascript' }
];

const allowAdditionsOptions = [
  { key: 'English', text: 'English', value: 'English' },
  { key: 'French', text: 'French', value: 'French' },
  { key: 'Spanish', text: 'Spanish', value: 'Spanish' },
  { key: 'German', text: 'German', value: 'German' },
  { key: 'Chinese', text: 'Chinese', value: 'Chinese' }
];

class Dropdowns extends Component {
  state = { allowAdditionsOptions };

  handleAddition = (e, { value }) => {
    this.setState({
      options: [{ text: value, value }, ...this.state.options]
    });
  };

  handleChange = (e, { value }) => this.setState({ currentValues: value });
  render() {
    const { currentValues } = this.state;
    return (
      <MainContainer>
        <Grid columns="equal">
          <Grid.Column>
            <Segment>
              <Dropdown
                placeholder="Skills"
                fluid
                multiple
                selection
                options={MultipleSelectionOptions}
              />
              <Dropdown
                options={this.state.allowAdditionsOptions}
                placeholder="Choose Languages"
                search
                selection
                fluid
                multiple
                allowAdditions
                value={currentValues}
                onAddItem={this.handleAddition}
                onChange={this.handleChange}
              />
            </Segment>
          </Grid.Column>
          <Grid.Column />
        </Grid>
      </MainContainer>
    );
  }
}

export default Dropdowns;
