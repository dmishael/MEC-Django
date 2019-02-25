# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.shortcuts import render
from rest_framework import viewsets          
from .serializers import AppointmentSerializer, internalCommentSerializer, ImageSerializer
from .models import Appointment, internalComment, Image

class AppointmentView(viewsets.ModelViewSet):
    serializer_class = AppointmentSerializer
    queryset = Appointment.objects.all()    

class internalCommentView(viewsets.ModelViewSet):
    serializer_class = internalCommentSerializer
    queryset = internalComment.objects.all()  

class ImageView(viewsets.ModelViewSet):
    serializer_class = ImageSerializer
    queryset = Image.objects.all()  

