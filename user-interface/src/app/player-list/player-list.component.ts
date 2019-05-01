import { Component, OnInit } from '@angular/core';

import { PlayerList } from './playerList';
import { DataBaseService } from '../data-base.service';
import { string, number } from 'prop-types';
import { Player } from '../player';
import { template } from '@angular/core/src/render3';
import { Observable } from 'rxjs';
import { PlayerCount } from './playerCount';
@Component({
  selector: 'app-player-list',
  templateUrl: './player-list.component.html',
  styleUrls: ['./player-list.component.css']
})
export class PlayerListComponent implements OnInit {
  players: PlayerList[];
  selectedPlayer: PlayerList;
  checkSelectedPlayer: boolean;
  templatePlayer: PlayerList;
  addPlayerFlag: boolean;
  playerCount: PlayerCount;
  playerPagStart: number;
  playerPagEnd: number;

  constructor(private dataBaseService: DataBaseService) { }

  ngOnInit() {
    this.playerCount = new PlayerCount();
    this.players = [];
    this.templatePlayer = new PlayerList();
    this.selectedPlayer = this.templatePlayer;
    this.templatePlayer.parametrs.changed = true;
    this.getPlayer();
    this.getCountsOfPlayer();
    this.playerPagStart = 1;
    this.playerPagEnd = 20;
  }
  addPlayer() {
    if (this.checkSelectedPlayer === false && this.players !== undefined) {
      this.checkSelectedPlayer = true;
      this.addPlayerFlag = true;
      this.players.unshift(new PlayerList());
    } else {
      this.players.unshift(new PlayerList());
    }
  }
  onChange(player) {
    if (
      player.parametrs.changed === false &&
      this.checkSelectedPlayer === false
    ) {
      player.parametrs.changed = true;
      this.checkSelectedPlayer = true;
    } else if (player.parametrs.changed === true) {
      player.parametrs.changed = false;
      player.parametrs.selected = false;
      this.checkSelectedPlayer = false;
    }
  }
  UpdateInfo(player) {
    if (this.addPlayerFlag === true) {
      this.dataBaseService
        .addPlayers(player.player)
        .subscribe(pl => (player.player = pl));
      console.log(player);
      player.parametrs.changed = false;
      player.parametrs.selected = false;
      this.checkSelectedPlayer = false;
      this.addPlayerFlag = false;
      this.playerCount = {
        count: this.players.length
      };
    } else {
      console.log('upd');
      this.dataBaseService
        .UpPlayer(player.player)
        .subscribe(pl => (player.player = pl));
      this.checkSelectedPlayer = false;
      this.addPlayerFlag = false;
      player.parametrs.changed = false;
      player.parametrs.selected = false;
    }
  }
  Cancel(player) {
    if (this.addPlayerFlag === true) {
      this.players.shift();
      this.addPlayerFlag = false;
    } else {
      this.dataBaseService
        .getPlayerByID(player.player.id)
        .subscribe(pl => (player.player = pl));
      console.log(player);
      player.parametrs.changed = false;
      player.parametrs.selected = false;
      this.checkSelectedPlayer = false;
    }
  }
  onSelect(player) {
    if (
      player.parametrs.selected === false &&
      player.parametrs.changed === false
    ) {
      player.parametrs.selected = true;
      console.log(player.parametrs.selected);
    } else {
      player.parametrs.selected = false;
    }
  }
  deletePlayer() {
    let temp: PlayerList[];
    const count: number = this.players.length;
    temp = this.players.filter(pl => pl.parametrs.selected);
    for (let i = 0; i < temp.length; i++) {
      this.dataBaseService.deletePlayer(temp[i].player.id).subscribe(() => {
        console.log(`Player with Id = some deleted`);
      });
    }
    console.log(count);
    this.players = this.players.filter(
      player => player.parametrs.selected != true
    );
    this.playerCount = {
      count: this.players.length
    };
  }
  getPlayer() {
    this.players = [];
    this.dataBaseService.getPlayerList().subscribe(pl => {
      console.log(pl);
      for (let i = 0; i < pl.length; i++) {
        this.players[i] = new PlayerList();
        this.players[i].player = pl[i];
        this.players[i].parametrs.changed = false;
      }
    });
  }

  getCountsOfPlayer() {
    this.dataBaseService.counts().subscribe(c => {
      console.log(c);
      this.playerCount = c;
    });
  }
  next() {
    if (this.playerCount.count > this.playerPagEnd) {
      this.players = [];
      this.dataBaseService
        .getNextPlayer(this.playerPagStart + 19, this.playerPagEnd + 19)
        .subscribe(pl => {
          console.log(pl);
          for (let i = 0; i < pl.length; i++) {
            this.players[i] = new PlayerList();
            this.players[i].player = pl[i];
            this.players[i].parametrs.changed = false;
          }
        });
      this.playerPagStart += 20;
      this.playerPagEnd += 20;
    }
  }
  prev() {
    if (this.playerPagStart - 20 > 0) {
      this.players = [];
      this.dataBaseService
        .getNextPlayer(this.playerPagStart - 19, this.playerPagEnd - 19)
        .subscribe(pl => {
          console.log(pl);
          for (let i = 0; i < pl.length; i++) {
            this.players[i] = new PlayerList();
            this.players[i].player = pl[i];
            this.players[i].parametrs.changed = false;
          }
        });
      this.playerPagStart -= 20;
      this.playerPagEnd -= 20;
    }
  }
}
