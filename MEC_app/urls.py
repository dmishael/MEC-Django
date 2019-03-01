from django.conf.urls import url
from django.contrib import admin
from django.urls import path, include                 
from rest_framework import routers        
from . import views


router = routers.DefaultRouter()                    
router.register('appointments', views.AppointmentView, 'appointment')
router.register('internalComments', views.internalCommentView, 'internalComment')
router.register('images', views.ImageView, 'image')  

urlpatterns = [
    path('', include(router.urls)),
]
