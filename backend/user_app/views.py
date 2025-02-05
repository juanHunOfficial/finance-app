from django.contrib.auth import authenticate
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework.status import HTTP_201_CREATED, HTTP_204_NO_CONTENT
from rest_framework.permissions import IsAuthenticated
from rest_framework.authentication import TokenAuthentication
from rest_framework.authtoken.models import Token
from .models import User
from category_app.serializers import CategorySerializer
from monthly_sum_app.serializers import MonthlySummarySerializer

# Create your views here.
class TokenReq(APIView):
  authentication_classes= [TokenAuthentication]
  permission_classes= [IsAuthenticated]
  
class SignUp(APIView):
  
  def post(self, request):
    data = request.data.copy()
    
    data["username"] = request.data["email"]
    new_user = User.objects.create_user(**data)
    token = Token.objects.create(user=new_user)
    return Response({'email' : new_user.email, 'token': token.key, 'id': new_user.id }, status=HTTP_201_CREATED)
  
class LogIn(APIView):
    
  def post(self, request):
    email = request.data.get("email")
    password = request.data.get("password")
    current_user = authenticate(username=email, password=password)
    if current_user:
      token, created = Token.objects.get_or_create(user=current_user)
      return Response({"token" : token.key, "email": current_user.email, 'id': current_user.id})
    else:
      return Response("None of our clients match those credentials.")
        
class Info(TokenReq):
    
  def get(self, request):
    categories = request.user.categories.all()
    categories_data = CategorySerializer(categories, many=True).data
    monthly_summaries = request.user.monthly_summary.all()
    monthly_summaries_data = MonthlySummarySerializer(monthly_summaries, many=True).data
    return Response({
      'id': request.user.id, 
      'email':request.user.email, 
      'categories': categories_data, 
      'monthly_summaries' : monthly_summaries_data
    })
    
class LogOut(TokenReq):
    
  def post(self, request):
    request.user.auth_token.delete()
    return Response(status=HTTP_204_NO_CONTENT)