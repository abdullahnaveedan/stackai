from django.urls import path
from . import views
from django.conf.urls.static import static
from django.conf import settings
from .views import CreateAccount , QuickBot , PreferenceQuestions ,GetBotsSerializer , SaveBot , FetchSubCategory, FetchCategory , FetchUserIdView , ProductModel , AccountsLogin , ValidateEmail , OtpVerification
urlpatterns = [
    path("", views.index, name=""),
    path("accounts/login/", AccountsLogin.as_view()), # API for Login
    path("accounts/signup/", CreateAccount.as_view()), #  API for register user
    path("api/fetch/id/", FetchUserIdView.as_view()), # API for Fetch user id
    path("api/product/fetch/", ProductModel.as_view()), # API for fetch products
    path("api/email/verify/", ValidateEmail.as_view()), # API for Email Verification
    path("api/validate/otp/", OtpVerification.as_view()), # API for OTP Verification
    path("api/get/allcatagory/", FetchCategory.as_view()),
    path("api/fetch/subcategory/", FetchSubCategory.as_view()),
    path("api/bot/quick/", QuickBot.as_view()),
    path("api/save/botRecords/", SaveBot.as_view()),
    path("api/user/getBots", GetBotsSerializer.as_view()),
    path("api/user/preference/", PreferenceQuestions.as_view(), name=""),
] + static(settings.MEDIA_URL, document_root = settings.MEDIA_ROOT)