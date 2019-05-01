import { Component, OnInit } from '@angular/core';
import { DataBaseService } from '../data-base.service';
import { PlayerList } from '../player-list/playerList';

import { Injectable } from '@angular/core';

@Component({
  selector: 'app-data-base',
  templateUrl: './data-base.component.html',
  styleUrls: ['./data-base.component.css']
})
export class DataBaseComponent implements OnInit {

  players: PlayerList[];
  constructor(
    private readonly dataBaseService: DataBaseService
  ) {
    this.dataBaseService.getPlayerList().subscribe(pl => {
      console.log(pl);
      for (let i = 0; i < pl.length; i++) {
        this.players[i] = new PlayerList();
        this.players[i].player = pl[i];
        this.players[i].parametrs.changed = false;
      }
    });
  }

  ngOnInit() {
  }

}
