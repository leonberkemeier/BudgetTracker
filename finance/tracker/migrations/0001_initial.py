# Generated by Django 5.1.1 on 2024-09-18 17:52

import datetime
from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='ExpensesItem',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('expenses', models.IntegerField()),
                ('purpose', models.IntegerField()),
                ('date', models.DateField(default=datetime.date.today)),
            ],
        ),
    ]
