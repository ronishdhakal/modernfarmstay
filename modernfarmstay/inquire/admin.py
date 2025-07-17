from django.contrib import admin
from .models import Booking

@admin.register(Booking)
class BookingAdmin(admin.ModelAdmin):
    list_display = ('full_name', 'room', 'check_in', 'check_out', 'num_guests', 'created_at')
    search_fields = ('full_name', 'email', 'phone')
