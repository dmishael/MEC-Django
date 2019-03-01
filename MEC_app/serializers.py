from rest_framework import serializers
from .models import Appointment, internalComment, Image

class ImageSerializer(serializers.ModelSerializer):
    

    class Meta:
        model = Image
        fields = ('imgId', "image")


class internalCommentSerializer(serializers.ModelSerializer):
    # appointments = AppointmentSerializer(many=True, read_only=True)
    class Meta:
        model = internalComment
        fields = ("intComId", "appId", "comment")

class AppointmentSerializer(serializers.ModelSerializer):
    internalComments = internalCommentSerializer(many = True, read_only=True)
    
    class Meta:
        model = Appointment
        fields = ('appId', 'date', 'time', 'area', 'fee', 'name', 'eName', 'clientAddress', 'internalComments')

