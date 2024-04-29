from django.urls import path
from . import views
from django.conf.urls.static import static
from django.conf import settings
from .views import CreateAccount , FetchUserIdView , ProductModel
urlpatterns = [
    path("", views.index, name=""),
    path("accounts/signup/", CreateAccount.as_view()), #  API for register user
    path("api/fetch/id/", FetchUserIdView.as_view()), # API for Fetch user id
    path("api/product/fetch/", ProductModel.as_view()), # API for fetch products
] + static(settings.MEDIA_URL, document_root = settings.MEDIA_ROOT)
