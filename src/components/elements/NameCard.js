import React, { Component } from 'react';
import { Card, Icon, Image } from 'semantic-ui-react';
import './NameCard.css';

class NameCard extends Component {
  render() {
    return (
      <Card>
        <Image src="https://images.unsplash.com/photo-1464692805480-a69dfaafdb0d?auto=format&fit=crop&w=1050&q=60&ixid=dW5zcGxhc2guY29tOzs7Ozs%3D" />
        <Card.Content>
          <Card.Header>Matthew</Card.Header>
          <Card.Meta>
            <span className="date">Joined in 2015</span>
          </Card.Meta>
          <Card.Description>
            Matthew is a musician living in Nashville.
          </Card.Description>
        </Card.Content>
        <Card.Content extra>
          <a>
            <Icon name="user" />
            22 Friends
          </a>
        </Card.Content>
      </Card>
    );
  }
}

export default NameCard;
