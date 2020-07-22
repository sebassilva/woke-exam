from django.shortcuts import render
from rest_framework import viewsets, permissions
from django.contrib.auth.models import User
from woke import serializers
from rest_framework.permissions import IsAuthenticated, AllowAny, IsAdminUser
from woke.permissions import IsAdminUserOrReadOnly
 

class UserViewset(viewsets.ModelViewSet):
    queryset = User.objects.all()
    serializer_class = serializers.UserSerializer
    permission_classes = (IsAdminUserOrReadOnly,)
    
    def get_serializer_context(self):
        return {'request': self.request}
    