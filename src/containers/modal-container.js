import React, { Component } from 'react';
import { connect } from 'react-redux';
import { triggerModal, triggerUpdateModal, addRecipe, updateRecipe } from '../actions/index';
import { bindActionCreators } from 'redux';
import { Modal, Button, Input } from 'react-bootstrap';

class ModalContainer extends Component {
  constructor(props) {
    super(props);
    this.toggle = this.toggle.bind(this);
    this.save = this.save.bind(this);
    // this.update = this.update.bind(this);
    this.addOrUpdateRecipe = this.addOrUpdateRecipe.bind(this);
    this.state = {name: null};
  }
  toggle() {
    this.props.triggerModal();
    this.setState({ name: null })
    if(this.props.updateModal) {
      this.props.triggerUpdateModal();
    }
  }
  // todo refactor update and save functions now that modals are combined
  // update(e) {
  //   e.preventDefault();
  //   let recipeName = this.refs.recipeName.getValue(),
  //     ingredients = this.refs.ingredients.getValue(),
  //     directions = this.refs.directions.getValue(),
  //     recipeInputs = {
  //       recipeName: recipeName,
  //       ingredients: ingredients.split(','),
  //       directions: directions
  //     };
  //   if(recipeName.length < 1) {
  //     this.setState({ name: 'error' })
  //   } else {
  //     this.props.updateRecipe(recipeInputs);
  //     this.toggle();
  //   }
  // }
  addOrUpdateRecipe(recipeInputs) {
    { this.props.updateModal ? this.props.updateRecipe(recipeInputs) : this.props.addRecipe(recipeInputs) }
  }
  save(e) {
    e.preventDefault();
    let recipeName = this.refs.recipeName.getValue(),
      ingredients = this.refs.ingredients.getValue(),
      directions = this.refs.directions.getValue(),
      recipeInputs = {
        recipeName: recipeName,
        ingredients: ingredients.split(','),
        directions: directions,
        id: this.props.activeRecipe.id
      };
    if(recipeName.length < 1) {
      this.setState({ name: 'error' })
    } else {
      this.addOrUpdateRecipe(recipeInputs);
      this.toggle();
    }
  }
  render() {
    return (
      <div className='row'>
        <Modal show={this.props.showModal} onHide={this.toggle}>
          
          
          
      { this.props.updateModal ?
        <div>
        <Modal.Header closeButton>
          <Modal.Title>{ this.props.activeRecipe.recipeName }</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form onSubmit={this.save}>
            <Input type="text" label="Recipe Name" ref='recipeName'
              defaultValue={ this.props.activeRecipe.recipeName }
              bsStyle={this.state.name}
            />
            <Input type="textarea" label="Ingredients" ref='ingredients'
              defaultValue={ this.props.activeRecipe.ingredients }
            />
            <Input type="textarea" label="Directions" ref='directions'
              defaultValue={ this.props.activeRecipe.directions }
            />
          </form>
        </Modal.Body>
      </div>
      : 
        <div>
          <Modal.Header closeButton>
            <Modal.Title>
              Recipe
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <form onSubmit={this.save}>
              <Input type="text" label="Recipe Name" ref='recipeName'
                placeholder="What are we making?" bsStyle={this.state.name}/>
              <Input type="textarea" label="Ingredients" ref='ingredients'
                placeholder="list, separated, by, comma" />
              <Input type="textarea" label="Directions" ref='directions'
                placeholder="What are we going to do with these ingredients?" />
            </form>
          </Modal.Body>
        </div>
        
      } 
          <Modal.Footer>
            <Button onClick={this.toggle}>Cancel</Button>
            <Button bsStyle='primary' type='submit' onClick={this.save}>
              Save Recipe
            </Button>
          </Modal.Footer>
        </Modal>        
      </div>
    );
  }
}

function mapStateToProps(state) {
  //Whatever is returned will show up as props
  //inside ModalContainer
  console.log('state= ', state);
  return {
    showModal: state.modal.showModal,
    updateModal: state.modal.updateModal,
    activeRecipe: state.activeRecipe
  };
}

// Anything returned from this function will end up as props
// on the ModalContainer container
function mapDispatchToProps(dispatch) {
  // Whenever ModalContainer is called, the result should be passed
  // to all our reducers
  return bindActionCreators({ triggerModal, triggerUpdateModal, addRecipe, updateRecipe }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(ModalContainer);
