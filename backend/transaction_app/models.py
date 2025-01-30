from django.db import models

# Create your models here.
class Transaction(models.Model):
  description = models.CharField(max_length=255)
  amount = models.DecimalField(max_digits=10, decimal_places=2)
  date = models.DateField()