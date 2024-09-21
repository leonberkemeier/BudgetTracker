from django.shortcuts import render, redirect

from .forms import ExpensesForm
from django.contrib import messages
from datetime import date
from .models import *

# Create your views here.

def home(request):
    return render(request, "index.html")

def list(request):

    expenses = ExpensesItem.objects.all()
    
    context = {
        'expenses' : expenses
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
        'expense':expense
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