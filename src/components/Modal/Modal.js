import React, { Component } from 'react'
import { Modal } from 'semantic-ui-react'
import './Modal.css'

class ModalComponent extends Component {
  state = { open: false }

  show = () => this.setState({ open: true })
  close = () => this.setState({ open: false })

  render() {
    const { open } = this.state

    return (
      <div>
        <p>Modal</p>
        <button className="open-modal" onClick={this.show}>
          <p>Open Modal</p>
        </button>
        <Modal className="modal-wrapper" size={'small'} open={open} onClose={this.close} closeIcon={true}>
          <Modal.Header>
            Modal title
          </Modal.Header>
          <Modal.Content>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
          </Modal.Content>
          <Modal.Actions>
            <button className="modal-close" onClick={this.close}>
              <p>Close</p>
            </button>
            <button className="modal-okay" onClick={this.close}>
              <p>Okay</p>
            </button>
          </Modal.Actions>
        </Modal>
      </div>
    )
  }
}

export default ModalComponent
