import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';

import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { PlayerList } from './player-list/playerList';
import { Player } from './player';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({ providedIn: 'root' })

export class DataBaseService {
  private baseUrl = 'http://localhost:8081/poker-shmoker/database';
  constructor(private http: HttpClient) { }
  
  addPlayers(player: Object): Observable<Object>{
    console.log("add");
    return this.http.post(`${this.baseUrl}` + `/players`, player);
  }
  UpPlayer(player:Player) : Observable<Object>{
    console.log("update");
    console.log(player);
    let body:Object={
      age: player.age,
      buyInDTO: {
        buy: player.buyInDTO.buy,
        endDate: player.buyInDTO.endDate,
      },
      id: player.id,
      name: player.name,
      patronymic: player.patronymic,
      surname: player.surname,
    };
    console.log(body);
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };

    return this.http.put(`http://localhost:8081/poker-shmoker/database/players`, body,httpOptions);
  }
  getPlayerByID(playerId){
    console.log("get");
    return this.http.get(`${this.baseUrl}` + `/players/` + playerId);
  }
  deletePlayer(playersId):Observable<void>{
    const options= {
      params: new HttpParams().set('ids',playersId) };
    console.log(`http://localhost:8081/poker-shmoker/database/players?ids=`+playersId);
    return this.http.delete<void>(`http://localhost:8081/poker-shmoker/database/players`,options);
  }
  getPlayerList():Observable<any>{  
    return this.http.post(`${this.baseUrl}` + `/players/filter?start=0&end=20`,
    {
      operatorType: "NO_FILTER",
      value: ""
    });
  }
  counts(){
    return this.http.get(`${this.baseUrl}`+`/players/counts`);
  }
  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
 
      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead
 
      // TODO: better job of transforming error for user consumption
      console.log(`${operation} failed: ${error.message}`);
 
      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }
}
