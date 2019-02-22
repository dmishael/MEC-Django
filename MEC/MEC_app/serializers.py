from rest_framework import serializers
from .models import Appointment, internalComment, externalComment

class AppointmentSerializer(serializers.ModelSerializer):
    class Meta:
        model = Appointment
        fields = ('appId', 'date', 'time', 'area', 'fee', 'name', 'eName')

class internalCommentSerializer(serializers.ModelSerializer):
    class Meta:
        model = internalComment
        fields = ("intComId", "appId", "comment")


class externalCommentSerializer(serializers.ModelSerializer):
    class Meta:
        model = externalComment
        fields = ('extComId', 'comments', 'imgUrl', 'title','siteLink', 'postId', 'content')