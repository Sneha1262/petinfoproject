from django.contrib import admin
from django.urls import path
from ui import views

urlpatterns = [
    path('admin/', admin.site.urls),
    path('home/', views.home, name='home'),  # change '' to 'home/'
]
