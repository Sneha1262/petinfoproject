from django.urls import path
from .views import PetListCreateAPIView, PetRetrieveUpdateDestroyAPIView

urlpatterns = [
    path('pets/', PetListCreateAPIView.as_view(), name='pet-list-create'),
    path('pets/<int:pk>/', PetRetrieveUpdateDestroyAPIView.as_view(), name='pet-detail'),
    
]
