from django.shortcuts import render, redirect

from .forms import ExpensesForm, PurposeForm
from django.contrib import messages
from datetime import date,datetime

from .models import *

from django.core import serializers
from django.http import JsonResponse
import sys

import json
# Create your views here.

def home(request):
    
    return render(request, "index.html")

def list(request):

    current_year = datetime.now().year
    current_month = datetime.now().month
    expenses = ExpensesItem.objects
    purposes = Purpose.objects
  
    year = request.GET.get('year', current_year)
    month = request.GET.get('month', current_month)

    if year is not None and year != '':
        expenses = expenses.filter(date__year=year)
    
    if month is not None and month != '':
        expenses = expenses.filter(date__month =month)

    
    
    expenses = expenses.all()

    context = {
        'expenses' : expenses,
        'purposes':purposes,
        'month':month,
        'year':year
    }
    return render(request, 'list.html', context)



def addexpense(request):
    
    form = ExpensesForm(request.POST)

    if request.method == 'POST':
        #print('printpost',request.POST)
        form = ExpensesForm(request.POST)
        if form.is_valid():
            form.save()
            return redirect('/list')
 
    context = {'form' : form }
    
    return render(request, "expenseadd.html" ,context)




def editexpense(request, pk):

    expense = ExpensesItem.objects.get(id=pk)
    form = ExpensesForm(instance=expense)

    if request.method == 'POST':

        #print('hey', request.POST)
        form = ExpensesForm(request.POST, instance=expense)
        if form.is_valid():
            form.save()
            return redirect('/list')
 
    context={
        'form':form,
        'expense':expense,

    }
    return render(request, "expensesedit.html" ,context)


def deleteexpense(request, pk):

    expense = ExpensesItem.objects.get(id=pk)
    form = ExpensesForm(instance=expense)

    if request.method == 'POST':

        expense.delete()
        return redirect('/list')
 
    context={
        'form':form,
        'expense':expense
    }
    return render(request, "expensedelete.html" ,context)



def addpurpose(request):
    
    form = PurposeForm(request.POST)

    if request.method == 'POST':
        #print('printpost',request.POST)
        form = PurposeForm(request.POST)
        if form.is_valid():
            form.save()
            return redirect('/list')
 
    context = {'form' : form }
    
    return render(request, "purposeadd.html" ,context)


def editpurpose(request, pk):

    purpose = Purpose.objects.get(id=pk)
    form = PurposeForm(instance=purpose)

    if request.method == 'POST':

        #print('hey', request.POST)
        form = PurposeForm(request.POST, instance=purpose)
        if form.is_valid():
            form.save()
            return redirect('/list')
 
    context={
        'form':form,
        'purpose':purpose,

    }
    return render(request, "purposeedit.html" ,context)

def deletepurpose(request, pk):

    purpose = Purpose.objects.get(id=pk)
    form = PurposeForm(instance=purpose)

    if request.method == 'POST':

        purpose.delete()
        return redirect('/list')
 
    context={
        'form':form,
        'purpose':purpose
    }
    return render(request, "purposedelete.html" ,context)