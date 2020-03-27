from django.contrib import admin
from django.urls import path, include, re_path

urlpatterns = [
    path('', include('frontend.urls')),
    path('', include('leads.urls')),
    path('', include('accounts.urls')),
    # include() -> chops off whatever part of the URL matched up to that point and sends the remaining string to the
    # included URLconf for further processing.
    path('polls/', include('polls.urls')),
    path('admin/', admin.site.urls),
]
