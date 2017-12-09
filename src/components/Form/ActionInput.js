import React from 'react';
import { Input, Select } from 'semantic-ui-react';

const ActionInput = ({actionPosition}) => {
  
  const options = [
    { key: 'all', text: 'All', value: 'all' },
    { key: 'action', text: 'Action', value: 'action' },
    { key: 'products', text: 'Products', value: 'products' },
  ]

  return (
    <Input type='text' actionPosition={actionPosition} placeholder='Search...' fluid action>
      <Select compact options={options} defaultValue='action' />
      <input />
    </Input>
  )
}

export default ActionInput;