import React, { Component } from 'react';
import { connect } from 'react-redux';
import { triggerModal, addRecipe } from '../actions/index';
import { bindActionCreators } from 'redux';
import { Modal, Button, Input } from 'react-bootstrap';

class ModalContainer extends Component {
  constructor(props) {
    super(props);
    this.toggle = this.toggle.bind(this);
    this.save = this.save.bind(this);
  }
  toggle() {
    this.props.triggerModal();
  }
  save(e) {
    e.preventDefault();
    let recipeInputs = {
      recipeName: this.refs.recipeName.getValue(),
      ingredients: this.refs.ingredients.getValue().split(','),
      directions: this.refs.directions.getValue()
    };
    this.props.addRecipe(recipeInputs);
    this.toggle();
  }
  render() {
    return (
      <div className='row'>
        <Modal show={this.props.showModal} onHide={this.toggle}>
          <Modal.Header closeButton>
            <Modal.Title>Recipe</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <form onSubmit={this.save}>
              <Input type="text" label="Recipe Name" ref='recipeName'
                placeholder="What are we making?" />
              <Input type="textarea" label="Ingredients" ref='ingredients'
                placeholder="list, separated, by, comma" />
              <Input type="textarea" label="Directions" ref='directions'
                placeholder="What are we going to do with these ingredients?" />
            </form>
          </Modal.Body>
          <Modal.Footer>
            <Button onClick={this.toggle}>Cancel</Button>
            <Button bsStyle='primary' type='submit' onClick={this.save}>
              Save Recipe
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
    )
  }
}

function mapStateToProps(state) {
  //Whatever is returned will show up as props
  //inside ModalContainer
  return {
    showModal: state.showModal
  };
}

// Anything returned from this function will end up as props
// on the ModalContainer container
function mapDispatchToProps(dispatch) {
  // Whenever ModalContainer is called, the result should be passed
  // to all our reducers
  return bindActionCreators({ triggerModal, addRecipe }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(ModalContainer);
