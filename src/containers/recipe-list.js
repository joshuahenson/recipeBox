import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Accordion, Panel } from 'react-bootstrap';
import { activeRecipe } from '../actions/index';
import EditDeleteContainer from './edit-delete';
import { bindActionCreators } from 'redux';

class RecipeList extends Component {
  renderList() {
    return this.props.recipes.map((recipe) => {
      return (
        <Panel
          header={recipe.recipeName}
          key={recipe.id}
          eventKey={recipe.id}
          onClick={ () => this.props.activeRecipe(recipe) }
        >
          <div className="row">
            <div className="col-xs-10 col-xs-offset-1 col-md-8 col-md-offset-2">
              <h4 className="text-center">
                Ingredients
              </h4>
              <ul>
                {recipe.ingredients.map(ingredient => {
                  return(<li key={ingredient}>{ingredient}</li>);
                })}
              </ul>
            </div>
          </div>
          <div className="row">
            <div className="col-xs-10 col-xs-offset-1 col-md-8 col-md-offset-2">
              <h4 className="text-center">
                Directions
              </h4>
              <p>{recipe.directions}</p>
            </div>
          </div>
          <hr />
          <EditDeleteContainer />
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
  console.log('state= ', state);
  return {
    recipes: state.recipes
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ activeRecipe }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(RecipeList);
