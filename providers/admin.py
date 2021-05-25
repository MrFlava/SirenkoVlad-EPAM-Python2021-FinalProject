from django.contrib import admin

from providers.models import Provider, Employee

# Register your models here.
""""
Here we are register models for the admin dashboard. This will enable the editing, creating and adding new 
data in database-models.
"""


class ProviderAdmin(admin.ModelAdmin):
    model = Provider


class EmployeeAdmin(admin.ModelAdmin):
    model = Employee


admin.site.register(Provider, ProviderAdmin)
admin.site.register(Employee, EmployeeAdmin)
