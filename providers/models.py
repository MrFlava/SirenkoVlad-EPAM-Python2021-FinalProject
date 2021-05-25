import enum
import datetime
from django.db import models

# Create your models here.

""""
Here we are creating database models 
First model is Provider contains the next fields:
    name - the name of the provider company;
    incomes - incomes of the provider company;
    expenses - expenses of the provider company.

    
Second model is Employee contains the next fields:
    full_name - full name of the employee;
    employee_type - the position held by the employee;
    salary - employee salary;
    provider_company - relationship with the provider company where an employee works;
    date_of_birth - the date when the employee was born.
"""


class EmployeeType(enum.Enum):
    MAIN_SYSTEM_ADMINISTRATOR = 'Main administrator'
    SYSTEM_ADMINISTRATOR = 'System administrator'
    SENIOR_NETWORK_ENGINEER = 'Senior network engineer'
    MIDDLE_NETWORK_ENGINEER = 'Middle network engineer'
    JUNIOR_NETWORK_ENGINEER = 'Junior network engineer'
    TECH_SUPPORT = 'Tech support'

    """
    Enum is a class in python for creating enumerations,
    which are a set of symbolic names (members) bound to unique, constant values.
    Here was created EmployeeType which contains the unique employee positions and also created @classmethod choices
    for the creating tuple of employee types.
    """

    @classmethod
    def choices(cls):
        return tuple((i.name, i.value) for i in cls)


class Provider(models.Model):
    name = models.CharField(max_length=250)
    incomes = models.PositiveIntegerField(default=0)
    expenses = models.PositiveIntegerField(default=0)
    objects = models.Manager()

    """
    Here were created @property for calculating
     average incomes and average expenses
    """

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
