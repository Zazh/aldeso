from .models import Product
from django.shortcuts import get_object_or_404

def get_product_detail(product_id: int) -> Product:
    return get_object_or_404(
        Product.objects.select_related('category', 'info')
        .prefetch_related('attributes__attribute', 'info__advantages'),
        id=product_id
    )

def list_all_products():
    return Product.objects.select_related('category').all()

def list_products_by_category(category_id: int):
    return Product.objects.filter(category_id=category_id).select_related('info')