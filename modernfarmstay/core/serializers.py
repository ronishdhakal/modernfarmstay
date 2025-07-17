from rest_framework import serializers
from .models import HeroSection, OwnerMessage, CTASection, FooterSetting

class HeroSectionSerializer(serializers.ModelSerializer):
    class Meta:
        model = HeroSection
        fields = ['image', 'heading', 'subheading']

class OwnerMessageSerializer(serializers.ModelSerializer):
    class Meta:
        model = OwnerMessage
        fields = ['image', 'message']

class CTASectionSerializer(serializers.ModelSerializer):
    class Meta:
        model = CTASection
        fields = ['text', 'link']

class FooterSettingSerializer(serializers.ModelSerializer):
    class Meta:
        model = FooterSetting
        fields = ['phone', 'email', 'address', 'copyright']
