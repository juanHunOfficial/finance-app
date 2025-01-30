from django.db import models
from user_app.models import User

# Create your models here.
class Category(models.Model):
  name = models.CharField(max_length=255)
  allocated_funds = models.DecimalField(max_digits=10, decimal_places=2)
  total_spent = models.DecimalField(max_digits=10, decimal_places=2)
  user = models.ForeignKey(User, related_name='categories', on_delete=models.CASCADE)