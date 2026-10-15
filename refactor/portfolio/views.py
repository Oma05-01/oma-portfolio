from rest_framework import viewsets
from .models import Category
from .serializers import CategorySerializer

class CategoryViewSet(viewsets.ReadOnlyModelViewSet):
    queryset = Category.objects.prefetch_related(
        'projects__stack',
        'projects__media'
    ).order_by('order')
    serializer_class = CategorySerializer