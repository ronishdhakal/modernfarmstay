from django.db import models

class HeroSection(models.Model):
    image = models.ImageField(upload_to='hero/')
    heading = models.CharField(max_length=255)
    subheading = models.TextField(blank=True)

    def __str__(self):
        return self.heading

class OwnerMessage(models.Model):
    image = models.ImageField(upload_to='owner/')
    message = models.TextField()

    def __str__(self):
        return "Owner Message"

class CTASection(models.Model):
    text = models.CharField(max_length=255)
    link = models.URLField()

    def __str__(self):
        return self.text

class FooterSetting(models.Model):
    phone = models.CharField(max_length=20)
    email = models.EmailField()
    address = models.CharField(max_length=255)
    copyright = models.CharField(max_length=255)

    def __str__(self):
        return "Footer Settings"
