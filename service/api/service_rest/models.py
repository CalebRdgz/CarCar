from django.db import models

# Create your models here.


class AutomobileVO(models.Model):
    color = models.CharField(max_length=50)
    year = models.PositiveSmallIntegerField()
    vin = models.CharField(max_length=17, unique=True)

    def __str__(self):
        return self.vin


class Technician(models.Model):
    technician_name = models.CharField(max_length=50)
    employee_number = models.SmallIntegerField(unique=True)
    
    def __str__(self):
        return self.technician_name


class ServiceAppointment(models.Model):
    customer_name = models.CharField(max_length=50)
    reason = models.CharField(max_length=200)
    date = models.DateField(null=True)
    time = models.TimeField(null=True)
    status = models.CharField(
        max_length=20,
        default="ACTIVE",
        )
    vin = models.CharField(max_length=17)
    technician = models.ForeignKey(
        Technician,
        related_name = "technician",
        on_delete=models.PROTECT,
    )
    
    def __str__(self):
        return self.customer_name + ", " + self.vin