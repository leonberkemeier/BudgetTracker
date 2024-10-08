# Generated by Django 4.2.16 on 2024-09-28 13:07

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('tracker', '0011_delete_purpose_alter_expensesitem_purpose'),
    ]

    operations = [
        migrations.CreateModel(
            name='Purpose',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('purpose', models.CharField(max_length=100, null=True)),
                ('date_created', models.DateTimeField(auto_now_add=True)),
            ],
        ),
        migrations.AlterField(
            model_name='expensesitem',
            name='purpose',
            field=models.CharField(choices=[('A', 'a'), ('B', 'b')], max_length=100, null=True),
        ),
    ]
