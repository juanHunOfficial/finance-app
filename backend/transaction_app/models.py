from django.db import models
from category_app.models import Category

# Create your models here.
class Transaction(models.Model):
  description = models.CharField(max_length=255)
  amount = models.DecimalField(max_digits=10, decimal_places=2)
  date = models.DateField() #template "2025-01-30"
  category = models.ForeignKey(Category, related_name='transactions', on_delete=models.CASCADE)