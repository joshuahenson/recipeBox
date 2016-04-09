import React, { Component } from 'react';
import { connect } from 'react-redux';
import { triggerModal } from '../actions/index';
import { bindActionCreators } from 'redux';
import { Button } from 'react-bootstrap';
import ModalContainer from './modal-container';

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

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ triggerModal }, dispatch);
}

export default connect(null, mapDispatchToProps)(ModalLauncher);
