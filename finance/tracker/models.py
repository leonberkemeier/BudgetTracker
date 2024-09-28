from django.db import models
from datetime import date

# Create your models here.

class ExpensesItem(models.Model):
    
    
    amount = models.FloatField(null=True)
    purpose = models.CharField(max_length=100, null=True) 
    date = models.DateField(null=True, blank=True)
    date_created = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return (str(self.amount) +" "+self.purpose +" "+ str(self.date))
    

class Purpose(models.Model):
    purpose = models.CharField(max_length=100, null=True)
    date_created = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return (self.purpose +" "+ str(self.id))