import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Accordion, Panel } from 'react-bootstrap';
import { Button } from 'react-bootstrap';
//import { selectBook } from '../actions/index';
// import { bindActionCreators } from 'redux';

class RecipeList extends Component {
  renderList() {
    return this.props.recipes.map((recipe) => {
      return (
        <Panel header={recipe.recipeName} key={recipe.recipeName} eventKey={recipe.recipeName}>
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
          <Button bsSize='small'>
            Edit
          </Button>
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
  //Whatever is returned will show up as props
  //inside BookList
  return {
    recipes: state.recipes
  };
}

// Anything returned from this function will end up as props
// on the BookList container
// function mapDispatchToProps(dispatch) {
//   // Whenever selectBook is called, the result should be passed
//   // to all our reducers
//   return bindActionCreators({ selectBook: selectBook }, dispatch);
// }


// export default connect(mapStateToProps, mapDispatchToProps)(RecipeList);
export default connect(mapStateToProps)(RecipeList);
