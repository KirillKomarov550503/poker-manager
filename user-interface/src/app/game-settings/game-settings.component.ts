import { Component, OnInit } from '@angular/core';
import { TournamentSettingFull } from '../tournament-setting-full';
import { TOURNAMENTSETTING } from '../mock-tournament';
import { TournamentSettingsService } from './game-settings-service';
import { TournamentNames } from './tournament-list';

@Component({
  selector: 'app-game-settings',
  templateUrl: './game-settings.component.html',
  styleUrls: ['./game-settings.component.css'],
})
export class GameSettingsComponent implements OnInit {
  tournamentInfo: TournamentSettingFull;
  public tournamentNames: TournamentNames[];
  public selectedTournament: string;
  public template: string;
  constructor(private readonly tsService: TournamentSettingsService) {
    this.tournamentInfo = new TournamentSettingFull();
    this.tournamentNames = this.tsService.getTList();
    this.selectedTournament = 'name';
    this.template = this.selectedTournament;
  }

  ngOnInit() {
  }
  load(): void {
    this.tournamentInfo = TOURNAMENTSETTING;
  }
  changeA() {
    console.log('Addon');
    if (this.tournamentInfo.AddOnBut === true) {
      this.tournamentInfo.AddOnBut = false;
    } else { this.tournamentInfo.AddOnBut = true; }
  }
  changeR() {
    console.log('Rebuy');
    if (this.tournamentInfo.rebuyBut === true) {
      this.tournamentInfo.rebuyBut = false;
    } else { this.tournamentInfo.rebuyBut = true; }
  }
  changeTournament(name){
    console.log(name);
  }
  Save(name){
    console.log('save ' + name);
  }
  SaveAs(name){
    console.log('save as ' + name);
  }
}
