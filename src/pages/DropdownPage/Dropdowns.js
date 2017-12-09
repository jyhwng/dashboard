import React, { Component } from 'react';
import { Grid, Segment, Dropdown, Divider } from 'semantic-ui-react';
import DropdownSearch from '../../components/Dropdown/DropdownSearch';
import DropdownButton from '../../components/Dropdown/DropdownButton'

const singleSelectionOptions = [
    {
      text: 'Jenny Hess',
      value: 'Jenny Hess',
    },
    {
      text: 'Steve Jobs',
      value: 'Steve Jobs',
    },
    {
      text: 'Bill Gates',
      value: 'Bill Gates',
    },
  ]

class SingleSelectionDropdown extends Component {
  render() {
    return (
      <Dropdown placeholder='Select an option' fluid selection options={singleSelectionOptions} />
    )
  }
}

const multipleSelectionOptions = [
  { key: 'css', text: 'CSS', value: 'css' },
  { key: 'design', text: 'Graphic Design', value: 'design' },
  { key: 'html', text: 'HTML', value: 'html' },
  { key: 'javascript', text: 'Javascript', value: 'javascript' },
]

const MultipleSelectionDropdown = () => (
  <Dropdown placeholder='Skills' fluid multiple selection options={multipleSelectionOptions} />
)

const searchableMultipleSelectionOptions = [
  { key: 'English', text: 'English', value: 'English' },
  { key: 'French', text: 'French', value: 'French' },
  { key: 'Spanish', text: 'Spanish', value: 'Spanish' },
  { key: 'German', text: 'German', value: 'German' },
  { key: 'Chinese', text: 'Chinese', value: 'Chinese' }
];

class SearchableMultipleSelectionDropdown extends Component {
  state = { searchableMultipleSelectionOptions };
  
  handleAddition = (e, { value }) => {
    this.setState({
      options: [{ text: value, value }, ...this.state.options]
    });
  };

  handleChange = (e, { value }) => this.setState({ currentValues: value });

  render() {
    const { currentValues } = this.state;
    return (
      <Dropdown
        options={this.state.searchableMultipleSelectionOptions}
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
    );
  }
}

class Dropdowns extends Component {
  render() {
    const squareButtonStyle = {
      borderRadius: '4px',
    }

    const roundedButtonStyle = {
      borderRadius: '32px',
    }

    return (
      <Grid columns="equal">
        <Grid.Column>
          <Segment>
            <p>Single Selection Dropdown</p>
            <SingleSelectionDropdown/>
            <Divider hidden/>
            <p>Multiple Selection Dropdown</p>
            <MultipleSelectionDropdown/>
            <Divider hidden/>
            <p>Searchable Multiple Selection Dropdown</p>
            <SearchableMultipleSelectionDropdown/>
          </Segment>
        </Grid.Column>
        <Grid.Column>
          <Segment>
            <p>Search Dropdown</p>
            <DropdownSearch/>
            <Divider hidden/>
            <p>Button Dropdown</p>
            <DropdownButton style={squareButtonStyle} />
            <Divider hidden/>
            <DropdownButton style={roundedButtonStyle} />
          </Segment>
        </Grid.Column>
      </Grid>
    );
  }
}

export default Dropdowns;
