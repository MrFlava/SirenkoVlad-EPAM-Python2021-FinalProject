
import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { PropTypes } from 'prop-types';
import { getEmployees, deleteEmployee } from '../../actions/employees';

const employee_types = {'MAIN_SYSTEM_ADMINISTRATOR': 'Main administrator',
                        'SYSTEM_ADMINISTRATOR': 'System administrator',
                        'SENIOR_NETWORK_ENGINEER': 'Senior network engineer',
                        'MIDDLE_NETWORK_ENGINEER': 'Middle network engineer',
                        'JUNIOR_NETWORK_ENGINEER': 'Junior network engineer',
                        'TECH_SUPPORT': 'Tech support'}

class EmployeesList extends Component {

    static propTypes = {
        employees: PropTypes.array.isRequired,
        getEmployees: PropTypes.func.isRequired,
        deleteEmployee: PropTypes.func.isRequired,
    };

    componentDidMount() {
        this.props.getEmployees();
    };

    render() {
        return (
            <Fragment>
                <h2>Employees list</h2>

                <table className='table table-striped'>
                    <thead>
                        <tr>
                            <th># ID</th>
                            <th>Full name</th>
                            <th>Employee type</th>
                            <th>Salary</th>
                            <th>Provider company ID</th>
                            <th>Date of birth</th>
                            <th>Actions</th>

                        </tr>
                    </thead>
                    <tbody>
                        {this.props.employees.map(employee => (
                            <tr key={`employee-row-${employee.id}`}>
                                <td>{employee.id}</td>
                                <td>
                                {employee.full_name}
                                </td>
                                <td>
                                {employee_types[employee.employee_type]}
                                </td>
                                <td>
                                {employee.salary}
                                </td>
                                <td>
                                {employee.provider_company}
                                </td>
                                <td>
                                {employee.date_of_birth}
                                </td>
                                <td>
                                <a href={`#/employees/${employee.id}/edit`}>
                                  <button className='btn btn-success btn-sm'>
                                    Update
                                  </button>
                                </a>
                                <span> </span>
                                <button
                                onClick={this.props.deleteEmployee.bind(this, employee.id)}
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
    employees: state.employees.employees
});

export default connect(mapStateToProps, { getEmployees, deleteEmployee })(EmployeesList);
