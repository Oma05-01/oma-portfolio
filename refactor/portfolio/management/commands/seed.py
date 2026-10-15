from django.core.management.base import BaseCommand
from portfolio.models import Category, Technology, Project

class Command(BaseCommand):
    help = 'Seeds the database with initial portfolio projects'

    def handle(self, *args, **kwargs):
        # 1. Create the Categories
        se_category, _ = Category.objects.get_or_create(name="Software Engineering", slug="software-engineering", order=1)
        ai_category, _ = Category.objects.get_or_create(name="AI Engineering", slug="ai-engineering", order=2)

        # 2. Your project data
        projects_data = [
            {
                "title": "Tax Estimation Engine",
                "summary": "2026 Finance Act",
                "slug": "tax-estimator",
                "problem": "Nigerian tax estimation involves complex progressive brackets, profile-specific statutory reliefs, and severe privacy risks when uploading sensitive bank statements to external servers.",
                "architecture": "Privacy-first architecture leveraging WebAssembly (Pyodide) for zero-server data parsing, paired with a React state engine that dynamically adapts progressive tax models based on user profiles.",
                "key_focus": "Secure client-side data processing · proportional tax distribution · dynamic statutory relief calculation",
                "github_url": "https://github.com/Oma05-01/TaxEstimator",
                "live_url": "https://tax-esteem.vercel.app/",
                "has_api": False,
                "category": se_category,
                "stack": ["React", "TypeScript", "WebAssembly (Pyodide)", "Tailwind CSS"],
            },
            {
                "title": "Modular LMS Backend",
                "summary": "Educational Platform",
                "slug": "lms-platform",
                "problem": "Educational platforms require strict role-based access control, dynamic enrollment handling, timed course access, and secure content delivery tied to payment status.",
                "architecture": "Layered backend system connecting Course → Package → Payment → Enrollment → Content access. Content state engine (LOCKED / AVAILABLE / COMPLETED), quiz submission workflow, resource analytics logging, JWT auth, and role-restricted endpoints.",
                "key_focus": "Access control · enrollment logic · learning progress tracking",
                "github_url": "https://github.com/drid-uniben/django-backend",
                "live_url": "",
                "has_api": False,
                "category": se_category,
                "stack": ["Python", "Django", "Django REST Framework", "SimpleJWT", "Celery", "Channels"],
            },
            {
                "title": "Hospital Management System",
                "summary": "Healthcare Backend",
                "slug": "hospital-system",
                "problem": "Healthcare workflows were fragmented, requiring structured role-based access and appointment tracking.",
                "architecture": "Modular Django backend with role-based authentication and REST API endpoints designed for Flutter client integration.",
                "key_focus": "Role-based access control · API architecture",
                "github_url": "https://github.com/Oma05-01/hospital",
                "live_url": "https://hospital-or65.onrender.com",
                "has_api": True,
                "category": se_category,
                "stack": ["Python", "Django", "REST API", "PostgreSQL"],
            },
            {
                "title": "Odyce Perfume Store",
                "summary": "E-commerce Backend",
                "slug": "odyce-store",
                "problem": "Needed a scalable backend to handle authentication, product management, and order logic for a consumer perfume storefront.",
                "architecture": "Structured Django models with clean separation of concerns across authentication, product cataloguing, and order management.",
                "key_focus": "E-commerce logic · authentication flows",
                "github_url": "https://github.com/Oma05-01/Odyce",
                "live_url": "https://main-ie29.onrender.com/",
                "has_api": False,
                "category": se_category,
                "stack": ["Python", "Django", "HTML", "CSS"],
            },
            {
                "title": "QuestNest Infrastructure Engine",
                "summary": "Operational Platform",
                "slug": "questnest",
                "problem": "Operational platforms often lack organisation-scoped identity control, lifecycle enforcement, and traceable automation across assets and payments.",
                "architecture": "Infrastructure-first Django system centred on organisation ownership, lifecycle state validation, and event-driven automation with task generation.",
                "key_focus": "Operational infrastructure · automation · event-driven architecture",
                "github_url": "https://github.com/Oma05-01/QuestNest",
                "live_url": "",
                "has_api": False,
                "category": se_category,
                "stack": ["Python", "Django", "PostgreSQL", "Event-Driven Architecture"],
            },
        ]

        # 3. Loop through and save to database
        for p_data in projects_data:
            stack = p_data.pop('stack')
            project, created = Project.objects.get_or_create(
                slug=p_data['slug'], 
                defaults=p_data
            )
            
            # If project exists, update fields (allows you to re-run the script safely)
            if not created:
                for key, value in p_data.items():
                    setattr(project, key, value)
                project.save()

            # Link the many-to-many technologies
            project.stack.clear() # Reset stack before adding
            for tech_name in stack:
                tech, _ = Technology.objects.get_or_create(name=tech_name)
                project.stack.add(tech)

        self.stdout.write(self.style.SUCCESS('Successfully seeded 5 projects and 2 categories!'))