#Hello!

###This is the simple CRUD application for a Provider company. It contains a Back-End, and a Font-End parts.

#Stack of technologies
### The Back-End part was developed with Django REST Framework and PostgreSQL for a database.
### The Front-End part was developed with React and Redux.

#Task description: 
Display a list of providers and the average income and expenses (calculated automatically) for these providers
Display a list of employees in providers with the salary for each employee, and a search field for finding employees, with a specific salary or by name
change (add / edit / delete) the above data .

#API Endpoints:
    1. Providers
        1. [GET] providers/  - To view all providers
        2. [POST] providers/create  - To create a new provider
        3. [PATCH] providers/<int:pk>/update  - To edit a provider
        4. [DELETE] providers/<int:pk>/delete  - To delete a provider
    2. Employees
        1. [GET] employees/  - To view and search employees
        2. [POST] employees/create  - To create a new employee
        3. [PATCH] employees/<int:pk>/update  - To edit an employee
        4. [DELETE] employees/<int:pk>/delete  - To delete an employee
    

#Installing and testing on a local machine:

    1. Clone the repository with git clone.
    2.Create maun/local_settings.pyand write the DB settings and token.
    3. Apply migrations by typing in terminal python manage.py migrate.
    4. Enter into terminal python npm run dev.
    5. Enter into terminal python manage.py runserver.
    6. Create a user and login with Djoser.

