from django.shortcuts import render, redirect

from .forms import ExpensesForm, PurposeForm, NetworthForm
from django.contrib import messages
from datetime import date,datetime

from .models import *

import calendar
from calendar import monthrange
from django.core import serializers
from django.http import JsonResponse
import sys
from django.db.models import Sum

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

    # pqs =Purpose.objects.values_list('purpose' ,flat= True)
    # print(pqs[0])
    n = Networth.objects.all()
    nf = netfilter(n)

    d = ExpensesItem.objects.all()
    df = datefilter(d)

    pqs = purposeList(filter='purpose')
    # print(pqs)
    eql = expenseList()
    # print(eql)
    expenses = expenses.all()
    if year is not None and month is not None:
        days = calendar.monthrange(int(year),int(month))[1]

    context = {
        'pqs' : pqs,
        'expenses' : expenses,
        'purposes':purposes,
        'month':month,
        'year':year,
        'nf':nf,
        'df':df,
        'days':days,
    }
    return render(request, 'list.html', context)

def datefilter(d):
    print(d)
    df = d.filter(date__month=8)
    print(df)
    return df

def netfilter(n):
    # print(n)
    nf = n.filter(balance=222)
    # print(nf)
    return nf

def purposeList(filter):
    lp=[]
    pqs =Purpose.objects.values_list(filter ,flat= True)
    for i in range(len(pqs)):
        lp.append(pqs[i])
    lpqs = lp
    return lpqs

def expenseList():
    el = []
    pl = purposeList(filter='purpose')
    # print(pl)

    for i in range(len(pl)):
        
        seqs =ExpensesItem.objects.filter(purpose = pl[i]).aggregate(Sum('amount')).get('amount__sum')

        # New Purpose might have no Expenses under their name: so the Value is Null
        # Reasigning the Value to zero does not fukc with the JS
        
        if seqs == None:
            seqs = 0
        # print(seqs)
        el.append(seqs)
        
    # print(el)
    return el

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



def test(request):
    pl = purposeList(filter='purpose') 
    el = expenseList()
    
    networth = Networth.objects.all()
    balance = networth[0].balance
    income = networth[0].incomeM
    assets = networth[0].assets


    context={
        'pl':pl,
        'el':el,
        'balance':balance,
        'income':income,
        'assets':assets,
        

    }
    return render(request, 'test.html', context)


def addnetworth(request):
    
    form = NetworthForm(request.POST)

    if request.method == 'POST':
        #print('printpost',request.POST)
        form = NetworthForm(request.POST)
        if form.is_valid():
            form.save()
            return redirect('/list')
 
    context = {'form' : form }
    
    return render(request, "netadd.html" ,context)


def editnetworth(request, pk):

    networth = Networth.objects.get(id=pk)
    form = NetworthForm(instance=networth)

    if request.method == 'POST':

        #print('hey', request.POST)
        form = NetworthForm(request.POST, instance=networth)
        if form.is_valid():
            form.save()
            return redirect('/list')
 
    context={
        'form':form,
        'purpose':networth,

    }
    return render(request, "netedit.html" ,context)


def tryall(request):

    context={
        
    }

    return render(request, "tryall.html", context)