# Generated by Django 4.0.4 on 2022-05-17 23:24

from django.db import migrations, models
import django.utils.timezone


class Migration(migrations.Migration):

    dependencies = [
        ('main', '0003_student_birth_student_image'),
    ]

    operations = [
        migrations.AlterField(
            model_name='student',
            name='birth',
            field=models.DateField(default=django.utils.timezone.now),
        ),
    ]