import { Song } from './Song';

export interface CurrentPlaylist {
  playlist: number;
  songs: Song[];
}
