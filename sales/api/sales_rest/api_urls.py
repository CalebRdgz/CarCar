from django.urls import path

from .views import (
    api_list_sales_person,
    api_sales_person,
    api_list_customers,
    api_customer,
    api_list_sales_record
    api_sales_record,
)

urlpatterns = [
    path("sales_person/", api_list_sales_person, name="api_list_sales_person"),
    path("sales_person/<int:pk>", api_list_sales_person, name="api_sales_person"),
    path("customer/", api_list_customers, name="api_list_customers"),
    path("customer/<int:pk>", api_customer, name="api_customer"),
    path("sales_record/", api_list_sales_record, name="api_list_sales_record"),
    path("api_sales_record/<int:pk>", api_sales_record, name="api_sales_record"),
]