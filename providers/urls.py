from django.urls import path

from . import views

urlpatterns = [
    path("api/providers/", views.ProviderListView.as_view(), name="show-providers"),
    path("api/providers/create", views.ProviderCreateView.as_view(), name="create-provider"),
    path("api/providers/<int:pk>/update", views.ProviderUpdateView.as_view(), name="update-provider"),
    path("api/providers/<int:pk>/delete", views.ProviderDeleteView.as_view(), name="delete-provider"),

    path("api/employees/", views.EmployeeListView.as_view(), name="show-employees"),
    path("api/employees/create", views.EmployeeCreateView.as_view(), name="create-employee"),
    path("api/employees/<int:pk>/update", views.EmployeeUpdateView.as_view(), name="update-employee"),
    path("api/employees/<int:pk>/delete", views.EmployeeDeleteView.as_view(), name="delete-employee"),
]
