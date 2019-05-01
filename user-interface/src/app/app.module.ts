import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

import { DataBaseComponent } from './data-base/data-base.component';
import { GameSettingsComponent } from './game-settings/game-settings.component';
import { PlayerListComponent } from './player-list/player-list.component';
import { RoundsComponent } from './rounds/rounds.component';
import { SideBarComponent } from './side-bar/side-bar.component';

@NgModule({
  declarations: [
    AppComponent,
    PlayerListComponent,
    GameSettingsComponent,
    RoundsComponent,
    SideBarComponent,
    DataBaseComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule, HttpClientModule, NgbModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
