from django.db import models

class FarmhouseFeatureImage(models.Model):
    image = models.ImageField(upload_to='farmhouse_features/')
    caption = models.CharField(max_length=255, blank=True)

    def __str__(self):
        return f"Farmhouse Feature: {self.caption or 'Image'}"

class RecentActivityImage(models.Model):
    image = models.ImageField(upload_to='recent_activities/')
    caption = models.CharField(max_length=255, blank=True)
    date = models.DateField()

    def __str__(self):
        return f"Activity on {self.date} - {self.caption or 'Image'}"
