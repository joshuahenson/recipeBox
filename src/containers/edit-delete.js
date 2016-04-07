import React, { Component } from 'react';
import { connect } from 'react-redux';
import { deleteRecipe, triggerAlert, triggerUpdateModal } from '../actions/index';
import { bindActionCreators } from 'redux';
import { Alert, Button, ButtonToolbar } from 'react-bootstrap';

class EditDeleteContainer extends Component {
  constructor(props) {
    super(props);
    this.delete = this.delete.bind(this);
    this.toggle = this.toggle.bind(this);
  }
  toggle() {
    this.props.triggerAlert();
  }
  delete() {
    this.props.deleteRecipe(this.props.activeRecipe.id);
    this.toggle();
  }
  render() {
    if (this.props.showAlert) {
      return (
        <Alert bsStyle='danger' onDismiss={this.toggle}>
            <h4>Please confirm</h4>
            <p>Are you sure you want to delete this recipe?</p>
            <hr/>
            <ButtonToolbar>
              <Button bsStyle='primary' onClick={this.delete}>Delete Recipe</Button>
              <Button onClick={this.toggle}>Cancel</Button>
            </ButtonToolbar>
        </Alert>
      )
    } else {
      return (
        <ButtonToolbar>
          <Button bsSize='small' bsStyle='primary' onClick={ () => this.props.triggerUpdateModal() }>
            Edit
          </Button>
          <Button bsSize='small' bsStyle='danger' onClick={ () => this.props.triggerAlert() }>
            Delete
        </Button>
        </ButtonToolbar>
      )
    }
  }
}

function mapStateToProps(state) {
  return {
    showAlert: state.showAlert,
    activeRecipe: state.activeRecipe
  };
}


function mapDispatchToProps(dispatch) {
  return bindActionCreators({ triggerAlert, triggerUpdateModal, deleteRecipe }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(EditDeleteContainer);
