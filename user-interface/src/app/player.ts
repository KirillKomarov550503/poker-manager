export class Player {
    constructor() {
        this.id = '-1';
        this.age = 18;
        this.buyInDTO = {
            buy: false,
            endDate: '',
            date: ''
        }
        this.name = 'Name';
        this.patronymic = 'Patronymic';
        this.surname = 'Surname';
    }
    id: string;
    age: number;
    buyInDTO: {
        buy: boolean;
        endDate: string;
        date: string;
    };
    name: string;
    patronymic: string;
    surname: string;
}
