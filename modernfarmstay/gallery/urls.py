from django.urls import path
from .views import FarmhouseGalleryView, RecentActivitiesGalleryView

urlpatterns = [
    path('farmhouse/', FarmhouseGalleryView.as_view(), name='farmhouse-gallery'),
    path('activities/', RecentActivitiesGalleryView.as_view(), name='recent-activities-gallery'),
]
