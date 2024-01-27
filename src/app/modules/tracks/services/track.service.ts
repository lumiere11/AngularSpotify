import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { TrackModel } from '@core/models/tracks.model';
import { Observable, of } from 'rxjs';
import { environment } from 'src/enviroments/enviroment.prod';

@Injectable({
  providedIn: 'root',
})
export class TrackService {
  dataTracksTrending$: Observable<TrackModel[]> = of([]);
  dataTracksRandom$: Observable<TrackModel[]> = of([]);
  private URL = environment.api;
  constructor(private httpClient: HttpClient) {

  }
  getAllTracks$() : Observable<any>{
    return this.httpClient.get(`${this.URL}/tracks`);
  }
}
