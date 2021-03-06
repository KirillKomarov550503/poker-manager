import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PlayerListComponent } from './player-list/player-list.component';
import { GameSettingsComponent } from './game-settings/game-settings.component';
import { RoundsComponent } from './rounds/rounds.component';
import { DataBaseComponent } from './data-base/data-base.component';

const routes: Routes = [
  { path: '', redirectTo: '/data-base', pathMatch: 'full' },
  { path: 'data-base', component: PlayerListComponent },
  { path: 'game-settings', component: GameSettingsComponent },
  { path: 'rounds', component: RoundsComponent },
  { path: 'data-base-test', component: DataBaseComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
