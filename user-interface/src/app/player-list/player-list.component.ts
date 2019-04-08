import { Component, OnInit } from '@angular/core';

import { PlayerList } from './playerList';
import {DataBaseService} from '../data-base.service';
import { string, number } from 'prop-types';
import {Player} from '../player';
import { template } from '@angular/core/src/render3';
import { Observable } from 'rxjs';
@Component({
  selector: 'app-player-list',
  templateUrl: './player-list.component.html',
  styleUrls: ['./player-list.component.css']
})
export class PlayerListComponent implements OnInit {

  players: PlayerList[];
  selectedPlayer: PlayerList;
  checkSelectedPlayer: boolean = false;
  templatePlayer: PlayerList;
  addPlayerFlag: boolean;
  playerCount: Object;

  constructor(private dataBaseService: DataBaseService) { }

  ngOnInit() {
    this.players = [];
    this.templatePlayer = new PlayerList();
    this.selectedPlayer = this.templatePlayer;
    this.templatePlayer.parametrs.changed = true;
    this.getPlayer();
    this.playerCount = {
      count: 0
    }
  }
  addPlayer(){
    if(this.checkSelectedPlayer === false && this.players !=undefined){
      this.checkSelectedPlayer = true;
      this.addPlayerFlag = true;
      this.players.unshift(new PlayerList());
    }
    else{
      this.players.unshift(new PlayerList());
    }
  }
  onChange(player){
    if(player.parametrs.changed === false &&  (this.checkSelectedPlayer === false)){
     player.parametrs.changed = true;
     this.checkSelectedPlayer = true;
    }
    else if(player.parametrs.changed === true) {
      player.parametrs.changed = false;
      player.parametrs.selected = false;
      this.checkSelectedPlayer = false;
    }
  }
  UpdateInfo(player){
    if(this.addPlayerFlag === true){
    this.dataBaseService.addPlayers(player.player).subscribe(pl => player.player = pl);
    console.log(player);
    player.parametrs.changed = false;
    player.parametrs.selected = false;
    this.checkSelectedPlayer = false;
    this.addPlayerFlag = false;
    }
    else{
      console.log("upd");
      //this.dataBaseService.UpPlayer(player.player);
     /* this.dataBaseService.deletePlayer(player.player.id).subscribe(
        () => console.log(`Player with Id = some deleted`)
      );
      player.player.id = "-1";
      this.dataBaseService.addPlayers(player.player).subscribe(pl => player.player = pl);*/
      this.dataBaseService.UpPlayer(player.player).subscribe(pl => player.player = pl);
      
      this.checkSelectedPlayer = false;
      this.addPlayerFlag = false;
      player.parametrs.changed = false;
      player.parametrs.selected = false;
    }
  }
  Cancel(player){
    if(this.addPlayerFlag === true){
    this.players.shift();
    this.addPlayerFlag = false;
    }
    else{
      this.dataBaseService.getPlayerByID(player.player.id).subscribe(pl => player.player = pl);
      console.log(player);
      player.parametrs.changed = false;
      player.parametrs.selected = false;
      this.checkSelectedPlayer = false;
    }
  }
  onSelect(player){
    if(player.parametrs.selected === false && player.parametrs.changed===false){        
      player.parametrs.selected = true;
      console.log( player.parametrs.selected);
    }
    else{
      player.parametrs.selected = false;
    }
  }
  deletePlayer(){
    /*this.dataBaseService.deletePlayer(this.players.filter(pl=>pl.parametrs.selected)
    .reduce((p, c) =>{
      return p + "&id%" + c.player.id;}, "")
    .substr(1));*/
    let temp: PlayerList[];
    temp = this.players.filter(pl => pl.parametrs.selected);
    for(let i=0; i<temp.length;i++){
      this.dataBaseService.deletePlayer(temp[i].player.id).subscribe(
        () => console.log(`Player with Id = some deleted`)
      );
    }
   /*this.dataBaseService.deletePlayer(this.players.find(pl => pl.parametrs.selected).player.id).subscribe(
     () => console.log(`Player with Id = some deleted`)
   );*/
    this.players = this.players.filter(player => player.parametrs.selected != true);
  }
  getPlayer(){
   this.players = [];
   this.dataBaseService.getPlayerList().subscribe(pl => {
     console.log(pl);
     for(let i=0;i< pl.length;i++){
       this.players[i] = new PlayerList();
       this.players[i].player = pl[i];
       this.players[i].parametrs.changed = false;
     }
   });
  }

  getCountsOfPlayer(){
    this.dataBaseService.counts().subscribe(c => this.playerCount = c)
  }
}
