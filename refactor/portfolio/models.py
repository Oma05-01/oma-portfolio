from django.db import models
from django.core.validators import FileExtensionValidator

class Category(models.Model):
    name = models.CharField(max_length=100)
    slug = models.SlugField(unique=True)
    order = models.PositiveIntegerField(default=0)

    class Meta:
        ordering = ['order']
        verbose_name_plural = "Categories"

    def __str__(self):
        return self.name

class Technology(models.Model):
    name = models.CharField(max_length=50, unique=True)
    
    class Meta:
        verbose_name_plural = "Technologies"

    def __str__(self):
        return self.name

class Project(models.Model):
    category = models.ForeignKey(Category, on_delete=models.SET_NULL, null=True, related_name='projects')
    title = models.CharField(max_length=200)
    slug = models.SlugField(unique=True)
    
    summary = models.TextField(blank=True, null=True)
    problem = models.TextField()
    architecture = models.TextField(blank=True, null=True)
    key_focus = models.CharField(max_length=200, blank=True, null=True)
    
    has_api = models.BooleanField(default=True)
    github_url = models.URLField(blank=True, null=True)
    live_url = models.URLField(blank=True, null=True)
    icon_name = models.CharField(max_length=50, default='Layout')
    
    stack = models.ManyToManyField(Technology, related_name='projects', blank=True)
    
    theme_config = models.JSONField(default=dict, blank=True, null=True)
    is_published = models.BooleanField(default=True)
    order = models.PositiveIntegerField(default=0)

    class Meta:
        ordering = ['order', '-id']

    def __str__(self):
        return self.title

class ProjectMedia(models.Model):
    project = models.ForeignKey(Project, on_delete=models.CASCADE, related_name='media')
    title = models.CharField(max_length=150)
    description = models.TextField(blank=True, null=True)
    
    file = models.FileField(
        upload_to='project_media/', 
        validators=[FileExtensionValidator(allowed_extensions=['jpg', 'jpeg', 'png', 'webp', 'pdf'])]
    )
    is_pdf = models.BooleanField(default=False)
    order = models.PositiveIntegerField(default=0)

    class Meta:
        ordering = ['order']

    def __str__(self):
        return f"{self.project.title} - {self.title}"