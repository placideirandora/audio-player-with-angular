import { CurrentSong } from './CurrentSong';
import { CurrentPlaylist } from './CurrentPlaylist';

export interface ApplicationState {
  playerState: {
    playing: boolean;
    readableCurrentTime: string;
    readableDuration: string;
    duration: number | undefined;
    currentTime: number | undefined;
    canPlay: boolean;
    error: boolean;
    currentSong: CurrentSong;
    currentPlaylist: CurrentPlaylist;
  };
}
