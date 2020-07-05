import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';

import { AudioService } from '../../services/audio.service';
import { CloudService } from '../../services/cloud.service';
import { ApplicationState } from 'src/app/data/Models/ApplicationState';
import { Song } from 'src/app/data/Models/Song';
import { CurrentSong } from 'src/app/data/Models/CurrentSong';

@Component({
  selector: 'app-player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.scss'],
})
export class PlayerComponent implements OnInit {
  currentPlaylist: Song[];
  currentSong: CurrentSong;
  replayCurrentSong = false;
  replayCurrentPlaylist = false;
  volumeOn = true;
  currentSongLoaded = false;
  state: ApplicationState['playerState'];

  constructor(
    private audioService: AudioService,
    private cloudService: CloudService,
    private store: Store<ApplicationState>
  ) {}

  ngOnInit(): void {
    this.cloudService.getPlaylist().subscribe((currentPlaylist) => {
      this.currentPlaylist = currentPlaylist;
    });

    this.store.pipe(select('playerState')).subscribe((state) => {
      this.state = state;
      this.currentSong = this.state.currentSong;
    });
  }

  isFirstPlaying() {
    return this.currentSong.index === 0;
  }

  isLastPlaying() {
    return this.currentSong.index === this.currentPlaylist.length - 1;
  }

  playStream(song, playlist) {
    this.audioService.playStream(song, playlist).subscribe(({ type }) => {
      if (
        type === 'ended' &&
        this.replayCurrentSong === false &&
        !this.isLastPlaying()
      ) {
        this.next();
      }

      if (
        type === 'ended' &&
        this.replayCurrentSong === false &&
        this.isLastPlaying() &&
        this.replayCurrentPlaylist === true
      ) {
        this.openSong(this.currentPlaylist[0], 0);
      }
    });
  }

  openSong(song: Song, index: number) {
    this.currentSongLoaded = true;
    this.audioService.stop();
    this.playStream({ song, index }, this.currentPlaylist);
  }

  pause() {
    this.audioService.pause();
  }

  play() {
    this.audioService.play();
  }

  stopSong() {
    this.audioService.stopSong();
  }

  next() {
    const index = this.currentSong.index + 1;
    const song = this.currentPlaylist[index];
    this.openSong(song, index);
  }

  previous() {
    const index = this.currentSong.index - 1;
    const song = this.currentPlaylist[index];
    this.openSong(song, index);
  }

  onSliderChangeEnd(change) {
    this.audioService.seekTo(change.value);
  }

  replaySong() {
    this.replayCurrentSong = !this.replayCurrentSong;

    if (this.replayCurrentSong) {
      this.audioService.replay();
    } else {
      this.audioService.unReplay();
    }
  }

  replayPlaylist() {
    this.replayCurrentPlaylist = !this.replayCurrentPlaylist;
  }

  onToggleMute() {
    this.volumeOn = !this.volumeOn;

    if (!this.volumeOn) {
      this.audioService.mute();
    } else {
      this.audioService.unMute();
    }
  }
}
