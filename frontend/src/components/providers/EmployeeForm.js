import React, { Component } from 'react';
import { connect } from 'react-redux';
import { useParams } from 'react-router-dom';
import PropTypes from 'prop-types';
import { addEmployee, getEmployee, editEmployee } from '../../actions/employees';


const defaultState = {
    full_name: '',
    employee_type: '',
    salary: 0,
    provider_company: 0,
    date_of_birth: Date.now(),
    isEditing: false,
};



class EmployeeForm extends Component {


    constructor(props) {
      super(props);

      this.state = {
        ...defaultState,
        isEditing: this.props.match.path.indexOf('edit') >= 0,
      }

      this.onSubmit = this.onSubmit.bind(this);
    }

    static propTypes = {
        addEmployee: PropTypes.func.isRequired,
        getEmployee: PropTypes.func.isRequired,
        editEmployee: PropTypes.func.isRequired,
    };

    onSubmit = (e) => {
        e.preventDefault();

        const { full_name, employee_type, salary, provider_company, date_of_birth, isEditing } = this.state;

        const employee = { full_name, employee_type, salary, provider_company, date_of_birth };
        if (isEditing) {
          this.props.editEmployee(this.props.match.params.employeeId, employee);
          this.props.history.push('/');

        } else {
          this.props.addEmployee(employee);
          this.props.history.push('/');
        }

    };

    componentDidMount() {
      if (this.state.isEditing) {
        this.props.getEmployee(this.props.match.params.employeeId).then(
          (employee) => {
          this.setState({
            ...employee,
          })
        });
      }
    }


    onChange = (e) => this.setState({ [e.target.name]: e.target.value });



    render() {
        const { full_name, employee_type, salary,
           provider_company, date_of_birth, isEditing } = this.state;
        const employeeId = this.props.match.params.employeeId;


        return (
            <div className='card card-body mt-4 mb-4'>
                <h2>{isEditing ? 'Edit Employee' : 'Add Employee'}</h2>
                <form onSubmit={this.onSubmit}>
                    <div className='form-group'>
                        <label>Full name</label>
                        <input
                            type='text'
                            className='form-control'
                            name='full_name'
                            onChange={this.onChange}
                            value={full_name} />
                    </div>
                    <div className='form-group'>
                        <label>Salary</label>
                        <input
                            type='number'
                            className='form-control'
                            name='salary'
                            onChange={this.onChange}
                            value={salary} />
                    </div>
                    <div className='form-group'>
                        <label>Employee type</label>
                        <select  name='employee_type' className='form-control' value={employee_type} onChange={this.onChange}>
                          <option value="TECH_SUPPORT">Tech support</option>
                          <option value="JUNIOR_NETWORK_ENGINEER">Junior network engineer</option>
                          <option value="MIDDLE_NETWORK_ENGINEER">Middle network engineer</option>
                          <option value="SENIOR_NETWORK_ENGINEER">Senior network engineer</option>
                          <option value="SYSTEM_ADMINISTRATOR">System administrator</option>
                          <option value="MAIN_SYSTEM_ADMINISTRATOR">Main administrator</option>
                        </select>
                    </div>
                    <div className='form-group'>
                        <label>Provider company ID </label>
                        <input
                            type='number'
                            className='form-control'
                            name='provider_company'
                            onChange={this.onChange}
                            value={provider_company} />
                    </div>
                    <div className='form-group'>
                        <label>Date of birth </label>
                        <input
                            type='date'
                            className='form-control'
                            name='date_of_birth'
                            onChange={this.onChange}
                            value={date_of_birth} />
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

export default connect(null, { addEmployee, getEmployee, editEmployee })(EmployeeForm);
