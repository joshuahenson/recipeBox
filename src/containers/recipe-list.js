import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Accordion, Panel } from 'react-bootstrap';
//import { selectBook } from '../actions/index';
// import { bindActionCreators } from 'redux';

class RecipeList extends Component {
  renderList() {
    return this.props.recipes.map((recipe) => {
      return (
        <Accordion key={recipe.recipeName}>
          <Panel header={recipe.recipeName} eventKey={recipe.recipeName}>
            Ingredients: {recipe.ingredients}
            <br />
            Directions: {recipe.directions}
          </Panel>
        </Accordion>
      );
    });
  }
  render() {
    return (
      <div>
        {this.renderList()}
      </div>
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
