from rest_framework import serializers
from .models import Room, RoomFeature, RoomPolicy, RoomGallery

class RoomFeatureSerializer(serializers.ModelSerializer):
    class Meta:
        model = RoomFeature
        fields = ['feature']

class RoomPolicySerializer(serializers.ModelSerializer):
    class Meta:
        model = RoomPolicy
        fields = ['policy']

class RoomGallerySerializer(serializers.ModelSerializer):
    class Meta:
        model = RoomGallery
        fields = ['image', 'caption']

class RoomSerializer(serializers.ModelSerializer):
    features = RoomFeatureSerializer(many=True, read_only=True)
    policies = RoomPolicySerializer(many=True, read_only=True)
    gallery = RoomGallerySerializer(many=True, read_only=True)

    class Meta:
        model = Room
        fields = [
            'id',            # ✅ add this line
            'title', 'slug', 'short_description', 'price', 'max_guests',
            'check_in_time', 'check_out_time', 'min_stay_days',
            'features', 'policies', 'gallery'
        ]
