from rest_framework import serializers
from .models import MonthlySummary

class MonthlySummarySerializer(serializers.ModelSerializer):
  transactions = serializers.SerializerMethodField()
  class Meta:
    model = MonthlySummary
    fields = [
      'month',
      'total_earned',
      'total_spent'
    ]