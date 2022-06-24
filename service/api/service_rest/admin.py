from django.contrib import admin

from service_rest.models import AutomobileVO, ServiceAppointment, Technician

# Register your models here.

admin.site.register(ServiceAppointment)
admin.site.register(Technician)
admin.site.register(AutomobileVO)