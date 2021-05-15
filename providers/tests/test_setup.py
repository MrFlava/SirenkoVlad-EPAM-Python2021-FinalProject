from rest_framework.test import APITestCase
from django.urls import reverse


class TestSetUp(APITestCase):

    def setUp(self):

        self.register_url = reverse('user-list')
        self.login_url = reverse('login')

        self.providers_list_url = reverse('show-providers')
        self.providers_create_url = reverse('create-provider')

        self.employees_list_url = reverse('show-employees')
        self.employees_create_url = reverse('create-employee')

        self.user_data = {'username': 'Usr', 'password': '45fddfgffds'}
        self.provider_data = {'name': 'NewAge', 'incomes': 1200, 'expense': 200}
        self.provider_update_name_data = {'name': 'NewAge&Co.'}

        self.employee_update_name_data = {'full_name': 'Andrew'}

        return super().setUp()

    def tearDown(self):
        return super().tearDown()
