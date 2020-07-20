from django.urls import path, include
from rest_framework_simplejwt import views as jwt_views
from woke import views 
from rest_framework import routers

router = routers.DefaultRouter()
router.register(r'user', views.UserViewset, basename='userviewset')


urlpatterns = [
    # Your URLs...
    path(r'', include(router.urls)),
    path('token/', jwt_views.TokenObtainPairView.as_view(), name='token_obtain_pair'),
    path('token/refresh/', jwt_views.TokenRefreshView.as_view(), name='token_refresh'),
    path('api-auth/', include('rest_framework.urls')),

]