from django.db import models


# Create your models here.
class Lead(models.Model):
    name = models.CharField(max_length=100)
    email = models.EmailField(max_length=200, unique=True)
    message = models.CharField(max_length=500)
    date = models.DateTimeField(auto_now_add=True)
