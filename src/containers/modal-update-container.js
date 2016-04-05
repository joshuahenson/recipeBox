import React, { Component } from 'react';
import { connect } from 'react-redux';
import { triggerUpdateModal, updateRecipe } from '../actions/index';
import { bindActionCreators } from 'redux';
import { Modal, Button, Input } from 'react-bootstrap';

class ModalUpdateContainer extends Component {
  constructor(props) {
    super(props);
    this.toggle = this.toggle.bind(this);
    this.update = this.update.bind(this);
  }
  toggle() {
    this.props.triggerUpdateModal();
  }
  update(e) {
    e.preventDefault();
    const recipeInputs = {
      recipeName: this.refs.recipeName.getValue(),
      ingredients: this.refs.ingredients.getValue(),
      directions: this.refs.directions.getValue(),
      id: this.props.id
    };
    this.props.updateRecipe(recipeInputs);
    this.toggle();
  }
  render() {
    return (
      <div className='row'>
        <Modal show={this.props.showUpdateModal} onHide={this.toggle}>
          <Modal.Header closeButton>
            <Modal.Title>Recipe</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <form onSubmit={this.update}>
              <Input type="text" label="Recipe Name" ref='recipeName' />
              <Input type="textarea" label="Ingredients" ref='ingredients' />
              <Input type="textarea" label="Directions" ref='directions' />
            </form>
          </Modal.Body>
          <Modal.Footer>
            <Button onClick={this.toggle}>Cancel</Button>
            <Button bsStyle='primary' type='submit' onClick={this.update}>
              Update Recipe
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    showUpdateModal: state.showUpdateModal,
    id: state.activeRecipe.id
  };
}


function mapDispatchToProps(dispatch) {
  return bindActionCreators({ triggerUpdateModal, updateRecipe }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(ModalUpdateContainer);
