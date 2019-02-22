# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.shortcuts import render
from rest_framework import viewsets          
from .serializers import AppointmentSerializer, internalCommentSerializer, externalCommentSerializer
from .models import Appointment, internalComment, externalComment                     

class AppointmentView(viewsets.ModelViewSet):
    serializer_class = AppointmentSerializer
    queryset = Appointment.objects.all()    


