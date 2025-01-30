from django.db import models
from user_app.models import User

# Create your models here.
class Transaction(models.Model):
  description = models.CharField(max_length=255)
  amount = models.DecimalField(max_digits=10, decimal_places=2)
  date = models.DateField() #template "2025-01-30"
  user = models.ForeignKey(User, related_name='transactions', on_delete=models.CASCADE)