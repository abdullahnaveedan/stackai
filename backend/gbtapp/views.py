from django.shortcuts import render,redirect
from django.conf import settings
from django.contrib.auth.models import User
from rest_framework import status
from .serializers import *
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework.authtoken.models import Token
import random
from datetime import datetime, timedelta
from django.core.mail import send_mail
from .models import *

def index(request):
    return render(request , "index.html")
class CreateAccount(APIView):
    def post(self, request):
        serializer = UserSerilizer(data=request.data)
        if serializer.is_valid():
            username = serializer.validated_data.get('username')
            email = serializer.validated_data.get('email')
            password = serializer.validated_data.get('password')
            try:
                existing_user = User.objects.get(email=email)
                return Response({'status': 400, 'message': 'Authentication failed. Update your email'}, status=status.HTTP_400_BAD_REQUEST)
            except User.DoesNotExist:
                user = User.objects.create_user(username=username, email=email, password=password)
                token, _ = Token.objects.get_or_create(user=user)
                return Response({'status': 201, 'message': 'User created successfully', 'token': token.key}, status = status.HTTP_201_CREATED )       
            return Response({'status': 400, 'message': 'Invalid data provided', 'errors': serializer.errors}, status=status.HTTP_400_BAD_REQUEST)

class FetchUserIdView(APIView):
    def post(self, request):
        serializer = UserIdSerializer(data=request.data)
        if serializer.is_valid():
            user_id = serializer.validated_data['username']
            return Response({'user_id': user_id})
        return Response(serializer.errors, status=400)

def generate_otp():
    return str(random.randint(100000, 999999))

def send_otp(email, otp):
    message = f'Your OTP for email verification is: {otp}'
    send_mail('Email Verification OTP', message, settings.EMAIL_HOST_USER, [email])

def verify_otp(email, otp):
    verification = EmailVerification.objects.filter(email=email).first()
    if verification and verification.otp == otp and verification.created_at > datetime.now() - timedelta(minutes=5):
        verification.is_verified = True
        verification.save()
        return True
    return False

class ProductModel(APIView):
    def get(self, request):
        fetch_record = ProjectsTemplate.objects.all().order_by('id')
        serializer = TemplateSerializer(fetch_record, many=True)
        return Response({'status': 200, 'payload': serializer.data, 'message': 'Success'})

    def post(self, request):
        serializer = TemplateSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response({'status': 201, 'payload': serializer.data, 'message': 'Created'}, status=status.HTTP_201_CREATED)
        return Response({'status': 400, 'errors': serializer.errors, 'message': 'Error'}, status=status.HTTP_400_BAD_REQUEST)