from django.db import models

# Create your models here.


class AutomobileVO(models.Model):
    color = models.CharField(max_length=50)
    year = models.PositiveSmallIntegerField()
    vin = models.CharField(max_length=17, unique=True)


class Technician(models.Model):
    technician_name = models.CharField(max_length=50)
    employee_number = models.SmallIntegerField(unique=True)


class ServiceAppointment(models.Model):
    customer_name = models.CharField(max_length=50)
    reason = models.CharField(max_length=200)
    technician = models.ForeignKey(
        Technician,
        related_name = "technician",
        on_delete=models.PROTECT,
    )

    automobile = models.ForeignKey(
        AutomobileVO,
        related_name="automobile",
        on_delete=models.CASCADE,
    )

