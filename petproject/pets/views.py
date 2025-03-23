from django.shortcuts import render
from rest_framework import generics
from .models import Pet
from .serializers import PetSerializer

# List all pets and create a new pet
class PetListCreateAPIView(generics.ListCreateAPIView):
    queryset = Pet.objects.all()
    serializer_class = PetSerializer

# Retrieve, update, or delete a specific pet
class PetRetrieveUpdateDestroyAPIView(generics.RetrieveUpdateDestroyAPIView):
    queryset = Pet.objects.all()
    serializer_class = PetSerializer
