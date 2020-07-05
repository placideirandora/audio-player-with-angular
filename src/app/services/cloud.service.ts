import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { Song } from '../data/Models/Song';

@Injectable({
  providedIn: 'root',
})
export class CloudService {
  songs: Song[] = [
    {
      url:
        'https://res.cloudinary.com/dnuqiengg/video/upload/v1593407582/balymus/songs' +
        '/Kigali%20Love%20official%20video%20by%20Urban%20Boys_60fu3x0f3ov.mp3',
      title: 'Kigali Love',
      artist: 'Urban Boyz',
    },
    {
      url:
        'https://res.cloudinary.com/dnuqiengg/video/upload/v1593407335/balymus/songs' +
        '/Beera%20Nange-TONIKS_lkl6x66y2hp.mp3',
      title: 'Beera Nange',
      artist: 'Alan Toniks',
    },
    {
      url:
        'https://res.cloudinary.com/dnuqiengg/video/upload/v1593425857/balymus/songs' +
        '/Isengesho%20by%20gisa%20cyinganzo_g5508q2ucfb.mp3',
      title: 'Isengesho',
      // tslint:disable-next-line: quotemark
      artist: "Gisa Cy'Inganzo",
    },
    {
      url:
        'https://res.cloudinary.com/dnuqiengg/video/upload/v1593168028/balymus/songs' +
        '/Muraberewe%20by%20manzi%20again%20%20official%20video%20lyrics_k8as1qu7k4j.mp3',
      title: 'Muraberewe',
      artist: 'Manzi',
    },
    {
      url:
        'https://res.cloudinary.com/dnuqiengg/video/upload/v1593083576/balymus/songs' +
        '/Zilha%20-%20zararyoshye%20%20Official%20Video_259wx6xs4ws.mp3',
      title: 'Zararyoshye',
      artist: 'Zilha',
    },
  ];

  getPlaylist() {
    return of(this.songs);
  }
}
