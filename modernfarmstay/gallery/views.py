from rest_framework import generics
from .models import FarmhouseFeatureImage, RecentActivityImage
from .serializers import FarmhouseFeatureImageSerializer, RecentActivityImageSerializer

class FarmhouseGalleryView(generics.ListAPIView):
    queryset = FarmhouseFeatureImage.objects.all()
    serializer_class = FarmhouseFeatureImageSerializer

class RecentActivitiesGalleryView(generics.ListAPIView):
    queryset = RecentActivityImage.objects.all()
    serializer_class = RecentActivityImageSerializer
