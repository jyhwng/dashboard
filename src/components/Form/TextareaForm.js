import React, { Component } from 'react';
import { Dropdown, TextArea, Form, Divider } from 'semantic-ui-react';
import './Textareaform.css';

const options = [
  { key: 'react', text: 'React', value: 'react' },
  { key: 'css', text: 'CSS', value: 'css' },
  { key: 'design', text: 'Graphic Design', value: 'design' }
];

class Textarea extends Component {
  render() {
    return (
      <div className="textarea-form">
        <Dropdown
          placeholder="Options"
          fluid
          multiple
          selection
          options={options}
        />
        <Divider hidden />
        <Form>
          <TextArea
            autoHeight
            placeholder="Try adding multiple lines"
            style={{ minHeight: 100 }}
          />
        </Form>
      </div>
    );
  }
}

export default Textarea;
