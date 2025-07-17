from django.db import models
from django.utils.text import slugify

class Room(models.Model):
    title = models.CharField(max_length=200)
    slug = models.SlugField(unique=True, blank=True)
    short_description = models.TextField()
    price = models.DecimalField(max_digits=8, decimal_places=2)
    max_guests = models.PositiveIntegerField()
    check_in_time = models.TimeField()
    check_out_time = models.TimeField()
    min_stay_days = models.PositiveIntegerField()

    def save(self, *args, **kwargs):
        if not self.slug:
            self.slug = slugify(self.title)
        super(Room, self).save(*args, **kwargs)

    def __str__(self):
        return self.title

class RoomFeature(models.Model):
    room = models.ForeignKey(Room, related_name='features', on_delete=models.CASCADE)
    feature = models.CharField(max_length=200)

    def __str__(self):
        return f"{self.room.title} - {self.feature}"

class RoomPolicy(models.Model):
    room = models.ForeignKey(Room, related_name='policies', on_delete=models.CASCADE)
    policy = models.CharField(max_length=200)

    def __str__(self):
        return f"{self.room.title} - {self.policy}"

class RoomGallery(models.Model):
    room = models.ForeignKey(Room, related_name='gallery', on_delete=models.CASCADE)
    image = models.ImageField(upload_to='room_gallery/')
    caption = models.CharField(max_length=255, blank=True)

    def __str__(self):
        return f"{self.room.title} Image"
