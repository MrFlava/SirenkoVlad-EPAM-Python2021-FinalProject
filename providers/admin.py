from django.contrib import admin

from providers.models import Provider, Employee

# Register your models here.


class ProviderAdmin(admin.ModelAdmin):
    model = Provider


class EmployeeAdmin(admin.ModelAdmin):
    model = Employee


admin.site.register(Provider, ProviderAdmin)
admin.site.register(Employee, EmployeeAdmin)
