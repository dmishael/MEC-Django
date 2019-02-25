from rest_framework import serializers
from .models import Appointment, internalComment, Image

class AppointmentSerializer(serializers.ModelSerializer):
    class Meta:
        model = Appointment
        fields = ('appId', 'date', 'time', 'area', 'fee', 'name', 'eName', 'clientAddress')

class internalCommentSerializer(serializers.ModelSerializer):
    class Meta:
        model = internalComment
        fields = ("intComId", "appId", "comment")


class ImageSerializer(serializers.ModelSerializer):
    class Meta:
        model = Image
        fields = ('imgId', "appId", "image")