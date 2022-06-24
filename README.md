# CarCar

Team:

* Person 1 - Which microservice?
* Mark Esposito - Service Microservice

## Design

## Service microservice

The service microservice uses two standalone models and one value object (VO) model. The appointment model tracks the customer name, VIN, appt date, appt time, appointment status (Active, Cancelled, Finished), and the assigned technician. The appointment model has many to one relationship with the technician model, since many appointments can have the same technician.

The technician model tracks the tech name and employee number and has a one to many relationship with 

The automobileVO model tracks automobile information from the inventory api. It tracks vin of vehicles that were/are in inventory. The VO is used to search the vin of vehicles that are for sale or were sold so it can cross reference the vin with the appointments to determine if the car was sold at the dealership and therefore eligible for the VIP service. The AutomobilesVO stays in sync with the bounded context of the inventory microservice via a poller, which updates the VO with the vehciles in inventory. Considering the limited use at a dealership, the polling method should be more than sufficient to keep the model up to date for the services microservice.

## Sales microservice

Explain your models and integration with the inventory
microservice, here.
