import _ from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getProvider, editProvider } from '../../actions/providers';
import ProviderUpdateForm from './UpdateForm';

class ProviderUpdate extends Component {
  componentDidMount() {
    this.props.getProvider(this.props.match.params.id);
  }

  onSubmit = formValues => {
    this.props.editProvider(this.props.match.params.id, formValues);
  };

  render() {
    // if (!this.props.todo) {
    //   return <div>Loading...</div>;
    // }
    return (
      <div className='ui container'>
        <h2 style={{ marginTop: '2rem' }}>Edit Provider</h2>
        <ProviderUpdateForm
          initialValues={_.pick(this.props.provider, 'name')}
          enableReinitialize={true}
          onSubmit={this.onSubmit}
        />
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => ({
  provider: state.providers[ownProps.match.params.id]
});

export default connect(
  mapStateToProps,
  { getProvider, editProvider }
)(ProviderUpdate);
