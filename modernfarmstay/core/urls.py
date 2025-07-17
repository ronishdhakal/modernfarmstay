from django.urls import path
from .views import HeroSectionView, OwnerMessageView, CTASectionView, FooterSettingView

urlpatterns = [
    path('hero/', HeroSectionView.as_view(), name='hero-section'),
    path('owner/', OwnerMessageView.as_view(), name='owner-message'),
    path('cta/', CTASectionView.as_view(), name='cta-section'),
    path('footer/', FooterSettingView.as_view(), name='footer-setting'),
]
