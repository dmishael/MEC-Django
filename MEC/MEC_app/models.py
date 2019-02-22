# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models

class Appointment(models.Model):
      appId = models.AutoField(primary_key=True)
      date = models.CharField(max_length=100)
      time = models.TimeField(max_length=100)
      area = models.CharField(max_length=100)
      fee = models.IntegerField(default=0)
      name = models.CharField(max_length=30)
      eName = models.CharField(max_length=30)

      def _str_(self):
        return self.time

class internalComment(models.Model):
      intComId = models.AutoField(primary_key=True)
      appId = models.ForeignKey(
        Appointment, on_delete=models.CASCADE, related_name="internalComments")
      comment = models.CharField(max_length=200)

      def _str_(self):
        return self.comment

class externalComment(models.Model):
      extComId = models.AutoField(primary_key=True)
      appId = models.ForeignKey(
        Appointment, on_delete=models.CASCADE, related_name="externalComments")
      comment = models.CharField(max_length=200)

      def _str_(self):
        return self.comment
        


