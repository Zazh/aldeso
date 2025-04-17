from django.db import models
from django.utils.translation import gettext_lazy as _
import random, string

class ProductCategory(models.Model):
    name = models.CharField(max_length=255, verbose_name=_("Category Name"))
    description = models.TextField(blank=True, null=True, verbose_name=_("Description"))
    created_at = models.DateTimeField(auto_now_add=True, verbose_name=_("Created At"))
    updated_at = models.DateTimeField(auto_now=True, verbose_name=_("Updated At"))

    photo = models.ImageField(
        upload_to='product_photos/',
        blank=True,
        null=True,
        verbose_name=_("Photo")
    )

    class Meta:
        verbose_name = _("Product Category")
        verbose_name_plural = _("Product Categories")

    def __str__(self):
        return self.name


class Product(models.Model):
    category = models.ForeignKey(
        ProductCategory,
        on_delete=models.CASCADE,
        related_name="products",
        verbose_name=_("Category")
    )
    name = models.CharField(max_length=255, verbose_name=_("Name"))
    sku = models.CharField(max_length=12, blank=True, verbose_name=_("SKU"))
    created_at = models.DateTimeField(auto_now_add=True, verbose_name=_("Created At"))
    updated_at = models.DateTimeField(auto_now=True, verbose_name=_("Updated At"))

    class Meta:
        unique_together = ('category', 'name')
        verbose_name = _("Product")
        verbose_name_plural = _("Products")

    def save(self, *args, **kwargs):
        if not self.sku:
            self.sku = ''.join(random.choices(string.digits, k=12))
        super().save(*args, **kwargs)

    def __str__(self):
        return f"{self.name} (SKU: {self.sku})"


class ProductInfo(models.Model):
    product = models.OneToOneField(
        'Product',
        on_delete=models.CASCADE,
        related_name='info',
        verbose_name=_("Product")
    )
    description = models.TextField(blank=True, null=True, verbose_name=_("Description"))
    photo = models.ImageField(
        upload_to='product_photos/',
        blank=True,
        null=True,
        verbose_name=_("Photo")
    )
    advantages = models.TextField(
        blank=True,
        null=True,
        verbose_name=_("Advantages (one per line)")
    )  # <-- Добавлено поле для списка преимуществ

    created_at = models.DateTimeField(auto_now_add=True, verbose_name=_("Created At"))
    updated_at = models.DateTimeField(auto_now=True, verbose_name=_("Updated At"))

    class Meta:
        verbose_name = _("Product Info")
        verbose_name_plural = _("Product Infos")

    def get_advantages_list(self):
        """Преобразует текстовое поле в список"""
        return self.advantages.strip().split('\n') if self.advantages else []

    def __str__(self):
        return f"{self.product.name} Info"


class Attribute(models.Model):
    name = models.CharField(max_length=255, verbose_name=_("Attribute Name"))
    description = models.TextField(blank=True, null=True, verbose_name=_("Description"))

    class Meta:
        verbose_name = _("Attribute")
        verbose_name_plural = _("Attributes")

    def __str__(self):
        return self.name


class ProductAttributeValue(models.Model):
    product = models.ForeignKey(
        Product,
        on_delete=models.CASCADE,
        related_name='attributes',
        verbose_name=_("Product")
    )
    attribute = models.ForeignKey(
        Attribute,
        on_delete=models.CASCADE,
        related_name='product_values',
        verbose_name=_("Attribute")
    )
    value = models.CharField(max_length=255, verbose_name=_("Value"))
    created_at = models.DateTimeField(auto_now_add=True, verbose_name=_("Created At"))
    updated_at = models.DateTimeField(auto_now=True, verbose_name=_("Updated At"))

    class Meta:
        unique_together = ('product', 'attribute')
        verbose_name = _("Product Attribute Value")
        verbose_name_plural = _("Product Attribute Values")

    def __str__(self):
        return f"{self.product.name} - {self.attribute.name}: {self.value}"