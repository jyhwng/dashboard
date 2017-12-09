import React from 'react';
import { Input } from 'semantic-ui-react';
import './Input.css'

const BasicInput = ({disabled}) => {
  return (
    <Input fluid placeholder="Search..." disabled={disabled} />
  )
}

export default BasicInput;