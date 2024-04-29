from django.db import models
from django.contrib.auth.models import User

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

    
    