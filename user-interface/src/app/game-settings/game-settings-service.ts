import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { TournamentNames } from './tournament-list';


const httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({ providedIn: 'root' })

export class TournamentSettingsService {
    private baseUrl = 'http://localhost:8081/poker-shmoker/tournaments';
    private tournamentList: TournamentNames[];

    constructor(private http: HttpClient) {
        //this.getTournamentList().subscribe(tls => this.tournamentList);
    }

    private getTournamentList(): Observable<any> {
        return this.http.get(this.baseUrl);
    }

    public getTList(): TournamentNames[] {
        return this.tournamentList;
    }
}