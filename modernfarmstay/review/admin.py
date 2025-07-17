# review/admin.py
from django.contrib import admin
from .models import Review

@admin.register(Review)
class ReviewAdmin(admin.ModelAdmin):
    list_display = ('reviewer_name', 'star', 'approved', 'created_at')
    list_filter = ('approved', 'star')
    search_fields = ('reviewer_name', 'message')
