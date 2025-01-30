from django.db import models
from user_app.models import User

# Create your models here.
class MonthlySummary(models.Model):
  month = models.CharField(max_length=3)
  total_earned = models.DecimalField(max_digits=10, decimal_places=2, default=0)
  total_spent = models.DecimalField(max_digits=10, decimal_places=2, default=0)
  user = models.ForeignKey(User, related_name='monthly_summary', on_delete=models.CASCADE)
  
  # category_totals = models.JSONField(default=dict)