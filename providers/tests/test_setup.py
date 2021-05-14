from rest_framework.test import APITestCase
from django.urls import reverse


class TestSetUp(APITestCase):

    def setUp(self):

        self.register_url = reverse('user-list')
        self.login_url = reverse('login')

        self.user_data = {'username': 'Usr', 'password': '45fddfgffds'}
        
        return super().setUp()

    def tearDown(self):
        return super().tearDown()
