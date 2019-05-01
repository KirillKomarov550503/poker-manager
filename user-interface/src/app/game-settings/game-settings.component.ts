import { Component, OnInit } from '@angular/core';
import { TournamentSettingFull } from '../tournament-setting-full';
import { TOURNAMENTSETTING } from '../mock-tournament';


@Component({
  selector: 'app-game-settings',
  templateUrl: './game-settings.component.html',
  styleUrls: ['./game-settings.component.css'],
})
export class GameSettingsComponent implements OnInit {
  tournamentInfo: TournamentSettingFull;
  public tournamentNames: String[];
  public selectedTournament: String;
  public template: String;
  constructor() {
    this.tournamentInfo = new TournamentSettingFull();
    this.tournamentNames = [
      'name', 'name2','name3', 'name4','name5', 'name6','name7', 'name8'
    ]
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
