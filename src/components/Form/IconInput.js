import React from 'react';
import { Input, Label, Icon } from 'semantic-ui-react';

const IconInput = () => {
  return (
    <Input labelPosition='left' type='text' placeholder='Amount' fluid>
      <Label basic><Icon name="location arrow"/></Label>
      <input />
    </Input>
  )
}

export default IconInput;
