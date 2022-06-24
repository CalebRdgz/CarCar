from django.urls import path
from .views import api_service_list, api_service_details, api_tech_list, api_service_history

urlpatterns = [
    path('service/', api_service_list, name="api_service_list"),
    path('service/<int:pk>/', api_service_details, name="api_service_detail"),
    path('service/technician/', api_tech_list, name="api_tech_list"),
    path('service/history/<str:pk>/', api_service_history, name="api_service_history"),
]
