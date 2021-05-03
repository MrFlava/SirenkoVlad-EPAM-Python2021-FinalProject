from rest_framework.permissions import IsAuthenticated
from rest_framework.generics import CreateAPIView, ListAPIView, UpdateAPIView, DestroyAPIView
from rest_framework.filters import SearchFilter, OrderingFilter

from .serializers import ProvidersSerializer
from .models import Provider


class ProviderCreateView(CreateAPIView):
    queryset = Provider.objects.all()
    serializer_class = ProvidersSerializer
    permission_classes = [IsAuthenticated]


class ProviderListView(ListAPIView):
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

