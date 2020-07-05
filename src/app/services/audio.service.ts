import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { Store } from '@ngrx/store';
import * as moment from 'moment';

import { ApplicationState } from '../data/Models/ApplicationState';
import {
  ADD_SONG_DURATION,
  ADD_SONG_READABLE_DURATION,
  ADD_SONG_CAN_PLAY,
  ADD_SONG_PLAYING,
  ADD_SONG_PAUSE,
  ADD_SONG_CURRENT_TIME,
  ADD_SONG_READABLE_CURRENT_TIME,
  RESET_AUDIO_STREAM_STATE,
  ADD_STREAM_ERROR,
  ADD_CURRENT_SONG,
  ADD_CURRENT_PLAYLIST,
} from '../data/ngrx/player.actions';
import { Song } from '../data/Models/Song';

@Injectable({
  providedIn: 'root',
})
export class AudioService {
  constructor(private store: Store<ApplicationState>) {}

  private stop$ = new Subject();
  private audioObj = new Audio();

  audioEvents = [
    'ended',
    'error',
    'play',
    'playing',
    'pause',
    'timeupdate',
    'canplay',
    'loadedmetadata',
    'loadstart',
  ];

  private updateStateEvents(event: Event): void {
    switch (event.type) {
      case 'canplay':
        this.store.dispatch(
          ADD_SONG_DURATION({ duration: this.audioObj.duration })
        );
        this.store.dispatch(
          ADD_SONG_READABLE_DURATION({
            readableDuration: this.formatTime(this.audioObj.duration),
          })
        );
        this.store.dispatch(ADD_SONG_CAN_PLAY());
        break;
      case 'playing':
        this.store.dispatch(ADD_SONG_PLAYING());
        break;
      case 'pause':
        this.store.dispatch(ADD_SONG_PAUSE());
        break;
      case 'timeupdate':
        this.store.dispatch(
          ADD_SONG_CURRENT_TIME({ currentTime: this.audioObj.currentTime })
        );
        this.store.dispatch(
          ADD_SONG_READABLE_CURRENT_TIME({
            readableCurrentTime: this.formatTime(this.audioObj.currentTime),
          })
        );
        break;
      case 'error':
        this.store.dispatch(RESET_AUDIO_STREAM_STATE());
        this.store.dispatch(ADD_STREAM_ERROR());
        break;
    }
  }

  private streamObservable(url) {
    return new Observable((observer) => {
      // Play audio
      this.audioObj.src = url;
      this.audioObj.load();
      this.audioObj.play();

      const handler = (event: Event) => {
        this.updateStateEvents(event);
        observer.next(event);
      };

      this.addEvents(this.audioObj, this.audioEvents, handler);
      return () => {
        // Stop Playing
        this.audioObj.pause();
        this.audioObj.currentTime = 0;
        // remove event listeners
        this.removeEvents(this.audioObj, this.audioEvents, handler);
        // reset state
        this.store.dispatch(RESET_AUDIO_STREAM_STATE());
      };
    });
  }

  private addEvents(obj, events, handler) {
    events.forEach((event) => {
      obj.addEventListener(event, handler);
    });
  }

  private removeEvents(obj, events, handler) {
    events.forEach((event) => {
      obj.removeEventListener(event, handler);
    });
  }

  playStream(currentSong, currentPlaylist: Song[]) {
    this.store.dispatch(ADD_CURRENT_SONG({ song: currentSong }));
    this.store.dispatch(ADD_CURRENT_PLAYLIST({ playlist: currentPlaylist }));
    return this.streamObservable(currentSong.song.url).pipe(
      takeUntil(this.stop$)
    );
  }

  play() {
    this.audioObj.play();
  }

  pause() {
    this.audioObj.pause();
  }

  stop() {
    this.stop$.next();
  }

  stopSong() {
    this.audioObj.pause();
    this.audioObj.currentTime = 0;
  }

  mute() {
    this.audioObj.muted = true;
  }

  unMute() {
    this.audioObj.muted = false;
  }

  replay() {
    this.audioObj.loop = true;
  }

  unReplay() {
    this.audioObj.loop = false;
  }

  seekTo(seconds) {
    this.audioObj.currentTime = seconds;
  }

  formatTime(time: number, format: string = 'HH:mm:ss') {
    const momentTime = time * 1000;
    return moment.utc(momentTime).format(format);
  }
}
