from rest_framework import serializers


from providers.models import Provider, Employee


class ProvidersSerializer(serializers.ModelSerializer):

    class Meta:
        model = Provider
        fields = '__all__'


class EmployeeSerializer(serializers.ModelSerializer):

    class Meta:
        model = Employee
        fields = '__all__'
