import { createReducer, on } from '@ngrx/store';

import { ApplicationState } from '../Models/ApplicationState';
import {
  ADD_STREAM_ERROR,
  ADD_SONG_CURRENT_TIME,
  ADD_SONG_READABLE_CURRENT_TIME,
  ADD_SONG_DURATION,
  ADD_SONG_READABLE_DURATION,
  ADD_SONG_CAN_PLAY,
  ADD_SONG_PLAYING,
  RESET_AUDIO_STREAM_STATE,
  ADD_SONG_PAUSE,
  ADD_CURRENT_SONG,
  ADD_CURRENT_PLAYLIST,
} from './player.actions';

const initialPlayerState: ApplicationState['playerState'] = {
  playing: false,
  currentTime: undefined,
  readableCurrentTime: '',
  duration: undefined,
  readableDuration: '',
  canPlay: false,
  error: false,
  currentSong: {
    index: undefined,
    song: undefined,
  },
  currentPlaylist: [],
};

export const playerReducer = createReducer(
  initialPlayerState,
  on(ADD_STREAM_ERROR, (state) => Object.assign({}, state, { error: true })),
  on(ADD_SONG_CURRENT_TIME, (state, { currentTime }) =>
    Object.assign({}, state, { currentTime })
  ),
  on(ADD_SONG_READABLE_CURRENT_TIME, (state, { readableCurrentTime }) =>
    Object.assign({}, state, { readableCurrentTime })
  ),
  on(ADD_SONG_DURATION, (state, { duration }) =>
    Object.assign({}, state, { duration })
  ),
  on(ADD_SONG_READABLE_DURATION, (state, { readableDuration }) =>
    Object.assign({}, state, { readableDuration })
  ),
  on(ADD_SONG_CAN_PLAY, (state) => Object.assign({}, state, { canPlay: true })),
  on(ADD_SONG_PLAYING, (state) => Object.assign({}, state, { playing: true })),
  on(ADD_SONG_PAUSE, (state) => Object.assign({}, state, { playing: false })),
  on(ADD_CURRENT_SONG, (state, { song }) =>
    Object.assign({}, state, { currentSong: song })
  ),
  on(ADD_CURRENT_PLAYLIST, (state, { playlist }) =>
    Object.assign({}, state, { currentPlaylist: playlist })
  ),
  on(RESET_AUDIO_STREAM_STATE, (state) =>
    Object.assign({}, state, {
      playing: false,
      currentTime: undefined,
      readableCurrentTime: '',
      duration: undefined,
      readableDuration: '',
      canPlay: false,
      error: false,
      currentSong: {
        index: undefined,
        song: undefined,
      },
      currentPlaylist: [],
    })
  )
);
