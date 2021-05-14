from rest_framework.test import APITestCase

from providers.models import Provider, Employee


class TestModel(APITestCase):

    def test_creates_provider(self):
        provider = Provider.objects.create(name='NewAge', incomes=1200, expenses=200)
        self.assertIsInstance(provider, Provider)

    def test_creates_employee(self):
        provider = Provider.objects.create(name='NewAge', incomes=1200, expenses=200)
        employee = Employee.objects.create(full_name='NewEmployee',
                                           employee_type='MAIN_SYSTEM_ADMINISTRATOR',
                                           salary=10000,
                                           provider_company=provider)

        self.assertIsInstance(provider, Provider)
        self.assertIsInstance(employee, Employee)

