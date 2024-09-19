from django.contrib import admin

# Register your models here.
from .models import ExpensesItem

admin.site.register(ExpensesItem)