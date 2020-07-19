from django.urls import path
from rest_framework_simplejwt import views as jwt_views
from woke import views 

urlpatterns = [
    # Your URLs...
    path('user/', UserView),
    path('token/', jwt_views.TokenObtainPairView.as_view(), name='token_obtain_pair'),
    path('token/refresh/', jwt_views.TokenRefreshView.as_view(), name='token_refresh'),
]