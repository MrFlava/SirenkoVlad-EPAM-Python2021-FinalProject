from rest_framework import serializers

from providers.models import Provider, Employee


class ProvidersSerializer(serializers.ModelSerializer):

    class Meta:
        model = Provider
        fields = '__all__'
