# Generated by Django 4.2.9 on 2024-05-10 06:59

from django.db import migrations, models
import datetime

class Migration(migrations.Migration):

    dependencies = [
        ("gbtapp", "0008_alter_botrecord_system_prompt"),
    ]

    operations = [
        migrations.AddField(
            model_name="botrecord",
            name="pub_date",
            field=models.DateTimeField(default=datetime.datetime.now),
            preserve_default=False,
        ),
    ]
