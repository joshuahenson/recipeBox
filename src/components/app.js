import React from 'react';
import { Component } from 'react';
import RecipeList from '../containers/recipe-list';
import ModalLauncher from '../containers/modal-launcher';

export default class App extends Component {
  render() {
    return (
      <div>
        <RecipeList />
        <ModalLauncher />
      </div>
    );
  }
}
