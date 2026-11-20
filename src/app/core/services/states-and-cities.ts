import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import {
  IStateResponse,
  IStatesResponse,
  StatesListResponse,
} from '../../shared/models/states-response';
import { map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class StatesAndCitiesApi {
  private readonly _httpClient = inject(HttpClient);

  getStates() {
    return this._httpClient.post('https://countriesnow.space/api/v0.1/countries/states', {
      country: 'Brazil',
    });
  }

  getCities(state: string): Observable<StatesListResponse> {
    return this._httpClient
      .post<IStatesResponse>('https://countriesnow.space/api/v0.1/countries/state/cities', {
        country: 'Brazil',
        state: state,
      })
      .pipe(map((statesResponse) => statesResponse.data.states));
  }
}
