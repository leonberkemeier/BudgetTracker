# Generated by Django 4.2.16 on 2024-10-01 09:47

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('tracker', '0013_alter_expensesitem_purpose'),
    ]

    operations = [
        migrations.CreateModel(
            name='Networth',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('incomeM', models.FloatField(null=True)),
                ('balance', models.FloatField(null=True)),
                ('assets', models.FloatField(null=True)),
            ],
        ),
    ]
