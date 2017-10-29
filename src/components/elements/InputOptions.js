import React, {Component} from 'react'
import { Grid, Icon, Input, Label, Select, Button } from 'semantic-ui-react'

const options = [
  { key: 'all', text: 'All', value: 'all' },
  { key: 'articles', text: 'Articles', value: 'articles' },
  { key: 'products', text: 'Products', value: 'products' },
]

class InputOptions extends Component {
    render() {
        return (
            <div>
                <Grid.Row>
                    <Grid.Column width={8}>
                        <Input iconPosition='left' placeholder='Email'>
                            <Icon name='at' />
                            <input />
                        </Input>
                        <Input label='http://' placeholder='mysite.com' />
                    </Grid.Column>
                    <Grid.Column width={4}>
                        <Input labelPosition='right' type='text' placeholder='Amount'>
                            <Label basic>$</Label>
                            <input />
                            <Label>.00</Label>
                        </Input>
                        <Input
                            icon='tags'
                            iconPosition='left'
                            label={{ tag: true, content: 'Add Tag' }}
                            labelPosition='right'
                            placeholder='Enter tags'
                        />
                    </Grid.Column>
                </Grid.Row>
                <Input
                    action={{ color: 'teal', labelPosition: 'left', icon: 'cart', content: 'Checkout' }}
                    actionPosition='left'
                    placeholder='Search...'
                    defaultValue='52.03'
                />
                <Input type='text' placeholder='Search...' action>
                    <input />
                    <Select compact options={options} defaultValue='articles' />
                    <Button type='submit'>Search</Button>
                </Input>
            </div>
        )
    }
}

export default InputOptions;
