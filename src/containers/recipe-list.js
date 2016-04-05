import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Accordion, Panel, Button } from 'react-bootstrap';
import { triggerModal, activeRecipe } from '../actions/index';
import ModalContainer from './modal-container';
import { bindActionCreators } from 'redux';

class RecipeList extends Component {
  renderList() {
    return this.props.recipes.map((recipe) => {
      return (
        <Panel header={recipe.recipeName} key={recipe.id} eventKey={recipe.id} onClick={ () => this.props.activeRecipe(recipe) }>
          <div className="row">
            <div className="col-xs-12">
              <h4 className="text-center">
                Ingredients
              </h4>
              <p>{recipe.ingredients}</p>
            </div>
          </div>
          <div className="row">
            <div className="col-xs-12">
              <h4 className="text-center">
                Directions
              </h4>
              <p>{recipe.directions}</p>
            </div>
          </div>
          <Button bsSize='small' onClick={ () => this.props.triggerModal() }>
            Edit
          </Button>
          <ModalContainer />
        </Panel>
      );
    });
  }
  render() {
    return (
      <Accordion>
        {this.renderList()}
      </Accordion>
    )
  }
}

function mapStateToProps(state) {
  return {
    recipes: state.recipes
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ triggerModal, activeRecipe }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(RecipeList);
