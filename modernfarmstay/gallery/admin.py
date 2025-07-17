from django.contrib import admin
from .models import FarmhouseFeatureImage, RecentActivityImage

@admin.register(FarmhouseFeatureImage)
class FarmhouseFeatureImageAdmin(admin.ModelAdmin):
    list_display = ('caption',)

@admin.register(RecentActivityImage)
class RecentActivityImageAdmin(admin.ModelAdmin):
    list_display = ('caption', 'date')
