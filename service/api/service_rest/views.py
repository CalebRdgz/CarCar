from django.shortcuts import render
from django.http import JsonResponse
from django.views.decorators.http import require_http_methods
import json
from common.json import ModelEncoder
from .models import ServiceAppointment, Technician, AutomobileVO

# Create your views here.


@require_http_methods(["GET", "POST"])
def api_service_list(request):
    pass



def api_service_details(request):
    pass