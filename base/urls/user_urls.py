from django.urls import path
from django.urls.resolvers import URLPattern
from base.views import user_views as views
# from rest_framework_simplejwt.views import (
#     TokenObtainPairView,  
# )
urlpatterns =[
    path('login/',views.MyTokenObtainPairView.as_view(), 
          name='token_obtain_pair'),
    # path('',views.getRoutes,name="routes"),
    path('register/',views.registerUser,name="register"),


    path('profile/',views.getUserProfile,name="users-profile"),
    path('profile/update/',views.updateUserProfile,name="user-profile-update"),

    path('',views.getUsers,name="users"),
    
    path('<str:pk>/', views.getUserById, name='user'),

]