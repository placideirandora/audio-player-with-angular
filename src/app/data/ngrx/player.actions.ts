import { createAction, props } from '@ngrx/store';

import { Song } from '../Models/Song';

export const ADD_STREAM_ERROR = createAction(
  '[Player Component] ADD STREAM ERROR'
);

export const ADD_SONG_CURRENT_TIME = createAction(
  '[Player Component] ADD SONG CURRENT TIME',
  props<{ currentTime: number | undefined }>()
);

export const ADD_SONG_READABLE_CURRENT_TIME = createAction(
  '[Player Component] ADD SONG READABLE CURRENT TIME',
  props<{ readableCurrentTime: string }>()
);

export const ADD_SONG_DURATION = createAction(
  '[Player Component] ADD SONG DURATION',
  props<{ duration: number | undefined }>()
);

export const ADD_SONG_READABLE_DURATION = createAction(
  '[Player Component] ADD SONG READABLE DURATION',
  props<{ readableDuration: string }>()
);

export const ADD_SONG_CAN_PLAY = createAction(
  '[Player Component] ADD SONG CAN PLAY'
);

export const ADD_SONG_PLAYING = createAction(
  '[Player Component] ADD SONG PLAYING'
);

export const ADD_SONG_PAUSE = createAction('[Player Component] ADD SONG PAUSE');

export const RESET_AUDIO_STREAM_STATE = createAction(
  '[Player Component] RESET AUDIO STREAM STATE'
);

export const ADD_CURRENT_SONG = createAction(
  '[Player Component] ADD CURRENT SONG',
  props<{ song: Song }>()
);

export const ADD_CURRENT_PLAYLIST = createAction(
  '[Player Component] ADD CURRENT PLAYLIST',
  props<{ playlist: Song[] }>()
);
