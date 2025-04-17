from rest_framework.viewsets import ReadOnlyModelViewSet
from .models import Product, ProductCategory
from .serializers import ProductSerializer, ProductCategorySerializer
from rest_framework.filters import SearchFilter
from django_filters.rest_framework import DjangoFilterBackend
from rest_framework.decorators import action
from rest_framework.response import Response

class ProductViewSet(ReadOnlyModelViewSet):
    """
    ViewSet для получения данных о товарах (только GET-запросы).
    """
    queryset = Product.objects.select_related('info', 'category').prefetch_related('attributes').all()
    serializer_class = ProductSerializer

    # Добавляем фильтрацию по категории
    filter_backends = [DjangoFilterBackend, SearchFilter]
    filterset_fields = ['category__name']
    search_fields = ['name', 'sku', 'info__description']  # Поля для поиска

    @action(detail=False, methods=['get'])
    def count(self, request):
        count = self.get_queryset().count()
        return Response({'count': count})


class ProductCategoryViewSet(ReadOnlyModelViewSet):
    """
    ViewSet для получения данных о категориях (только GET-запросы).
    """
    queryset = ProductCategory.objects.all()
    serializer_class = ProductCategorySerializer