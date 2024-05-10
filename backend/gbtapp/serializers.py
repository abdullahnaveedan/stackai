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
class LoginSerializers(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ['email' , 'password']

class VerifyEmail(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ['email']

class GetOTP(serializers.ModelSerializer):
    class Meta:
        model = EmailVerification
        fields = ['verification_code' , 'email']

class GetCategory(serializers.ModelSerializer):
    class Meta:
        model = Category
        fields = '__all__'

class fetchSubCategories(serializers.Serializer):
    id = serializers.IntegerField()

class MiniBot(serializers.Serializer):
    gptPrompt = serializers.CharField()
    question = serializers.CharField()
    
class SaveBotSerializer(serializers.ModelSerializer):
    class Meta:
        model = BotRecord
        fields = ['username' , 'botname' , 'system_prompt'] 

class BotRecordSerializer(serializers.ModelSerializer):
    class Meta:
        model = BotRecord
        fields = ['id', 'username', 'botname', 'system_prompt']
class UserPreference(serializers.Serializer):
    history = serializers.CharField()