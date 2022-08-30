from operator import mod
from django.db import models

# Create your models here.
class Expense(models.Model):
    id = models.AutoField(primary_key=True)
    title = models.CharField(max_length=100)
    amount = models.IntegerField()
    date = models.DateField()

    def __str__(self) -> str:
        return self.title
    
