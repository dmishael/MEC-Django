from django.conf.urls import url
from django.contrib import admin
from django.urls import path, include                 
from rest_framework import routers        
from MEC_app import views 

router = routers.DefaultRouter()                    
router.register('appointments', views.AppointmentView, 'appointment')
router.register('internalComments', views.internalCommentView, 'internalComment')
router.register('images', views.ImageView, 'image')  

urlpatterns = [
    url('admin/', admin.site.urls),
    path('api/v1/', include(router.urls))
]
