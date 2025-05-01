from django.db.models import Count
from django_filters.rest_framework import DjangoFilterBackend
from rest_framework.decorators import action
from rest_framework.filters import SearchFilter
from rest_framework.response import Response
from rest_framework.viewsets import ReadOnlyModelViewSet

from .models import Product, ProductCategory, ProductAttributeValue
from .serializers import ProductSerializer, ProductCategorySerializer


class ProductViewSet(ReadOnlyModelViewSet):
    """
    ViewSet для получения данных о товарах (только GET-запросы).
    """
    queryset = (
        Product.objects
        .select_related('info', 'category')
        .prefetch_related('attributes')
        .all()
        .distinct()
    )
    serializer_class = ProductSerializer

    filter_backends = [DjangoFilterBackend, SearchFilter]
    filterset_fields = [
           'category__name',
           'attributes__value',
           # 'attributes__has_light'
        ]
    search_fields = ['name', 'sku', 'info__description']

    def retrieve(self, request, *args, **kwargs):
        try:
            return super().retrieve(request, *args, **kwargs)
        except Exception as e:
            return Response(
                {'error': str(e)},
                status=500
            )

    @action(detail=False, methods=['get'])
    def count(self, request):
        count = self.get_queryset().count()
        return Response({'count': count})

    @action(detail=False, methods=['get'], url_path='attributes')
    def attributes(self, request):
        """
        Отдаёт все атрибуты с их значениями и количеством товаров:
        [
          { "type": "Вид", "values": [ { "value": "Теневой", "count": 12 }, … ] },
          …
        ]
        """
        qs = (
            ProductAttributeValue.objects
            .values('attribute__name', 'value')
            .annotate(count=Count('product'))
            .order_by('attribute__name', 'value')
        )

        grouped: dict[str, list[dict[str, int | str]]] = {}
        for entry in qs:
            attr_type = entry['attribute__name']
            grouped.setdefault(attr_type, []).append({
                'value': entry['value'],
                'count': entry['count']
            })

        payload = [
            {'type': attr_type, 'values': vals}
            for attr_type, vals in grouped.items()
        ]
        return Response(payload)


class ProductCategoryViewSet(ReadOnlyModelViewSet):
    """
    ViewSet для получения данных о категориях (только GET-запросы).
    """
    queryset = ProductCategory.objects.all()
    serializer_class = ProductCategorySerializer