
from django.urls import path
from . import views
urlpatterns = [
   # artists
   path('', views.artist_list, name='artist_list'),
   path('artists/<int:pk>' , views.artist_detail , name = 'artist_detail' ),
   path('artists/new', views.artist_create, name='artist_create'), # new artists
   path('artists/<int:pk>/edit', views.artist_edit, name='artist_edit'), # edit artist
   path('artists/<int:pk>/delete', views.artist_delete, name='artist_delete'), #delete artist
  
   path('songs/', views.songs_list, name='song_list'),
   path('songs/<int:pk>' , views.song_detail , name = 'song_detail' ),
   path('songs/new', views.song_create, name='song_create'),
   path('songs/<int:pk>/edit', views.song_edit, name='song_edit'), 
   path('songs/<int:pk>/delete', views.song_delete, name='song_delete'),   

   path('home/' , views.home , name = "home" ) , 
   path('about/' , views.about) , 
   path('user/<int:id>' , views.show_one_user)
]
