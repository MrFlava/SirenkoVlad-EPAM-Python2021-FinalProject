import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';
import { login } from '../../actions/auth';

class LoginForm extends Component {
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

  hiddenField = ({ type, meta: { error } }) => {
    return (
      <div className='field'>
        <input type={type} />
        {error && <div className='ui red message'>{error}</div>}
      </div>
    );
  };

  onSubmit = formValues => {
    this.props.login(formValues);
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
               <h4 className="card-title mb-4 mt-1">Login</h4>
             </div>
             <div class="card-body">
              <form
                onSubmit={this.props.handleSubmit(this.onSubmit)}
              >
                <div className="form-group">
                <Field
                  name='username'
                  type='text'
                  component={this.renderField}
                  label='Username:'
                  className="form-control"
                />
                </div>
                <div className="form-group">
                <Field
                  name='password'
                  type='password'
                  component={this.renderField}
                  label='Password:'
                  className="form-control"
                />
                </div>
                <div className="form-group">
                <Field
                  name='non_field_errors'
                  type='hidden'
                  component={this.hiddenField}
                />
                </div>
                <div className="form-group">
                <button className='btn btn-primary btn-lg'>Login</button>
                </div>
              </form>
              </div>
            </div>
            <div className='col-md-4'>
              <p style={{ marginTop: '1rem' }}>
                Don't have an account? <Link to='/register'>Register</Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated
});

LoginForm = connect(
  mapStateToProps,
  { login }
)(LoginForm);

export default reduxForm({
  form: 'loginForm'
})(LoginForm);
