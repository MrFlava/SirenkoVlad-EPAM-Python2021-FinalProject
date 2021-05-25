from rest_framework.permissions import IsAuthenticated
from rest_framework.filters import SearchFilter, OrderingFilter
from rest_framework.generics import CreateAPIView, ListAPIView, UpdateAPIView, DestroyAPIView, RetrieveAPIView

from .models import Provider, Employee
from .serializers import ProvidersSerializer, EmployeeSerializer

"""
 View (ViewSet): defines the functions
 (read, create, update, delete) that are available through the API. 
 
 All of these views are protected by the permission_classes. 
 If the user doesn't authenticate he will not be able to use these views.
   
"""


class ProviderListView(ListAPIView):
    queryset = Provider.objects.all()
    serializer_class = ProvidersSerializer
    permission_classes = [IsAuthenticated]


class RetrieveProviderView(RetrieveAPIView):
    queryset = Provider.objects.all()
    serializer_class = ProvidersSerializer
    permission_classes = [IsAuthenticated]


class ProviderCreateView(CreateAPIView):
    queryset = Provider.objects.all()
    serializer_class = ProvidersSerializer
    permission_classes = [IsAuthenticated]


class ProviderUpdateView(UpdateAPIView):
    queryset = Provider.objects.all()
    serializer_class = ProvidersSerializer
    permission_classes = [IsAuthenticated]


class ProviderDeleteView(DestroyAPIView):
    queryset = Provider.objects.all()
    serializer_class = ProvidersSerializer
    permission_classes = [IsAuthenticated]


class EmployeeListView(ListAPIView):
    queryset = Employee.objects.all()
    serializer_class = EmployeeSerializer
    permission_classes = [IsAuthenticated]
    filter_backends = [SearchFilter, OrderingFilter]
    search_fields = ['full_name', 'salary']


class RetrieveEmployeeView(RetrieveAPIView):
    queryset = Employee.objects.all()
    serializer_class = EmployeeSerializer
    permission_classes = [IsAuthenticated]


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
