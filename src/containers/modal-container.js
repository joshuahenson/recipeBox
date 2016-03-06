import React, { Component } from 'react';
import { connect } from 'react-redux';
import { triggerModal } from '../actions/index';
import { bindActionCreators } from 'redux';
import { Modal, Button, Input } from 'react-bootstrap';

class ModalContainer extends Component {
  render() {
    return (
      <div className='row'>
      <Button bsSize='large' bsStyle='primary' onClick={() => this.props.triggerModal()}>
        Add Recipe
      </Button>
        <Modal show={this.props.showModal} onHide={() => this.props.triggerModal()}>
          <Modal.Header closeButton>
            <Modal.Title>Recipe</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <form>
              <Input type="text" label="Recipe Name" placeholder="What are we making?" />
              <Input type="textarea" label="Ingredients" placeholder="list, separated, by, comma" />
              <Input type="textarea" label="Directions" placeholder="What are we going to do with these ingredients?" />
            </form>
          </Modal.Body>
          <Modal.Footer>
            <Button onClick={() => this.props.triggerModal()}>Cancel</Button>
            <Button bsStyle='primary'>Save Recipe</Button>
          </Modal.Footer>
        </Modal>
      </div>
    )
  }
}

function mapStateToProps(state) {
  //Whatever is returned will show up as props
  //inside ModalContainer
  console.log('state = ', state);
  return {
    showModal: state.showModal
  };
}

// Anything returned from this function will end up as props
// on the ModalContainer container
function mapDispatchToProps(dispatch) {
  // Whenever ModalContainer is called, the result should be passed
  // to all our reducers
  return bindActionCreators({ triggerModal: triggerModal }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(ModalContainer);
