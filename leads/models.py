from django.db import models
from django.contrib.auth.models import User


# Create your models here.
class Lead(models.Model):
    name = models.CharField(max_length=100)
    email = models.EmailField(max_length=200, unique=True)
    message = models.CharField(max_length=500)
    owner = models.ForeignKey(User, related_name="leads", on_delete=models.CASCADE, null=True)
    date = models.DateTimeField(auto_now_add=True)
