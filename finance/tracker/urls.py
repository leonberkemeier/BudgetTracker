from django.contrib import admin
from django.urls import path, include
from . import views



urlpatterns = [
    
    path('', views.home, name="home"),
    path('addexpense', views.addexpense, name='addexpense'),
    path('edit_expense/<str:pk>/', views.editexpense, name='edit_expense'),
    path('delete_expense/<str:pk>/', views.deleteexpense, name='delete_expense'),
    path('list', views.list, name='list'),
]