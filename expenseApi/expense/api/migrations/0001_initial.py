# Generated by Django 4.1 on 2022-08-23 13:28

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Expense',
            fields=[
                ('id', models.AutoField(primary_key=True, serialize=False)),
                ('title', models.CharField(max_length=100)),
                ('price', models.IntegerField()),
                ('date', models.DateField()),
            ],
        ),
    ]
