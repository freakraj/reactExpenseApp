# Generated by Django 4.1 on 2022-08-24 15:46

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0001_initial'),
    ]

    operations = [
        migrations.RenameField(
            model_name='expense',
            old_name='price',
            new_name='amount',
        ),
    ]
