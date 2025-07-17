from rest_framework import generics
from .models import HeroSection, OwnerMessage, CTASection, FooterSetting
from .serializers import HeroSectionSerializer, OwnerMessageSerializer, CTASectionSerializer, FooterSettingSerializer

class HeroSectionView(generics.ListAPIView):
    queryset = HeroSection.objects.all()
    serializer_class = HeroSectionSerializer

class OwnerMessageView(generics.ListAPIView):
    queryset = OwnerMessage.objects.all()
    serializer_class = OwnerMessageSerializer

class CTASectionView(generics.ListAPIView):
    queryset = CTASection.objects.all()
    serializer_class = CTASectionSerializer

class FooterSettingView(generics.ListAPIView):
    queryset = FooterSetting.objects.all()
    serializer_class = FooterSettingSerializer
