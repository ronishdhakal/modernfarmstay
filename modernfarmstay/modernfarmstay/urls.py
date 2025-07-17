from django.contrib import admin
from django.urls import path, include
from django.conf import settings
from django.conf.urls.static import static

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/rooms/', include('room.urls')),
    path('api/bookings/', include('inquire.urls')),
    path('api/galleries/', include('gallery.urls')),
    path('api/core/', include('core.urls')),
    path('api/reviews/', include('review.urls')),
]

if settings.DEBUG:
    urlpatterns += static(settings.STATIC_URL, document_root=settings.STATIC_ROOT)
    urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
