# review/views.py
from rest_framework import generics
from .models import Review
from .serializers import ReviewSerializer

class ReviewListCreateView(generics.ListCreateAPIView):
    queryset = Review.objects.filter(approved=True)
    serializer_class = ReviewSerializer

    def get_queryset(self):
        # Only approved reviews are visible
        return Review.objects.filter(approved=True)

    def perform_create(self, serializer):
        # Always create with approved=False
        serializer.save(approved=False)
