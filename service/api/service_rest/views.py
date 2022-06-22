from black import Mode
from django.shortcuts import render
from django.http import JsonResponse
from django.views.decorators.http import require_http_methods
import json

from pkg_resources import require
from common.json import ModelEncoder
from .models import ServiceAppointment, Technician, AutomobileVO

# Create your views here.

class AutomobilesVOEncoder(ModelEncoder):
    model = AutomobileVO
    properties = [
        "id",
        "color",
        "year", 
        "vin"
    ]

class ServiceAppointmentEncoder(ModelEncoder):
    model = ServiceAppointment
    properties = [
    "customer name",
    "reason",
    "technician"
    ]

    encoders={
    "automobile": AutomobileVO(),
    }


class TechnicainEncoder(ModelEncoder):
    model = Technician
    properties = [
        'technician_name',
        'employee_name',
    ]


@require_http_methods(["GET", "POST"])
def api_service_list(request):
    if request.method == "GET":
        appts = ServiceAppointment.objects.all()
        return JsonResponse(
            appts,
            encoder=ServiceAppointmentEncoder,
            safe = False
        )
    else: #POST
        content = json.loads(request.body)
        appt = ServiceAppointment.objects.create(**content)
        return JsonResponse(
            appt,
            encoder=ServiceAppointmentEncoder,
            safe = False
        )


@require_http_methods(["GET", "PUT", ""])
def api_service_details(request, pk):
    