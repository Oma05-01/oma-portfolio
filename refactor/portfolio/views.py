from rest_framework import viewsets
from .models import Category, Project
from .serializers import CategorySerializer, ProjectSerializer

class CategoryViewSet(viewsets.ReadOnlyModelViewSet):
    queryset = Category.objects.prefetch_related(
        'projects__stack',
        'projects__media'
    ).order_by('order')
    serializer_class = CategorySerializer


class ProjectViewSet(viewsets.ReadOnlyModelViewSet):
    queryset = Project.objects.filter(is_published=True).prefetch_related(
        'stack',
        'media'
    )
    serializer_class = ProjectSerializer
    lookup_field = 'slug' 