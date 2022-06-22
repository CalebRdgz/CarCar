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
    "customer_name",
    "reason",
    "technician",
    "date",
    "time",
    "active"
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


@require_http_methods(["GET", "PUT", "DELETE"])
def api_service_details(request, pk):
    if request.method == "GET":
        try:
            appt = ServiceAppointment.objects.get(id=pk)
            return JsonResponse(
                appt,
                encoder=ServiceAppointmentEncoder,
                safe=False
            )
        except ServiceAppointment.DoesNotExist:
            response = JsonResponse({"message": "** hand wave ** These aren't the droids you're looking for."})
            response.status_code = 404
            return response
    elif request.method == "PUT":
        try:
            content = json.loads(request.body)
            appt = ServiceAppointment.objects.get(id=pk)
            props = [
                "customer name",
                "reason",
                "technician",
                "date",
                "time",
                "active"
                ]
            for prop in props:
                if prop in content:
                    setattr(appt, prop, content[prop])
            appt.save()
            return JsonResponse(
                appt,
                encoder=ServiceAppointmentEncoder,
                safe=False,
                )
        except ServiceAppointment.DoesNotExist:
            response = JsonResponse({"message": "** hand wave ** These aren't the droids you're looking for."})
            response.status_code = 404
            return response
    else: # DELETE
        try:
            appt = ServiceAppointment.objects.get(id=pk)
            appt.delete()
            return JsonResponse(
                appt,
                encoder=ServiceAppointmentEncoder,
                safe=False,
            )
        except ServiceAppointment.DoesNotExist:
            return JsonResponse({"message": "BOI! You deleted dat!"})
    