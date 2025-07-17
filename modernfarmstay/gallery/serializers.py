from rest_framework import serializers
from .models import FarmhouseFeatureImage, RecentActivityImage

class FarmhouseFeatureImageSerializer(serializers.ModelSerializer):
    class Meta:
        model = FarmhouseFeatureImage
        fields = ['image', 'caption']

class RecentActivityImageSerializer(serializers.ModelSerializer):
    class Meta:
        model = RecentActivityImage
        fields = ['image', 'caption', 'date']
