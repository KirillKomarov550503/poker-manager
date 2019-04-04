# PokerShmoker API

## Data Base

**Пример Структуры Информации о игроках**

```
{
        "age":0,
        "buyInDTO": {
            "buy": boolean,
            "endDate": "string",
            "id":"string",
        },
        "id":"string",
        "name":"string",
        "patronymic": "string",
        "surname": "string",
}
```
age - возраст игрока должен быть больше 18 лет, иначе его нельзя добавить в БД. 

endDate - дата окончания действия взноса игрока. Формат ввода: YY-MM-DD

name,patronymic,surname - ФИО игрока.

id - идентификационный номер игрока в БД.

| Имя ссылки | Типо HTTP запроса | Ссылка | Описание | Примечание |
| ------ | ------ | ------ | ------ | ------ |
| getPlayerByID | GET | "href":"http://localhost:8081/poker-shmoker/database/players/1" | возвращает игрока по ID | - |
| updatePlayer | PUT | "href":"http://localhost:8081/rest/user" | редактирует существующий аккаунт | тело запроса содержит Account DTO |
| addPlayer | POST | "href":"http://localhost:8081/poker-shmoker/database/players" | добавляет нового игрока | тело запроса содержит Player DTO и возвращает аккаунт с его уникальным ID |
| deletePlayer | DELETE | "href":"http://localhost:8081/poker-shmoker/database/players?1" | удаляет игрока по ID | - |
| getPlayerList | GET | "href":"http://localhost:8081/rest/user/all" | возвращает игроков с start по end | - |


Пример запроса на сервер c целью получения игрока с id =0c797787-a3d5-4ed7-a9c5-8bbe7ff03f7a:

```
http://localhost:8081/poker-shmoker/database/players/0c797787-a3d5-4ed7-a9c5-8bbe7ff03f7a
```

Пример ответа вышеуказанный запрос:
```
    {
        "id": "0c797787-a3d5-4ed7-a9c5-8bbe7ff03f7a",
        "name": "String",
        "surname": "String",
        "patronymic": "String",
        "age": 19,
        "buyInDTO": {
            "id": "cf0b0550-cdea-45bf-9f28-45b46e973732",
            "date": "2019-03-26",
            "endDate": "2019-12-20",
            "buy": true
        }
    }
```
