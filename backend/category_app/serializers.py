from rest_framework import serializers
from .models import Category
from transaction_app.serializers import TransactionSerializer

class CategorySerializer(serializers.ModelSerializer):
  transactions = serializers.SerializerMethodsField()
  class Meta:
    model = Category
    fields = [
      'name',
      'allocated_funds',
      'total_spent',
      'transactions'
    ]
    
  def get_transactions(self, instance):
    transactions = instance.transactions.all()
    ser_transactions = TransactionSerializer(transactions, many=True)
    return ser_transactions.data