from rest_framework import serializers
from .models import Product, ProductInfo, ProductAttributeValue, ProductCategory
from django.conf import settings


class ProductInfoSerializer(serializers.ModelSerializer):
    advantages = serializers.SerializerMethodField()
    photo = serializers.SerializerMethodField()

    class Meta:
        model = ProductInfo
        fields = ['description', 'photo', 'advantages']

    def get_advantages(self, obj):
        return obj.get_advantages_list()

    def get_photo(self, obj):
        request = self.context.get('request')
        if obj.photo:
            return f"{settings.MEDIA_BASE_URL}{obj.photo.url}"
        return None

class AttributeSerializer(serializers.ModelSerializer):
    attribute_name = serializers.CharField(source='attribute.name')

    class Meta:
        model = ProductAttributeValue
        fields = ['attribute_name', 'value']


class ProductSerializer(serializers.ModelSerializer):
    category_name = serializers.CharField(source='category.name')
    info = ProductInfoSerializer()
    attributes = AttributeSerializer(many=True)

    class Meta:
        model = Product
        fields = ['id', 'name', 'sku', 'category_id', 'category_name', 'info', 'attributes']


class ProductCategorySerializer(serializers.ModelSerializer):
    photo = serializers.SerializerMethodField()
    count = serializers.IntegerField(source='products.count', read_only=True)


    class Meta:
        model = ProductCategory
        fields = ['id', 'name', 'photo', 'description', 'count']

    def get_photo(self, obj):
        request = self.context.get('request')
        if obj.photo:
            return f"{settings.MEDIA_BASE_URL}{obj.photo.url}"
        return None