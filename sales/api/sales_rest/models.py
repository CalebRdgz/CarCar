from django.db import models
from django.urls import reverse
# Create your models here.
class AutomobileVO(models.Model):
    vin = models.CharField(max_length=17, unique=True)

    def __str__(self):
        return self.vin

class SalesPerson(models.Model):
    salesPerson = models.CharField(max_length=100)
    employeeNumber = models.CharField(max_length=50, null=True)
    def __str__(self):
        return self.salesPerson

class PotentialCustomer(models.Model):
    customerName = models.CharField(max_length=150)
    address = models.CharField(max_length=150, null=True, blank=False)
    phoneNumber = models.CharField(max_length=30, null=True, blank=False)
    salesPerson = models.ForeignKey(SalesPerson, related_name="+", on_delete=models.PROTECT)
    def __str__(self):
        return self.customerName

class SalesRecord(models.Model):
    automobile = models.ForeignKey(AutomobileVO, related_name="records", on_delete=models.PROTECT)
    salesPerson = models.ForeignKey(SalesPerson, related_name="records", on_delete=models.PROTECT)
    customer = models.ForeignKey(PotentialCustomer, related_name="records", on_delete=models.PROTECT)
    price = models.CharField(max_length=100, null=True, blank=False)