from django.contrib import admin
from django.urls import path, include
from . import views



urlpatterns = [
    
    path('', views.home, name="home"),
    path('addexpense', views.addexpense, name='addexpense'),
    path('addpurpose', views.addpurpose, name='addpurpose'),
    path('edit_expense/<str:pk>/', views.editexpense, name='edit_expense'),
    path('edit_purpose/<str:pk>/', views.editpurpose, name='edit_purpose'),
    path('delete_expense/<str:pk>/', views.deleteexpense, name='delete_expense'),
    path('delete_purpose/<str:pk>/', views.deletepurpose, name='delete_purpose'),
    path('list', views.list, name='list'),

    path('test', views.test, name='test')

    
]