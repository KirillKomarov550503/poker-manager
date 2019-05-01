import { TournamentSetting } from './tournament-setting';
import { Round } from './round';

export class TournamentSettingFull {
    constructor() {
        this.tournamentSet = new TournamentSetting();
        this.AddOnBut = false;
        this.rebuyBut = false;
    }
    tournamentSet: TournamentSetting;
    rebuyBut: boolean;
    AddOnBut: boolean;
}