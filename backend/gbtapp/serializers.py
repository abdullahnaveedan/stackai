from rest_framework import serializers
from django.contrib.auth.models import User
from .models import *
class UserSerilizer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ['username' , 'email' , 'password']
class UserIdSerializer(serializers.Serializer):
    username = serializers.CharField(max_length=150)
    def validate_username(self, value):
        try:
            user = User.objects.get(username=value)
            return user.id
        except User.DoesNotExist:
            raise serializers.ValidationError("User with this username does not exist.")

class TemplateSerializer(serializers.ModelSerializer):
    class Meta:
        model = ProjectsTemplate
        fields = '__all__'