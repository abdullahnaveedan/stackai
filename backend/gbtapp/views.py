from django.shortcuts import render,redirect
from django.conf import settings
from django.contrib.auth.models import User
from rest_framework import status
from .serializers import *
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework.authtoken.models import Token
from django.core.mail import EmailMultiAlternatives
from django.template.loader import render_to_string
import random
from datetime import datetime, timedelta
from django.core.mail import send_mail
from .models import *
import requests
import openai


def index(request):
    bot = BotRecord.objects.get(id = "076278-IEL")
    print(bot.pub_date)
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

class AccountsLogin(APIView):
    def post(self , request):
        serializer = LoginSerializers(data=request.data)
        if serializer.is_valid():
            email = serializer.validated_data.get('email')
            password = serializer.validated_data.get('password')
            try:
                username = User.objects.get(email = email).username
                domain = "http://127.0.0.1:8000"
                api_url = f"{domain}/api-token-auth/"
                
                data = {
                    'username': username,
                    'password': password
                }
                response = requests.post(api_url, data=data)
                if response.status_code == 200:
                    api_data = response.json() 
                    return Response({'status': 201, 'token': api_data['token'], 'message': 'Success'}, status=status.HTTP_200_OK)
                else:
                    return HttpResponse("Error: Unable to fetch data from the API", status=response.status_code)
            except:
                return Response({'status': 400, 'message': 'Invalid Credentials'}, status=status.HTTP_400_BAD_REQUEST)
        return Response({'status': 400, 'errors': serializer.errors, 'message': 'Error'}, status=status.HTTP_400_BAD_REQUEST)


class ValidateEmail(APIView):
    def post(self, request):
        serializer = VerifyEmail(data=request.data)
        if serializer.is_valid():
            email = serializer.validated_data['email']
            try:
                user = User.objects.get(email=email)
                email_verification = EmailVerification.objects.filter(user=user).first()
                if email_verification:
                    email_verification.verification_code = generate_otp()
                    email_verification.save()
                else:
                    
                    otp = generate_otp() 
                    print(otp)
                    EmailVerification.objects.create(user=user, email=email, verification_code=otp)
                    
                    html_message = render_to_string('emailtemp.html', {'otp': otp})
                    email_subject = 'CustomGBT Email Verification OTP'
                    email_body = f'Your OTP for email verification is: {otp}'
                    email_message = EmailMultiAlternatives(email_subject, email_body, settings.EMAIL_HOST_USER, [email])
                    email_message.attach_alternative(html_message, 'text/html')
                    email_message.send()
                return Response({'status': 200, 'message': 'Email Sent.'}, status=status.HTTP_200_OK)
            except User.DoesNotExist:
                return Response({'status': 400, 'message': 'Email does not exist.'}, status=status.HTTP_400_BAD_REQUEST)
            except Exception as e:
                print("Exception:", e)
                return Response({'status': 500, 'message': 'Internal Server Error'}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)
        return Response({'status': 400, 'errors': serializer.errors, 'message': 'Error'}, status=status.HTTP_400_BAD_REQUEST)

class OtpVerification(APIView):
    def post(self , request):
        serializer = GetOTP(data = request.data)
        if serializer.is_valid():
            email = serializer.validated_data['email']
            otp = serializer.validated_data['verification_code']
            print(otp , email)
            return Response({'status': 200, 'message': 'Verified'}, status = status.HTTP_200_OK)
        # this is the serilizer and the function. email and otp come from DRF and validate. if time 
        # expire OTP is not validate. 
        # else
        # validate
        return Response({'status': 400, 'message': 'Invalid'}, status = status.HTTP_400_BAD_REQUEST)

class FetchCategory(APIView):
    def get(self, request):
        fetch_record = Category.objects.all().order_by('id')
        serializer = GetCategory(fetch_record, many=True)
        return Response({'status': 200, 'payload': serializer.data, 'message': 'Success'})

class FetchSubCategory(APIView):
    def get(self, request):
        try:
            id = request.query_params["id"]
            if id != None:
                sub_cat = SubCategory.objects.filter(category = id)
                serializers = fetchSubCategories(sub_cat , many = True)
            return Response({'status': 200, 'payload': serializers.data }, status=status.HTTP_200_OK)
        except:
            return Response({'status': 400, 'message': 'Invalid'}, status = status.HTTP_400_BAD_REQUEST)

class QuickBot(APIView):
    def post(self, request):
        serializer = MiniBot(data=request.data)
        if serializer.is_valid():
            gptPrompt = serializer.validated_data['gptPrompt']  
            question = serializer.validated_data['question']  
            
            # Assuming 'client' is defined elsewhere and initialized properly
            response = client.chat.completions.create(
                model="gpt-4",
                messages=[
                    {"role": "system", "content": gptPrompt},
                    {"role": "user", "content": question}
                ]
            )
            gptresponse = response.choices[0].message.content.strip()
            return Response({'status': 200, 'payload': gptresponse, 'message': 'Success'}, status=status.HTTP_200_OK)
        return Response({'status': 400, 'message': serializer.errors}, status=status.HTTP_400_BAD_REQUEST)

class SaveBot(APIView):
    def post(self , request):
        serializer = SaveBotSerializer(data = request.data)
        if serializer.is_valid():
            serializer.save()
            return Response({'status' : 200 , 'message' : "Congratulations! Your bot save sucessfully."}, status=status.HTTP_200_OK)
        return Response({'status' : 400 , 'message' :  serializer.errors}, status=status.HTTP_400_BAD_REQUEST)
    
class GetBotsSerializer(APIView):
    def get(self, request):
        try:
            username = request.query_params["username"]  # Use "username" instead of "id"
            if username is not None:  
                records = BotRecord.objects.filter(username=username)
                serializer = BotRecordSerializer(records, many=True)               
                return Response({'status': 200, 'payload': serializer.data}, status=status.HTTP_200_OK)
            else:
                return Response({'status': 400, 'message': 'Invalid username'}, status=status.HTTP_400_BAD_REQUEST)
        except Exception as e:
            return Response({'status': 400, 'message': 'Invalid request'}, status=status.HTTP_400_BAD_REQUEST)

class PreferenceQuestions(APIView):
    def post(self , request):
        serializer = UserPreference(data=request.data)
        if serializer.is_valid():
            history = serializer.validated_data.get('history')
            response = client.chat.completions.create(
                model="gpt-4",
                messages=[
                {"role": "system", "content": "You are the AI assistant and your roal is to generate question only."},
                {"role": "user", "content": history}
                ]
            )
            response = response.choices[0].message.content.strip()
            
            colon_index = response.find(":")
            if colon_index != -1:
                response = response[colon_index + 2:]
            return Response({'status': 200, 'payload' : response}, status = status.HTTP_200_OK )       
        return Response({'status': 400, 'message': 'Invalid data provided', 'errors': serializer.errors}, status=status.HTTP_400_BAD_REQUEST)

