from django.contrib import admin
from django.urls import path, include                        
from .views import FrontendAppView

urlpatterns = [
    path('admin/', admin.site.urls),
    path('', FrontendAppView.as_view()),
    path('api/v1/', include('MEC_app.urls')),
]