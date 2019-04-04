import { Player} from '../player';

export class PlayerList{
    public constructor(){
        this.player = new Player();
        this.parametrs = {
            selected: false,
            changed: true
        }
    }

    player: Player;
    parametrs: {
        selected: boolean;
        changed: boolean;
    }    
}