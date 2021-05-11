from django.urls import path

from . import views

urlpatterns = [
    path("providers/", views.ProviderListView.as_view(), name="show-providers"),
    path("providers/create", views.ProviderCreateView.as_view(), name="create-provider"),
    path("providers/<int:pk>/update", views.ProviderUpdateView.as_view(), name="update-provider"),
    path("providers/<int:pk>/delete", views.ProviderDeleteView.as_view(), name="update-provider"),

    path("employees/", views.EmployeeListView.as_view(), name="show-employees"),
    path("employees/create", views.EmployeeCreateView.as_view(), name="create-employee"),
    path("employees/<int:pk>/update", views.EmployeeUpdateView.as_view(), name="update-employee"),
    path("employees/<int:pk>/delete", views.EmployeeDeleteView.as_view(), name="delete-employee"),
]
