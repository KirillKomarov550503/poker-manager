# 1. Добавление игрока.
URL для запроса
  POST http://localhost:8081/poker-shmoker/database/players
  
Пример отправляемого JSON:
{
  "id": "",
  "name": "String",
  "surname": "String",
  "patronymic": "String",
  "age": 20,
  "buyInDTO": {
    "id": "",
    "date": "",
    "endDate": "",
    "buy": false
  }
}

Пример ответа в JSON формате:
{
  "id": "03ddfcfa-ef63-4706-975d-e7efb2c05522",
  "name": "String",
  "surname": "String",
  "patronymic": "String",
  "age": 20,
  "buyInDTO": {
    "id": "a303a020-62a8-4d5b-bbf6-86d490a018fc",
    "date": "",
    "endDate": "",
    "buy": false
  }
}

# 2. Обновление данных об игроке:
PUT http://localhost:8081/poker-shmoker/database/players
Пример отправляемого тела в JSON формате
{
  "age": 18,
  "buyInDTO": {
    "buy": true,
    "endDate": "2019-08-01"
  },
  "id": "03ddfcfa-ef63-4706-975d-e7efb2c05522",
  "name": "String",
  "patronymic": "String",
  "surname": "String"
}
Пример получаемого тела в JSON формате

# 3. Удаление игрока
DELETE http://localhost:8081/poker-shmoker/database/players?ids=${Player ID}&ids=${Player ID}
Код ответа 204

# 4. Получение игрока по ID:
GET http://localhost:8081/poker-shmoker/database/players/${Player ID}

#5. Получение количества игроков:
GET http://localhost:8081/poker-shmoker/database/players/counts
{
  "count": 1
}

#6. Получение игроков по фильтру:
POST http://localhost:8081/poker-shmoker/database/players/filter?start=${начало диапазона}&end=${конец диапазона}
Обязательно задавать начальное и конечно значение для выборки. Возможные значения: 
## 1) operatorType: "EQUALS" (чтобы выбрать игроков, которые произвели взнос), значения поля "value" в 
данном случае - "true" или "false"
Пример тела запроса в JSON:
{
  "operatorType": "EQUALS",
  "value": "true"
}
## 2) operatorType: "LIKE" (для выборки игроков по ФИО), значения поля "value" в данном случае - любые символы,
что введёт пользователь 
Пример тела запроса в JSON:
{
  "operatorType": "LIKE",
  "value": "String"
}
## 3) operatorType: "NO_FILTER" (чтобы просто выбрать из базы игроков без всяких фильтров), значения поля 
"value" в данном случае - null, то есть вместо пустой строки null значение
Пример тела запроса в JSON:
{
  "operatorType": "NO_FILTER",
  "value": null
}
