import { Component, OnInit } from '@angular/core';

import { AudioService } from '../../services/audio.service';
import { CloudService } from '../../services/cloud.service';
import { StreamState } from '../../interfaces/stream-state';

@Component({
  selector: 'app-player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.scss'],
})
export class PlayerComponent implements OnInit {
  files: Array<any> = [];
  state: StreamState;
  currentFile: any = {};
  repeatCurrentSong = false;
  volumeOn = true;

  constructor(
    private audioService: AudioService,
    private cloudService: CloudService
  ) {}

  ngOnInit(): void {
    // get media files
    this.cloudService.getFiles().subscribe((files) => {
      this.files = files;
    });

    // listen to stream state
    this.audioService.getState().subscribe((state) => {
      this.state = state;
    });
  }

  isFirstPlaying() {
    return this.currentFile.index === 0;
  }

  isLastPlaying() {
    return this.currentFile.index === this.files.length - 1;
  }

  playStream(url) {
    this.audioService.playStream(url).subscribe(({ type }) => {
      if (type === 'ended' && this.repeatCurrentSong === true) {
        const { index, file } = this.currentFile;
        this.openFile(file, index);
      }

      if (
        type === 'ended' &&
        this.repeatCurrentSong === false &&
        !this.isLastPlaying()
      ) {
        this.next();
      }
    });
  }

  openFile(file, index) {
    this.currentFile = { index, file };
    this.audioService.stop();
    this.playStream(file.url);
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
    const index = this.currentFile.index + 1;
    const file = this.files[index];
    this.openFile(file, index);
  }

  previous() {
    const index = this.currentFile.index - 1;
    const file = this.files[index];
    this.openFile(file, index);
  }

  onSliderChangeEnd(change) {
    this.audioService.seekTo(change.value);
  }

  repeatSong() {
    this.repeatCurrentSong = !this.repeatCurrentSong;
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
