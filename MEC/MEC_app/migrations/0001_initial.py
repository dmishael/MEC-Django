# Generated by Django 2.1.5 on 2019-02-28 14:10

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Appointment',
            fields=[
                ('appId', models.AutoField(primary_key=True, serialize=False)),
                ('date', models.CharField(max_length=100)),
                ('time', models.TimeField(max_length=100)),
                ('area', models.CharField(max_length=100)),
                ('fee', models.IntegerField(default=0)),
                ('name', models.CharField(max_length=30)),
                ('eName', models.CharField(max_length=30)),
                ('clientAddress', models.CharField(default=0, max_length=100)),
            ],
        ),
        migrations.CreateModel(
            name='Image',
            fields=[
                ('imgId', models.AutoField(primary_key=True, serialize=False)),
                ('image', models.ImageField(upload_to='')),
            ],
        ),
        migrations.CreateModel(
            name='internalComment',
            fields=[
                ('intComId', models.AutoField(primary_key=True, serialize=False)),
                ('comment', models.CharField(max_length=200)),
                ('appId', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='internalComments', to='MEC_app.Appointment')),
            ],
        ),
    ]
