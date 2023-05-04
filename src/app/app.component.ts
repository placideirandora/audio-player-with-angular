import { Component, OnInit } from '@angular/core';
import { Meta } from '@angular/platform-browser';

import { PLATFORM_ID, Inject } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'audio-player';
  isBrowser: boolean;

  constructor(
    private meta: Meta,
    @Inject(PLATFORM_ID) private platformId: Object
  ) {
    this.isBrowser = isPlatformBrowser(this.platformId);
  }

  ngOnInit(): void {
    this.meta.updateTag({ name: 'title', content: 'ANGULAR AUDIO' });
    this.meta.updateTag({
      name: 'description',
      content:
        'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et accusantium sequi esse, est quae magni ullam aliquam voluptatibus. Odit quae itaque animi libero accusantium cum alias fuga delectus inventore adipisci?',
    });
    this.meta.updateTag({
      property: 'og:description',
      content:
        'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et accusantium sequi esse, est quae magni ullam aliquam voluptatibus. Odit quae itaque animi libero accusantium cum alias fuga delectus inventore adipisci?',
    });
    this.meta.updateTag({ property: 'og:type', content: 'website' });
    this.meta.updateTag({ property: 'og:title', content: 'ANGULAR AUDIO' });

    if (this.isBrowser) {
      this.meta.updateTag({
        property: 'og:url',
        content: `${window.location.origin}${window.location.pathname}`,
      });
    }
    this.meta.updateTag({
      property: 'og:image',
      content:
        'https://images.unsplash.com/photo-1494232410401-ad00d5433cfa?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80',
    });
    this.meta.updateTag({
      name: 'twitter:card',
      content: 'summary_large_image',
    });

    if (this.isBrowser) {
      this.meta.updateTag({
        name: 'twitter:url',
        content: `${window.location.origin}${window.location.pathname}`,
      });
    }
    this.meta.updateTag({ name: 'twitter:title', content: 'ANGULAR AUDIO' });
    this.meta.updateTag({
      name: 'twitter:description',
      content:
        'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et accusantium sequi esse, est quae magni ullam aliquam voluptatibus. Odit quae itaque animi libero accusantium cum alias fuga delectus inventore adipisci?',
    });
    this.meta.updateTag({
      name: 'twitter:image',
      content:
        'https://images.unsplash.com/photo-1494232410401-ad00d5433cfa?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80',
    });
  }
}
