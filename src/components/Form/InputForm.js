import React, { Component } from 'react';
import { Icon, Input, Label, Select, Button, Divider } from 'semantic-ui-react';
import './InputForm.css';

const options = [
  { key: 'all', text: 'All', value: 'all' },
  { key: 'articles', text: 'Articles', value: 'articles' },
  { key: 'products', text: 'Products', value: 'products' }
];

class InputForm extends Component {
  render() {
    return (
      <div className="input-form">
        <Input iconPosition="left" placeholder="Email">
          <Icon name="at" />
          <input />
        </Input>
        <Divider hidden />

        <Input label="http://" placeholder="mysite.com" />
        <Divider hidden />

        <Input labelPosition="right" type="text" placeholder="Amount">
          <Label basic>$</Label>
          <input />
          <Label>.00</Label>
        </Input>
        <Divider hidden />

        <Input
          icon="tags"
          iconPosition="left"
          label={{ tag: true, content: 'Add Tag' }}
          labelPosition="right"
          placeholder="Enter tags"
        />
        <Divider hidden />

        <Input type="text" placeholder="Search..." action>
          <input />
          <Select compact options={options} defaultValue="articles" />
          <Button type="submit">Search</Button>
        </Input>
        <Divider hidden />

        <Input
          action={{
            color: 'teal',
            labelPosition: 'left',
            icon: 'cart',
            content: 'Checkout'
          }}
          actionPosition="left"
          placeholder="Search..."
          defaultValue="52.03"
        />
      </div>
    );
  }
}

export default InputForm;
