import enum
import datetime
from django.db import models

# Create your models here.


class EmployeeType(enum.Enum):
    MAIN_SYSTEM_ADMINISTRATOR = 'Main administrator'
    SYSTEM_ADMINISTRATOR = 'System administrator'
    SENIOR_NETWORK_ENGINEER = 'Senior network engineer'
    MIDDLE_NETWORK_ENGINEER = 'Middle network engineer'
    JUNIOR_NETWORK_ENGINEER = 'Junior network engineer'
    TECH_SUPPORT = 'Tech support'

    @classmethod
    def choices(cls):
        return tuple((i.name, i.value) for i in cls)


class Provider(models.Model):
    name = models.CharField(max_length=250)
    incomes = models.PositiveIntegerField(default=0)
    expenses = models.PositiveIntegerField(default=0)
    objects = models.Manager()

    @property
    def average_incomes(self):
        return Provider.objects.aggregate(models.Avg('incomes'))

    @property
    def average_expenses(self):
        return Provider.objects.aggregate(models.Avg('expenses'))

    def __str__(self):
        return f"Provider company ({self.name})"


class Employee(models.Model):
    full_name = models.CharField(max_length=250)
    employee_type = models.CharField(max_length=250, choices=EmployeeType.choices())
    salary = models.PositiveIntegerField(default=0)
    provider_company = models.ForeignKey(Provider, on_delete=models.CASCADE)
    date_of_birth = models.DateField(default=datetime.date.today())

    objects = models.Manager()

    def __str__(self):
        return f"Employee #{self.pk} from ({self.provider_company.name})"
