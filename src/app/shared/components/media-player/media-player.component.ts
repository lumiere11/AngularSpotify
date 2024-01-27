import { Component, OnDestroy, OnInit } from '@angular/core';
import { MultimediaService } from '@shared/services/multimedia.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-media-player',
  templateUrl: './media-player.component.html',
  styleUrls: ['./media-player.component.scss']
})
export class MediaPlayerComponent implements OnInit, OnDestroy {
  listObservers$ : Array<Subscription> = []
  constructor(private multimediaService: MultimediaService){

  }
  ngOnDestroy(): void {
    this.listObservers$.forEach((u) =>  u.unsubscribe())
  }
  ngOnInit(): void {
    const observer1$ : Subscription = this.multimediaService.callback.subscribe((response) => {

    });
    this.listObservers$ = [observer1$];
  }
}
