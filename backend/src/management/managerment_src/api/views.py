from rest_framework.viewsets import ModelViewSet
from .serializers import ProductSerializer
from managerment_src.models import Product

class ProductViewSet(ModelViewSet):
    queryset = Product.objects.all()
    serializer_class = ProductSerializer