from django.urls import path

from . import views

"""
   This is endpoints for the provider app.
   
   In the first part of the endpoints, we can create,
   read, update and delete all of the provider's data.
   
   In the second part of the endpoints, we can create,
   read, update and delete all of the employee's data.
"""

urlpatterns = [
    # first part of the endpoints
    path("api/providers/", views.ProviderListView.as_view(), name="show-providers"),
    path("api/providers/create", views.ProviderCreateView.as_view(), name="create-provider"),
    path("api/providers/<int:pk>/retrieve", views.RetrieveProviderView.as_view(), name="retrieve-provider"),
    path("api/providers/<int:pk>/update", views.ProviderUpdateView.as_view(), name="update-provider"),
    path("api/providers/<int:pk>/delete", views.ProviderDeleteView.as_view(), name="delete-provider"),
    # second part of the endpoints
    path("api/employees/", views.EmployeeListView.as_view(), name="show-employees"),
    path("api/employees/create", views.EmployeeCreateView.as_view(), name="create-employee"),
    path("api/employees/<int:pk>/retrieve", views.RetrieveEmployeeView.as_view(), name="retrieve-employee"),
    path("api/employees/<int:pk>/update", views.EmployeeUpdateView.as_view(), name="update-employee"),
    path("api/employees/<int:pk>/delete", views.EmployeeDeleteView.as_view(), name="delete-employee"),
]
