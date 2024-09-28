# Generated by Django 4.2.16 on 2024-09-24 14:29

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('tracker', '0008_alter_expensesitem_purpose'),
    ]

    operations = [
        migrations.AlterField(
            model_name='expensesitem',
            name='purpose',
            field=models.CharField(choices=[('Einkauf', 1), ('Saufen', 2), ('Trinken', 3), ('Wohnene', 4)], max_length=100, null=True),
        ),
    ]
