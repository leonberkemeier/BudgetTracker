# Generated by Django 4.2.7 on 2024-09-19 18:14

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('tracker', '0004_remove_expensesitem_expesnses_and_more'),
    ]

    operations = [
        migrations.AddField(
            model_name='expensesitem',
            name='amount',
            field=models.FloatField(null=True),
        ),
    ]
