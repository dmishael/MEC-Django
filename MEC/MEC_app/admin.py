# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.contrib import admin
from .models import Appointment, internalComment, Image

admin.site.register([Appointment, internalComment, Image])
