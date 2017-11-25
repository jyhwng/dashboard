import React, { Component } from 'react';
import './Modal.css';

class Modal extends Component {
  render() {
    return (
      <div>
        <div className="md-modal md-effect-1" id="modal-1">
          <div className="md-content">
            <h3>Modal Dialog</h3>
            <div>
              <p>This is a modal window. You can do the following things with it:</p>
              <ul>
                <li><strong>Read:</strong> Modal windows will probably tell you something important so don't forget to read what it says.</li>
                <li><strong>Look:</strong> modal windows enjoy a certain kind of attention; just look at it and appreciate its presence.</li>
                <li><strong>Close:</strong> click on the button below to close the modal.</li>
              </ul>
              <button className="md-close">Close me!</button>
            </div>
          </div>
        </div>
        <div className="md-overlay"></div>
      </div>
    )
  }
}

export default Modal;
