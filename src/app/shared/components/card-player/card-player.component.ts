import { Component, Input, OnInit } from '@angular/core';
import { TrackModel } from '@core/models/tracks.model';
import { TracksModule } from '@modules/tracks/tracks.module';
import { MultimediaService } from '@shared/services/multimedia.service';

@Component({
  selector: 'app-card-player',
  templateUrl: './card-player.component.html',
  styleUrls: ['./card-player.component.scss']
})
export class CardPlayerComponent implements OnInit{
  @Input() mode: 'small' | 'big' = 'small';
  @Input() track!: TrackModel;
  constructor(private multimediaService: MultimediaService){
  }
  ngOnInit(): void {
  }
  sendPlay(track: TrackModel){
    this.multimediaService.callback.emit(track);
  }
}
