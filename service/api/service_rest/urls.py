from django.urls import path
from .views import api_service_list, api_service_details

urlpatterns = [
    path('service/', api_service_list, name="api_service_list"),
    path('service/<int:pk>', api_service_details, name="api_service_detail")
]
