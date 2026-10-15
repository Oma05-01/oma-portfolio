from django.contrib import admin
from .models import Category, Technology, Project, ProjectMedia

@admin.register(Category)
class CategoryAdmin(admin.ModelAdmin):
    list_display = ('name', 'order')
    prepopulated_fields = {'slug': ('name',)}
    ordering = ('order',)

@admin.register(Technology)
class TechnologyAdmin(admin.ModelAdmin):
    list_display = ('name',)
    search_fields = ('name',)

# This allows you to upload screenshots directly from the Project page
class ProjectMediaInline(admin.TabularInline):
    model = ProjectMedia
    extra = 1 # Shows one blank row by default
    fields = ('title', 'file', 'is_pdf', 'order')
    ordering = ('order',)

@admin.register(Project)
class ProjectAdmin(admin.ModelAdmin):
    list_display = ('title', 'category', 'is_published', 'has_api', 'order')
    list_filter = ('category', 'is_published', 'has_api')
    search_fields = ('title', 'summary', 'problem')
    prepopulated_fields = {'slug': ('title',)}
    
    # Creates a beautiful dual-list widget for selecting technologies
    filter_horizontal = ('stack',) 
    
    # Attaches the media uploads to the bottom of the project form
    inlines = [ProjectMediaInline]
    
    # Groups the fields logically in the UI
    fieldsets = (
        ('Core Info', {
            'fields': ('category', 'title', 'slug', 'is_published', 'order', 'icon_name')
        }),
        ('Content', {
            'fields': ('summary', 'problem', 'architecture', 'key_focus')
        }),
        ('Links & Tech', {
            'fields': ('github_url', 'live_url', 'has_api', 'stack')
        }),
        ('UI Configuration', {
            'fields': ('theme_config',),
            'description': 'Enter JSON map: {"primary": "...", "background": "...", "accent": "...", "font": "..."}'
        }),
    )