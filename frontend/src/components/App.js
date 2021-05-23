import React, { Component, Fragment } from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import { PersistGate } from 'redux-persist/integration/react'

import history from '../history';
import Header from './layout/Header';
import DashBoard from './providers/DashBoard';
import PrivateRoute from './common/PrivateRoute';
import RegisterForm from './auth/RegisterForm';
import EmployeeForm from './providers/EmployeeForm';
import ProviderFrom from './providers/ProviderForm';
import LoginForm from './auth/LoginForm';

import configureStore from '../store';
import { loadUser } from '../actions/auth';

class App extends Component {
    render(){
      const { store, persistor } = configureStore();

      return (

        <Provider store={store}>
          <PersistGate loading={null} persistor={persistor}>
            <div  className='container'>
              <Router history={history}>
                    <Header />
                    <Switch>
                        <PrivateRoute exact path='/' component={DashBoard} />
                        <Route exact path='/employees/new' component={EmployeeForm} />
                        <Route exact path='/providers/new' component={ProviderFrom} />
                        <Route exact path='/providers/:providerId/edit' component={ProviderFrom} />
                        <Route exact path='/employees/:employeeId/edit' component={EmployeeForm} />
                        <Route exact path='/login' component={LoginForm} />
                        <Route exact path='/register' component={RegisterForm} />
                    </Switch>
              </Router>
            </div>
          </PersistGate>
        </Provider>
      )
    }

}

ReactDOM.render(<App />, document.getElementById('app'));
