# Generated by Django 4.0.3 on 2022-06-23 20:20

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('service_rest', '0004_remove_serviceappointment_active_and_more'),
    ]

    operations = [
        migrations.AlterField(
            model_name='serviceappointment',
            name='status',
            field=models.CharField(default='ACTIVE', max_length=20),
        ),
    ]
