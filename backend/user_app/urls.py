from django.urls import path
from .views import SignUp, LogOut, LogIn, Info

urlpatterns = [
    path('signup/', SignUp.as_view(), name='signup'),
    path('logout/', LogOut.as_view(), name='logout'),
    path('login/', LogIn.as_view(), name='login'),
    path('info/', Info.as_view(), name='info'),
]