import React, { Component } from 'react';
import { connect } from 'react-redux';
//import { selectBook } from '../actions/index';
// import { bindActionCreators } from 'redux';

class RecipeList extends Component {
  renderList() {
    return this.props.recipes.map((recipe) => {
      return (
        <li
          key={recipe.recipeName}
          onClick=''
          className="list-group-item">
          {recipe.recipeName}
        </li>
      );
    });
  }
  render() {
    return (
      <ul className='list-group col-sm-4'>
        {this.renderList()}
      </ul>
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
