import { Component, OnInit } from '@angular/core';
import {TournamentSettingFull} from '../tournament-setting-full';

@Component({
  selector: 'app-rounds',
  templateUrl: './rounds.component.html',
  styleUrls: ['./rounds.component.css']
})
export class RoundsComponent implements OnInit {
  tournamentInfo: TournamentSettingFull;
  constructor() {  }
  ngOnInit() {
  }

}
