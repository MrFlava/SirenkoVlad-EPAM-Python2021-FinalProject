from django.db import models
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework.permissions import IsAuthenticated
from rest_framework.status import HTTP_400_BAD_REQUEST
from rest_framework.filters import SearchFilter, OrderingFilter
from rest_framework.generics import CreateAPIView, ListAPIView, UpdateAPIView, DestroyAPIView, get_object_or_404

from .models import Provider, Employee
from .serializers import ProvidersSerializer, EmployeeSerializer


class ProviderView(APIView):

    def get(self, request):
        providers = Provider.objects.all()
        average_income = Provider.objects.aggregate(models.Avg('incomes'))
        average_expense = Provider.objects.aggregate(models.Avg('expenses'))
        serializer = ProvidersSerializer(providers, many=True)
        return Response({"average_incomes": average_income.get('incomes__avg'),
                         "average_expenses": average_expense.get('expenses__avg'),
                         "providers": serializer.data})

    def post(self, request):
        provider = request.data
        serializer = ProvidersSerializer(data=provider)
        if serializer.is_valid(raise_exception=True):
            provider_saved = serializer.save()
            return Response({"success": f"Provider '{provider_saved.name}' created successfully"})

    def patch(self, request, pk):
        provider = get_object_or_404(Provider.objects.all(), pk=pk)
        serializer = ProvidersSerializer(provider, data=request.data, partial=True)
        if serializer.is_valid():
            serializer.save()
            return Response({"success": f"Provider  with id `{pk}` changed successfully"})

        return Response(status=HTTP_400_BAD_REQUEST)

    def delte(self, request, pk):
        article = get_object_or_404(Provider.objects.all(), pk=pk)
        article.delete()
        return Response({
            "message": f"Provider with id `{pk}` has been deleted."
        }, status=204)


class EmployeeListView(ListAPIView):
    queryset = Employee.objects.all()
    serializer_class = EmployeeSerializer
    permission_classes = [IsAuthenticated]
    filter_backends = [SearchFilter, OrderingFilter]
    search_fields = ['full_name', 'salary']


class EmployeeCreateView(CreateAPIView):
    queryset = Employee.objects.all()
    serializer_class = EmployeeSerializer
    permission_classes = [IsAuthenticated]


class EmployeeUpdateView(UpdateAPIView):
    queryset = Employee.objects.all()
    serializer_class = EmployeeSerializer
    permission_classes = [IsAuthenticated]


class EmployeeDeleteView(DestroyAPIView):
    queryset = Employee.objects.all()
    serializer_class = EmployeeSerializer
    permission_classes = [IsAuthenticated]
