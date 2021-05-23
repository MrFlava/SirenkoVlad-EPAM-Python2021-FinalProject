import React, { Fragment } from 'react';

import ProviderForm from './ProviderForm';
import EmployeeForm from './EmployeeForm';
import ProvidersList from './ProvidersList';
import EmployeesList from './EmployeesList';

export default function DashBoard() {
    return (
        <Fragment>
            <ProvidersList />
            <a href='#/providers/new'>Create Provider</a>
            <EmployeesList />
            <a href='#/employees/new'>Create Employee</a>
        </Fragment>
    )
}
