import React, { Component } from 'react';
import { connect } from 'react-redux';
import { triggerModal } from '../actions/index';
import { bindActionCreators } from 'redux';
import { Button } from 'react-bootstrap';
import ModalContainer from './modal-container';
// import ModalUpdateContainer from './modal-update-container';

class ModalLauncher extends Component {
  render() {
    return (
      <div className='row'>
        <div className='col-sm-6 col-sm-offset-3'>
          <Button bsSize='large' bsStyle='primary' block
            onClick={ () => this.props.triggerModal() }>
            Add Recipe
          </Button>
          <ModalContainer />
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    //todo why is this still here?
    showModal: state.modal.showModal
  };
}

// Anything returned from this function will end up as props
// on the ModalLauncher container
function mapDispatchToProps(dispatch) {
  // Whenever ModalLauncher is called, the result should be passed
  // to all our reducers
  return bindActionCreators({ triggerModal }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(ModalLauncher);
