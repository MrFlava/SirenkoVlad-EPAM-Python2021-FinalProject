import React, { Component } from 'react';
import { connect } from 'react-redux';
import { useParams } from 'react-router-dom';
import PropTypes from 'prop-types';
import { addProvider, getProvider, editProvider } from '../../actions/providers';

const defaultState = {
    name: '',
    incomes: 0,
    expenses: 0,
    isEditing: false,
};

class ProviderForm extends Component {

    constructor(props) {
      super(props);

      this.state = {
        ...defaultState,
        isEditing: this.props.match.path.indexOf('edit') >= 0,
      }

      this.onSubmit = this.onSubmit.bind(this);
    }

    static propTypes = {
        addProvider: PropTypes.func.isRequired
    };

    onSubmit = (e) => {
        e.preventDefault();

        const { name, incomes, expenses, isEditing } = this.state;


        const provider = { name, incomes, expenses };

        if (isEditing) {
          this.props.editProvider(this.props.match.params.providerId, provider);
          this.props.history.push('/');

        } else {
          this.props.addProvider(provider);
          this.props.history.push('/');
        }
    };

    componentDidMount() {
      if (this.state.isEditing) {
        this.props.getProvider(this.props.match.params.providerId).then(({ name, incomes, expenses }) => {
          this.setState({
            name,
            incomes,
            expenses,
          })
        });
      }
    }

    onChange = (e) => this.setState({ [e.target.name]: e.target.value });

    render() {
        const { name, incomes, expenses, isEditing } = this.state;
        const providerId = this.props.match.params.providerId;

        return (
            <div className='card card-body mt-4 mb-4'>
                <h2>{isEditing ? 'Edit Provider' : 'Add Provider'}</h2>
                <form onSubmit={this.onSubmit}>
                    <div className='form-group'>
                        <label>Name</label>
                        <input
                            type='text'
                            className='form-control'
                            name='name'
                            onChange={this.onChange}
                            value={name} />
                    </div>
                    <div className='form-group'>
                        <label>Incomes</label>
                        <input
                            type='number'
                            className='form-control'
                            name='incomes'
                            onChange={this.onChange}
                            value={incomes} />
                    </div>
                    <div className='form-group'>
                        <label>Expenses</label>
                        <input
                            type='number'
                            className='form-control'
                            name='expenses'
                            onChange={this.onChange}
                            value={expenses} />
                    </div>
                    <div className='form-group'>
                        <button type='submit' className='btn btn-primary'>
                            {isEditing ? 'Update' : 'Add'}
                        </button>
                        <span> </span>
                        {isEditing && (
                          <a href='#/'>
                            <button className='btn btn-primary'>Cancel</button>
                          </a>
                        )}
                    </div>
                </form>
            </div>
        )
    }
}

export default connect(null, { addProvider, getProvider, editProvider })(ProviderForm);
