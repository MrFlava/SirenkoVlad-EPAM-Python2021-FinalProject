import React, { Fragment } from 'react';

import ProviderForm from './ProviderForm';
import EmployeeForm from './EmployeeForm';
import ProvidersList from './ProvidersList';
import EmployeesList from './EmployeesList';

export default function DashBoard() {
    return (
        <Fragment>
            <ProvidersList />
            <a href='#/providers/new'>
              <button className='btn btn-primary'>
              Create Provider
              </button>
            </a>
            <EmployeesList />
            <a href='#/employees/new'>
              <button className='btn btn-primary'>
               Create Employee
              </button>
            </a>
        </Fragment>
    )
}
