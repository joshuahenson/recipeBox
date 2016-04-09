import React, { Component } from 'react';
import { connect } from 'react-redux';
import { deleteRecipe, triggerUpdateModal, triggerModal } from '../actions/index';
import { bindActionCreators } from 'redux';
import { Alert, Button, ButtonToolbar } from 'react-bootstrap';

class EditDeleteContainer extends Component {
  constructor(props) {
    super(props);
    this.delete = this.delete.bind(this);
    this.state = {alertVisible: false};
    this.toggleAlert = this.toggleAlert.bind(this);
  }
  toggleAlert() {
    this.setState({alertVisible: !this.state.alertVisible});
  }
  toggleModal() {
    this.props.triggerModal();
    this.props.triggerUpdateModal();
  }
  delete() {
    this.props.deleteRecipe(this.props.activeRecipe.id);
    this.toggleAlert();
  }
  render() {
    if (this.state.alertVisible) {
      return (
        <Alert bsStyle='danger' onDismiss={ this.toggleAlert }>
            <h4>Please confirm</h4>
            <p>Are you sure you want to delete this recipe?</p>
            <hr/>
            <ButtonToolbar>
              <Button bsStyle='primary' onClick={this.delete}>
                Delete Recipe
              </Button>
              <Button onClick={ this.toggleAlert }>Cancel</Button>
            </ButtonToolbar>
        </Alert>
      );
    } else {
      return (
        <ButtonToolbar>
          <Button bsSize='small' bsStyle='primary'
            onClick={ () => this.toggleModal() }>
            Edit
          </Button>
          <Button bsSize='small' bsStyle='danger'
            onClick={ this.toggleAlert }>
            Delete
        </Button>
        </ButtonToolbar>
      );
    }
  }
}

function mapStateToProps(state) {
  return {
    activeRecipe: state.activeRecipe
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ triggerUpdateModal, deleteRecipe, triggerModal },
    dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(EditDeleteContainer);
