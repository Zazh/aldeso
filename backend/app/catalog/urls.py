from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .api import ProductViewSet, ProductCategoryViewSet

router = DefaultRouter()
router.register(r'products', ProductViewSet, basename='products')
router.register(r'categories', ProductCategoryViewSet, basename='categories')

urlpatterns = router.urls