
import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { PropTypes } from 'prop-types';
import { getProviders, deleteProvider } from '../../actions/providers';



class List extends Component {

    static propTypes = {
        providers: PropTypes.array.isRequired,
    };

    componentDidMount() {
        this.props.getProviders();
    };

    render() {
        return (
            <Fragment>
                <h2>Providers list</h2>

                {this.props.providers.slice(0,1).map(provider => (
                  <h3>
                      <p><a href="#">Average incomes: {Math.floor(provider.average_income.incomes__avg)}</a></p>
                      <p><a href="#">Average expenses: {Math.floor(provider.average_expense.expenses__avg)}</a></p>
                  </h3>
                ))}

                <table className='table table-striped'>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Incomes</th>
                            <th>Expenses</th>
                            <th>Actions</th>

                        </tr>
                    </thead>
                    <tbody>
                        {this.props.providers.map(provider => (
                            <tr key={provider.id}>
                                <td>{provider.name}</td>
                                <td>{provider.incomes}</td>
                                <td>{provider.expenses}</td>
                                <td><button
                                className='btn btn-success btn-sm'>Update</button>
                                <span> </span>
                                <button
                                onClick={this.props.deleteProvider.bind(this, provider.id)}
                                className='btn btn-danger btn-sm'>Delete</button></td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </Fragment>
        )
    }
}


const mapStateToProps = (state) => ({
    providers: state.providers.providers
});

export default connect(mapStateToProps, { getProviders, deleteProvider })(List);
