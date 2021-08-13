from rest_framework.viewsets import ModelViewSet
from .serializers import ProductSerializer
from managerment_src.models import Product
from rest_framework import pagination


class ProductViewSet(ModelViewSet):
    queryset = Product.objects.all()
    serializer_class = ProductSerializer
   