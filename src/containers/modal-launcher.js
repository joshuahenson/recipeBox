import React, { Component } from 'react';
import { connect } from 'react-redux';
import { triggerModal } from '../actions/index';
import { bindActionCreators } from 'redux';
import { Button } from 'react-bootstrap';
import ModalContainer from './modal-container';

class ModalLauncher extends Component {
  constructor(props) {
    super(props);
    this.toggle = this.toggle.bind(this);
  }
  toggle() {
    this.props.triggerModal();
  }
  render() {
    return (
      <div className='row'>
        <Button bsSize='large' bsStyle='primary' onClick={this.toggle}>
          Add Recipe
        </Button>
        <ModalContainer />
      </div>
    )
  }
}

function mapStateToProps(state) {
  //Whatever is returned will show up as props
  //inside ModalLauncher
  //console.log('state = ', state);
  return {
    showModal: state.showModal
  };
}

// Anything returned from this function will end up as props
// on the ModalLauncher container
function mapDispatchToProps(dispatch) {
  // Whenever ModalLauncher is called, the result should be passed
  // to all our reducers
  return bindActionCreators({ triggerModal: triggerModal }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(ModalLauncher);
