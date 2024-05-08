from django.contrib import admin
from .models import *

# Register your models here.

admin.site.register(EmailVerification)
admin.site.register(ProjectsTemplate)
admin.site.register(Category)
admin.site.register(SubCategory)
admin.site.register(BotRecord)