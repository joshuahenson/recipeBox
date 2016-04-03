import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Accordion, Panel, Button } from 'react-bootstrap';
import { triggerModal } from '../actions/index';
import ModalContainer from './modal-container';
import { bindActionCreators } from 'redux';

class RecipeList extends Component {
  constructor(props) {
    super(props);
    this.toggle = this.toggle.bind(this);
  }
  toggle() {
    this.props.triggerModal();
  }
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
          <Button bsSize='small' onClick={this.toggle}>
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
  //Whatever is returned will show up as props
  //inside BookList
  return {
    recipes: state.recipes
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ triggerModal: triggerModal }, dispatch);
}


// export default connect(mapStateToProps, mapDispatchToProps)(RecipeList);
export default connect(mapStateToProps, mapDispatchToProps)(RecipeList);
