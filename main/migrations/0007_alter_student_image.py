# Generated by Django 4.0.4 on 2022-05-18 21:34

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('main', '0006_alter_student_image'),
    ]

    operations = [
        migrations.AlterField(
            model_name='student',
            name='image',
            field=models.ImageField(blank=True, default='main/static/images/female_user.png', upload_to='main/static/profilePhotos/'),
        ),
    ]