import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { addProvider } from '../../actions/providers';

class Form extends Component {

    state = {
        name: '',
        incomes: 0,
        expenses: 0,
    };

    static propTypes = {
        addProvider: PropTypes.func.isRequired
    };

    onSubmit = (e) => {
        e.preventDefault();
        const { name, incomes, expenses } = this.state;
        const provider = { name, incomes, expenses };
        this.props.addProvider(provider);
        this.setState({
          name: '',
          incomes: 0,
          incomes: 0,
        });
    };

    onChange = (e) => this.setState({ [e.target.name]: e.target.value });

    render() {
        const { name, incomes, expenses } = this.state;

        return (
            <div className='card card-body mt-4 mb-4'>
                <h2>Add provider</h2>
                <form onSubmit={this.onSubmit}>
                    <div className='form-group'>
                        <label>Name</label>
                        <input
                            type='text'
                            className='form-control'
                            name='title'
                            onChange={this.onChange}
                            value={name} />
                    </div>
                    <div className='form-group'>
                        <label>Incomes</label>
                        <input
                            type='number'
                            className='form-control'
                            name='description'
                            onChange={this.onChange}
                            value={incomes} />
                    </div>
                    <div className='form-group'>
                        <label>Expenses</label>
                        <input
                            type='number'
                            className='form-control'
                            name='description'
                            onChange={this.onChange}
                            value={expenses} />
                    </div>
                    <div className='form-group'>
                        <button type='submit' className='btn btn-primary'>Add</button>
                    </div>
                </form>
            </div>
        )
    }
}

export default connect(null, { addProvider })(Form);
