from django.db import models
from datetime import date

# Create your models here.

class ExpensesItem(models.Model):
    PURPOSE={
        ('A', 'a'),
        ('B', 'b')
    }

    amount = models.FloatField(null=True)
    purpose = models.CharField(max_length=100, null=True, choices=PURPOSE) 
    date = models.DateField(null=True, blank=True)
    date_created = models.DateTimeField(auto_now_add=True)
