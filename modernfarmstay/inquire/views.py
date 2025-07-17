from rest_framework import generics
from django.core.mail import send_mail
from .models import Booking
from .serializers import BookingSerializer

class BookingCreateView(generics.CreateAPIView):
    queryset = Booking.objects.all()
    serializer_class = BookingSerializer

    def perform_create(self, serializer):
        booking = serializer.save()

        subject = f"New Booking by {booking.full_name}"
        message = f"""
New booking details:

Room: {booking.room.title}
Name: {booking.full_name}
Phone: {booking.phone}
Email: {booking.email}
Nationality: {booking.nationality}
Guests: {booking.num_guests}
Check-in: {booking.check_in}
Check-out: {booking.check_out}
Special Requests: {booking.special_requests}
        """.strip()

        send_mail(
            subject,
            message,
            None,  # uses DEFAULT_FROM_EMAIL
            ['mailabroadadvise@gmail.com'],  # can add more recipients here
            fail_silently=False,
        )
