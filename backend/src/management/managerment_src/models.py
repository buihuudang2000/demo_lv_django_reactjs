from django.db import models

# Create your models here.
class Product(models.Model):
    
    name = models.CharField(max_length=25, null=True)
    img = models.TextField(null=True)
    price = models.IntegerField(null=True)

        

