# Generated by Django 3.1.5 on 2021-02-06 21:57

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('tunr', '0001_initial'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='song',
            name='color',
        ),
        migrations.RemoveField(
            model_name='song',
            name='color_2',
        ),
    ]
