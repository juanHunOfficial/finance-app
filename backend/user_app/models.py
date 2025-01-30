from django.db import models
from django.contrib.auth.models import AbstractUser
from django.core import validators as v
from .validators import validate_password

# Create your models here.
class User(AbstractUser):
  email = models.EmailField(unique=True, verbose_name='email address')
  password = models.CharField(max_length=128, validators=[validate_password, v.MinLengthValidator(8)])
  
  USERNAME_FIELD = 'email'
  REQUIRED_FIELDS = []