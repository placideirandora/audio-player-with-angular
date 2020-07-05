import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { Song } from '../data/Models/Song';

@Injectable({
  providedIn: 'root',
})
export class CloudService {
  playlistOne: Song[] = [
    {
      title: 'Kigali Love',
      artist: 'Urban Boyz',
      url:
        'https://res.cloudinary.com/dnuqiengg/video/upload/v1593407582/balymus/songs' +
        '/Kigali%20Love%20official%20video%20by%20Urban%20Boys_60fu3x0f3ov.mp3',
      playlist: 1,
    },
    {
      title: 'Beera Nange',
      artist: 'Alan Toniks',
      url:
        'https://res.cloudinary.com/dnuqiengg/video/upload/v1593407335/balymus/songs' +
        '/Beera%20Nange-TONIKS_lkl6x66y2hp.mp3',
      playlist: 1,
    },
    {
      title: 'Isengesho',
      artist: 'Gisa',
      url:
        'https://res.cloudinary.com/dnuqiengg/video/upload/v1593425857/balymus/songs' +
        '/Isengesho%20by%20gisa%20cyinganzo_g5508q2ucfb.mp3',
      playlist: 1,
    },
    {
      title: 'Muraberewe',
      artist: 'Manzi',
      url:
        'https://res.cloudinary.com/dnuqiengg/video/upload/v1593168028/balymus/songs' +
        '/Muraberewe%20by%20manzi%20again%20%20official%20video%20lyrics_k8as1qu7k4j.mp3',
      playlist: 1,
    },
    {
      title: 'Zararyoshye',
      artist: 'Zilha',
      url:
        'https://res.cloudinary.com/dnuqiengg/video/upload/v1593083576/balymus/songs' +
        '/Zilha%20-%20zararyoshye%20%20Official%20Video_259wx6xs4ws.mp3',
      playlist: 1,
    },
  ];

  playlistTwo: Song[] = [
    {
      title: 'Murasa',
      artist: 'Ganza',
      url:
        'https://res.cloudinary.com/dnuqiengg/video/upload/v1593167720/balymus/songs' +
        '/Murasa%20by%20Ganza%20Official%20video%20Dir%20M%20Jett_obytdw6zdqa.mp3',
      playlist: 2,
    },
    {
      title: 'Falling',
      artist: 'Alan Toniks ft Fille',
      url:
        'https://res.cloudinary.com/dnuqiengg/video/upload/v1593090929/balymus/songs' +
        '/Falling%20-%20Allan%20Toniks%20%20Fille%20Official%20Music%20Video_5vysbekzzfd.mp3',
      playlist: 2,
    },
    {
      title: 'Impatient',
      artist: 'Jeremy ft Ty Dolla $ign',
      url:
        'https://res.cloudinary.com/dnuqiengg/video/upload/v1593167851/balymus/songs' +
        '/Jeremih%20-%20Impatient%20Ft%20Ty%20Dolla%20ign%20Music%20Video_f9gi21j8a2e.mp3',
      playlist: 2,
    },
    {
      title: 'Sindaza',
      artist: 'B-Threy',
      url:
        'https://res.cloudinary.com/dnuqiengg/video/upload/v1593424893/balymus/songs' +
        '/B-Threy%20-%20Sindaza%28MP3_70K%29_w48gttsj07l.mp3',
      playlist: 2,
    },
    {
      title: '10 Fingers',
      artist: 'AKA ft ANATII',
      url:
        'https://res.cloudinary.com/dnuqiengg/video/upload/v1593176442/balymus/songs' +
        '/AKA__Anatii_-_10_Fingers_58fx67zevas.mp3',
      playlist: 2,
    },
  ];

  playlistThree: Song[] = [
    {
      title: 'Impatient',
      artist: 'Jeremy ft Ty Dolla $ign',
      url:
        'https://res.cloudinary.com/dnuqiengg/video/upload/v1593167851/balymus/songs' +
        '/Jeremih%20-%20Impatient%20Ft%20Ty%20Dolla%20ign%20Music%20Video_f9gi21j8a2e.mp3',
      playlist: 3,
    },
    {
      title: 'Beera Nange',
      artist: 'Alan Toniks',
      url:
        'https://res.cloudinary.com/dnuqiengg/video/upload/v1593407335/balymus/songs' +
        '/Beera%20Nange-TONIKS_lkl6x66y2hp.mp3',
      playlist: 3,
    },
    {
      title: 'Murasa',
      artist: 'Ganza',
      url:
        'https://res.cloudinary.com/dnuqiengg/video/upload/v1593167720/balymus/songs' +
        '/Murasa%20by%20Ganza%20Official%20video%20Dir%20M%20Jett_obytdw6zdqa.mp3',
      playlist: 3,
    },

    {
      title: 'Zararyoshye',
      artist: 'Zilha',
      url:
        'https://res.cloudinary.com/dnuqiengg/video/upload/v1593083576/balymus/songs' +
        '/Zilha%20-%20zararyoshye%20%20Official%20Video_259wx6xs4ws.mp3',
      playlist: 3,
    },
    {
      title: 'Muraberewe',
      artist: 'Manzi',
      url:
        'https://res.cloudinary.com/dnuqiengg/video/upload/v1593168028/balymus/songs' +
        '/Muraberewe%20by%20manzi%20again%20%20official%20video%20lyrics_k8as1qu7k4j.mp3',
      playlist: 3,
    },
  ];

  getPlaylists() {
    return of({
      playlistOne: this.playlistOne,
      playlistTwo: this.playlistTwo,
      playlistThree: this.playlistThree,
    });
  }
}
