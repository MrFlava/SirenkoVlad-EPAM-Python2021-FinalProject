import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';
import { register } from '../../actions/auth';

class RegisterForm extends Component {
  renderField = ({ input, label, type, meta: { touched, error } }) => {
    return (
      <div className={`field ${touched && error ? 'error' : ''}`}>
        <label>{label}</label>
        <input {...input} type={type} />
        {touched && error && (
          <span className='ui pointing red basic label'>{error}</span>
        )}
      </div>
    );
  };

  onSubmit = formValues => {
    this.props.register(formValues).then(() => {
      this.props.history.push('/login');
    });
  };

  render() {
    if (this.props.isAuthenticated) {
      return <Redirect to='/' />;
    }
    return (
      <div className='container'>
        <div className='row justify-content-center'>
          <div className='col-md-8'>
            <div style={{ marginTop: '1rem' }} className='card'>
              <div class="card-header">
                <h4 className="card-title mb-4 mt-1">Sign in</h4>
              </div>
              <div class="card-body">
                <form
                  onSubmit={this.props.handleSubmit(this.onSubmit)}
                  className='ui form'
                >
                  <div className="form-group">
                  <Field
                    name='username'
                    type='text'
                    component={this.renderField}
                    label='Username:'
                    className="form-control"
                    validate={[required, minLength3, maxLength15]}
                  />
                  </div>
                  <div className="form-group">
                  <Field
                    name='email'
                    type='email'
                    component={this.renderField}
                    label='Email:'
                    className="form-control"
                    validate={required}
                  />
                  </div>
                  <div className="form-group">
                  <Field
                    name='password'
                    type='password'
                    component={this.renderField}
                    label='Password:'
                    className="form-control"
                    validate={required}
                  />
                  </div>
                  <div className="form-group">
                  <Field
                    name='password2'
                    type='password'
                    component={this.renderField}
                    label='Confirm Password:'
                    className="form-control"
                    validate={[required, passwordsMatch]}
                  />
                  </div>
                <div className="form-group">
                  <button className='btn btn-primary btn-lg'>Register</button>
                </div>
                </form>
              </div>
            </div>
            <div className='col-md-4'>
              <p style={{ marginTop: '1rem' }}>
                Already have an account? <Link to='/login'>Login</Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const required = value => (value ? undefined : 'Required');

const minLength = min => value =>
  value && value.length < min
    ? `Must be at least ${min} characters`
    : undefined;

const minLength3 = minLength(3);

const maxLength = max => value =>
  value && value.length > max ? `Must be ${max} characters or less` : undefined;

const maxLength15 = maxLength(15);

const passwordsMatch = (value, allValues) =>
  value !== allValues.password ? 'Passwords do not match' : undefined;

const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated
});

RegisterForm = connect(
  mapStateToProps,
  { register }
)(RegisterForm);

export default reduxForm({
  form: 'registerForm'
})(RegisterForm);
