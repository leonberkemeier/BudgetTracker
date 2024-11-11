from django.contrib import admin
from django.urls import path, include
from . import views



urlpatterns = [
    
    path('', views.home, name="home"),
    path('addexpense', views.addexpense, name='addexpense'),
    path('addpurpose', views.addpurpose, name='addpurpose'),
    path('addnet', views.addnetworth, name='addnetworth'),
    path('addFixedCost', views.addFixedCost, name='addFixedCost'),

    path('edit_expense/<str:pk>/', views.editexpense, name='edit_expense'),
    path('edit_purpose/<str:pk>/', views.editpurpose, name='edit_purpose'),
    path('edit_net/<str:pk>/', views.editnetworth, name='editnetworth'),
    path('editfixedcost/<str:pk>/', views.editFixedCost, name='editfixedcost'),

    

    path('delete_expense/<str:pk>/', views.deleteexpense, name='delete_expense'),
    path('delete_purpose/<str:pk>/', views.deletepurpose, name='delete_purpose'),
    path('deletefixedcost/<str:pk>/', views.deleteFixedCost, name='deletefixedcost'),

    path('list', views.list, name='list'),
    path('tracker', views.tracker, name='tracker'),
    path('test', views.test, name='test'),
    path('tryall', views.tryall, name='tryall'),
    path('balance',views.balance, name='balance'),
    path('assets',views.assets, name='assets')

    
]