from django.urls import path
from django.urls.resolvers import URLPattern
from base.views import product_views as views
# from rest_framework_simplejwt.views import (
#     TokenObtainPairView,  
# )

from base.views import product_views as views
urlpatterns =[
   
    path('create/', views.createProduct, name="product-create"),
    path('upload/', views.uploadImage, name="image-upload"),
    path('<str:pk>/reviews/', views.createProductReview, name="create-review"),
    path('top/', views.getTopProducts, name='top-products'),
    path('',views.getProducts,name="products"),
    path('<str:pk>/',views.getProduct,name="product"),
   

    path('update/<str:pk>/', views.updateProduct, name="product-update"),
    path('delete/<str:pk>/', views.deleteProduct, name="product-delete"),

]