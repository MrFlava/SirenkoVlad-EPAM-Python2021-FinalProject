import pdb
from django.urls import reverse

from .test_setup import TestSetUp


class TestViews(TestSetUp):
    def test_user_cannot_register_with_no_data(self):
        res = self.client.post(self.register_url)
        self.assertEqual(res.status_code, 400)

    def test_user_can_register_correctly(self):
        res = self.client.post(self.register_url, self.user_data, format='json')
        self.assertEqual(res.status_code, 201)

    def test_user_cannot_login_with_no_data(self):
        res = self.client.post(self.login_url)
        self.assertEqual(res.status_code, 400)

    def test_user_can_login_correctly(self):
        self.client.post(self.register_url, self.user_data, format='json')
        res = self.client.post(self.login_url, self.user_data, format='json')
        self.assertEqual(res.status_code, 200)

    def test_user_cannot_get_providers_with_no_auth(self):
        res = self.client.get(self.providers_list_url, format='json')
        self.assertEqual(res.status_code, 401)

    def test_user_can_get_providers(self):
        self.client.post(self.register_url, self.user_data, format='json')
        login = self.client.post(self.login_url, self.user_data, format='json')
        self.assertEqual(login.status_code, 200)
        self.client.credentials(HTTP_AUTHORIZATION='Token ' + login.data['auth_token'])
        res = self.client.get(self.providers_list_url, format='json')
        self.assertEqual(res.status_code, 200)

    def test_user_cannot_create_new_provider_with_no_auth(self):
        res = self.client.post(self.providers_create_url, self.provider_data, format='json')
        self.assertEqual(res.status_code, 401)

    def test_user_can_create_new_provider(self):
        self.client.post(self.register_url, self.user_data, format='json')
        login = self.client.post(self.login_url, self.user_data, format='json')
        self.assertEqual(login.status_code, 200)
        self.client.credentials(HTTP_AUTHORIZATION='Token ' + login.data['auth_token'])
        res = self.client.post(self.providers_create_url, self.provider_data, format='json')
        self.assertEqual(res.status_code, 201)

    def test_user_can_update_provider(self):
        self.client.post(self.register_url, self.user_data, format='json')
        login = self.client.post(self.login_url, self.user_data, format='json')
        self.assertEqual(login.status_code, 200)
        self.client.credentials(HTTP_AUTHORIZATION='Token ' + login.data['auth_token'])
        new_provider = self.client.post(self.providers_create_url, self.provider_data, format='json')
        self.assertEqual(new_provider.status_code, 201)
        res = self.client.patch(reverse('update-provider', kwargs={'pk': new_provider.data.get('new_provider')['id']}),
                                self.provider_update_name_data, format='json')
        self.assertEqual(res.status_code, 200)

    def test_user_can_delete_provider(self):
        self.client.post(self.register_url, self.user_data, format='json')
        login = self.client.post(self.login_url, self.user_data, format='json')
        self.assertEqual(login.status_code, 200)
        self.client.credentials(HTTP_AUTHORIZATION='Token ' + login.data['auth_token'])
        new_provider = self.client.post(self.providers_create_url, self.provider_data, format='json')
        self.assertEqual(new_provider.status_code, 201)
        res = self.client.delete(
            reverse('delete-provider', kwargs={'pk': new_provider.data.get('new_provider')['id']}), format='json')
        self.assertEqual(res.status_code, 204)

    def test_user_cannot_get_employees_with_no_auth(self):
        res = self.client.get(self.employees_list_url, format='json')
        self.assertEqual(res.status_code, 401)

    def test_user_can_get_employees(self):
        self.client.post(self.register_url, self.user_data, format='json')
        login = self.client.post(self.login_url, self.user_data, format='json')
        self.assertEqual(login.status_code, 200)
        self.client.credentials(HTTP_AUTHORIZATION='Token ' + login.data['auth_token'])
        res = self.client.get(self.employees_list_url, format='json')
        self.assertEqual(res.status_code, 200)

    def test_user_can_create_new_employee(self):
        self.client.post(self.register_url, self.user_data, format='json')
        login = self.client.post(self.login_url, self.user_data, format='json')
        self.assertEqual(login.status_code, 200)
        self.client.credentials(HTTP_AUTHORIZATION='Token ' + login.data['auth_token'])
        new_provider = self.client.post(self.providers_create_url, self.provider_data, format='json')
        self.assertEqual(new_provider.status_code, 201)
        new_employee_data = {'full_name': 'NewEmployee',
                             'employee_type': 'MAIN_SYSTEM_ADMINISTRATOR',
                             'salary': 10000,
                             'provider_company': new_provider.data.get('new_provider')['id']}
        res = self.client.post(self.employees_create_url, new_employee_data, format='json')
        self.assertEqual(res.status_code, 201)

    def test_user_can_update_employee(self):
        self.client.post(self.register_url, self.user_data, format='json')
        login = self.client.post(self.login_url, self.user_data, format='json')
        self.assertEqual(login.status_code, 200)
        self.client.credentials(HTTP_AUTHORIZATION='Token ' + login.data['auth_token'])
        new_provider = self.client.post(self.providers_create_url, self.provider_data, format='json')
        self.assertEqual(new_provider.status_code, 201)
        new_employee_data = {'full_name': 'NewEmployee',
                             'employee_type': 'MAIN_SYSTEM_ADMINISTRATOR',
                             'salary': 10000,
                             'provider_company': new_provider.data.get('new_provider')['id']}
        new_employee = self.client.post(self.employees_create_url, new_employee_data, format='json')
        res = self.client.patch(reverse('update-employee', kwargs={'pk': new_employee.data.get('new_employee')['id']}),
                                self.employee_update_name_data, format='json')
        self.assertEqual(res.status_code, 200)

    def test_user_can_delete_employee(self):
        self.client.post(self.register_url, self.user_data, format='json')
        login = self.client.post(self.login_url, self.user_data, format='json')
        self.assertEqual(login.status_code, 200)
        self.client.credentials(HTTP_AUTHORIZATION='Token ' + login.data['auth_token'])
        new_provider = self.client.post(self.providers_create_url, self.provider_data, format='json')
        self.assertEqual(new_provider.status_code, 201)
        new_employee_data = {'full_name': 'NewEmployee',
                             'employee_type': 'MAIN_SYSTEM_ADMINISTRATOR',
                             'salary': 10000,
                             'provider_company': new_provider.data.get('new_provider')['id']}
        new_employee = self.client.post(self.employees_create_url, new_employee_data, format='json')
        res = self.client.delete(
            reverse('delete-employee', kwargs={'pk': new_employee.data.get('new_employee')['id']}), format='json')
        self.assertEqual(res.status_code, 204)
