# review/models.py
from django.db import models

class Review(models.Model):
    reviewer_name = models.CharField(max_length=255)
    reviewer_image = models.ImageField(upload_to='reviews/', blank=True, null=True)
    message = models.TextField()
    star = models.IntegerField(default=5)
    approved = models.BooleanField(default=False)
    created_at = models.DateTimeField(auto_now_add=True)

    class Meta:
        ordering = ['-created_at']

    def __str__(self):
        return f"{self.reviewer_name} - {self.star} ⭐"
