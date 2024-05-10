from django.db import models
from django.contrib.auth.models import User
from django.utils import timezone
import random
import string
# Create your models here.

class EmailVerification(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE)
    email = models.EmailField(unique=True)
    verification_code = models.CharField(max_length=6)
    is_verified = models.BooleanField(default=False)
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f'{self.email} - Verified: {self.is_verified}'
class ProjectsTemplate(models.Model):
    FREE = 'free'
    PAID = 'paid'
    STATUS_CHOICES = [
        (FREE, 'Free'),
        (PAID, 'Paid'),
    ]
    title = models.CharField(max_length=50 , default = None )
    description = models.TextField(default = None)
    svg = models.TextField(default = None)
    use_case = models.CharField(max_length=50 , default = None)
    status = models.CharField(max_length=10, choices=STATUS_CHOICES, default=FREE)

    def __str__(self):
        return f"{self.id} - {self.title}"
        
class Category(models.Model):
    name = models.CharField(max_length=100)
    svg = models.TextField(blank=True, null=True)

    def __str__(self):
        return self.name


class SubCategory(models.Model):
    category = models.ForeignKey(Category, on_delete=models.CASCADE)
    sub_catagory = models.CharField(max_length=100, default = None )
    svg = models.TextField(blank=True, null=True)
    def __str__(self):
        return f"{self.category.name} - {self.pk}"

def generate_unique_id():
    numeric_part = ''.join(random.choices(string.digits, k=6))
    alphabet_part = ''.join(random.choices(string.ascii_uppercase, k=3))
    unique_id = f'{numeric_part}-{alphabet_part}'
    return unique_id

class BotRecord(models.Model):
    id = models.CharField(max_length=10, primary_key=True, default=generate_unique_id)
    username = models.ForeignKey(User, on_delete=models.CASCADE , default = None)
    botname = models.CharField(max_length=50 , default = None)
    system_prompt = models.TextField()
    pub_date = models.DateTimeField(auto_now_add=True)
    def __str__(self):
        return self.id