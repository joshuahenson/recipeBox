import React from 'react';
import { Component } from 'react';
import RecipeList from '../containers/recipe-list';
import ModalContainer from '../containers/modal-container';

export default class App extends Component {
  render() {
    return (
      <div>
        <RecipeList />
        <ModalContainer />
      </div>
    );
  }
}
