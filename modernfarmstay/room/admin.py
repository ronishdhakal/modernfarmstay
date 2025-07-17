from django.contrib import admin
from .models import Room, RoomFeature, RoomPolicy, RoomGallery

class RoomGalleryInline(admin.TabularInline):
    model = RoomGallery
    extra = 1

class RoomFeatureInline(admin.TabularInline):
    model = RoomFeature
    extra = 1

class RoomPolicyInline(admin.TabularInline):
    model = RoomPolicy
    extra = 1

@admin.register(Room)
class RoomAdmin(admin.ModelAdmin):
    list_display = ('title', 'price', 'max_guests')
    prepopulated_fields = {"slug": ("title",)}
    inlines = [RoomFeatureInline, RoomPolicyInline, RoomGalleryInline]

admin.site.register(RoomFeature)
admin.site.register(RoomPolicy)
admin.site.register(RoomGallery)
