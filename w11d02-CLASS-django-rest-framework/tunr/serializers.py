from rest_framework import serializers

from .models import *


class ArtistSerializer(serializers.HyperlinkedModelSerializer):
    songs = serializers.HyperlinkedRelatedField(
        view_name="song_detail", many=True, read_only=True
    )

    class Meta:
        model = Artist
        fields = ("id", "name", "nationality", "photo_url", "songs")


class SongSerializer(serializers.HyperlinkedModelSerializer):

    class Meta:
        model = Song
        fields = ("id", "title", "album", "preview_url")
