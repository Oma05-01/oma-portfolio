from rest_framework import serializers
from .models import Category, Technology, Project, ProjectMedia

class ProjectMediaSerializer(serializers.ModelSerializer):
    image = serializers.FileField(source='file') 
    isPdf = serializers.BooleanField(source='is_pdf')

    class Meta:
        model = ProjectMedia
        fields = ['title', 'description', 'image', 'isPdf']


class ProjectSerializer(serializers.ModelSerializer):
    stack = serializers.SlugRelatedField(many=True, read_only=True, slug_field='name')
    screenshots = ProjectMediaSerializer(source='media', many=True, read_only=True)
    theme = serializers.JSONField(source='theme_config')
    
    hasApi = serializers.BooleanField(source='has_api')
    keyFocus = serializers.CharField(source='key_focus')
    github = serializers.URLField(source='github_url')
    liveUrl = serializers.URLField(source='live_url')
    icon = serializers.CharField(source='icon_name')

    class Meta:
        model = Project
        fields = [
            'title', 'slug', 'summary', 'problem', 'architecture', 
            'hasApi', 'keyFocus', 'github', 'liveUrl', 'icon', 
            'stack', 'theme', 'screenshots'
        ]


class CategorySerializer(serializers.ModelSerializer):
    projects = serializers.SerializerMethodField()

    class Meta:
        model = Category
        fields = ['id', 'name', 'slug', 'projects']

    def get_projects(self, obj):
        # Only return published projects
        published_projects = obj.projects.filter(is_published=True)
        # Passed context=self.context to ensure absolute media URLs are generated
        return ProjectSerializer(published_projects, many=True, context=self.context).data