from django.contrib import admin
from .models import (
    ProductCategory,
    Product,
    ProductInfo,
    Attribute,
    ProductAttributeValue,
)

@admin.register(ProductCategory)
class ProductCategoryAdmin(admin.ModelAdmin):
    list_display = ('name', 'created_at')
    search_fields = ('name',)


class ProductInfoInline(admin.StackedInline):
    model = ProductInfo
    extra = 0


class ProductAttributeValueInline(admin.TabularInline):
    model = ProductAttributeValue
    extra = 0


@admin.register(Product)
class ProductAdmin(admin.ModelAdmin):
    list_display = ('name', 'sku', 'category', 'created_at')
    search_fields = ('name', 'sku')
    list_filter = ('category',)
    inlines = [ProductInfoInline, ProductAttributeValueInline]


@admin.register(ProductInfo)
class ProductInfoAdmin(admin.ModelAdmin):
    list_display = ('product', 'created_at')
    search_fields = ('product__name', 'product__sku')
    fieldsets = (
        (None, {
            'fields': ('product', 'description', 'photo')
        }),
        ("Advantages", {
            'fields': ('advantages',),  # Поле для преимуществ
            'description': 'Введите преимущества по одному на строку.'
        }),
    )


@admin.register(Attribute)
class AttributeAdmin(admin.ModelAdmin):
    list_display = ('name',)
    search_fields = ('name',)


@admin.register(ProductAttributeValue)
class ProductAttributeValueAdmin(admin.ModelAdmin):
    list_display = ('product', 'attribute', 'value', 'created_at')
    search_fields = ('product__name', 'attribute__name', 'value')