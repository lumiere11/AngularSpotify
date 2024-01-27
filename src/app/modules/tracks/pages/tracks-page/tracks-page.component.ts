import { Component, OnDestroy, OnInit } from '@angular/core';
import { TrackModel } from '@core/models/tracks.model';
import { TrackService } from '@modules/tracks/services/track.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-tracks-page',
  templateUrl: './tracks-page.component.html',
  styleUrls: ['./tracks-page.component.scss'],
})
export class TracksPageComponent implements OnInit, OnDestroy {
  tracksTrending: TrackModel[] = [];
  tracksRandom: TrackModel[] = [];
  listObservers$: Subscription[] = [];

  constructor(private trackservice: TrackService){

  }
  ngOnInit(): void {
    this.trackservice.getAllTracks$()
    .subscribe((res) => {
      console.log(res);
    })
  }
  ngOnDestroy(): void {
    throw new Error('Method not implemented.');
  }
}
