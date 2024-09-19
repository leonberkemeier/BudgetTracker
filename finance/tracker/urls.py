from django.contrib import admin
from django.urls import path, include
from . import views



urlpatterns = [
    
    path('', views.home, name="home"),
    path('upload', views.upload, name='upload'),
    path('update_upload/<str:pk>/', views.updateupload, name='update_upload'),
    path('delete_upload/<str:pk>/', views.deleteupload, name='delete_upload'),
    path('list', views.list, name='list'),
]