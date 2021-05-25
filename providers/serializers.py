from rest_framework import serializers

from providers.models import Provider, Employee

"""
    Serializer: Converts information stored in the database
    and defined using Django models in a format that is easily
    and efficiently passed through the API. 
    
    In this file was created ProvidersSerializer and EmployeeSerializer.
"""


class ProvidersSerializer(serializers.ModelSerializer):

    average_income = serializers.DictField(source='average_incomes', read_only=True)
    average_expense = serializers.DictField(source='average_expenses', read_only=True)

    class Meta:
        model = Provider
        fields = '__all__'


class EmployeeSerializer(serializers.ModelSerializer):

    class Meta:
        model = Employee
        fields = '__all__'
