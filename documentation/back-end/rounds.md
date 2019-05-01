# 1. Добавление уровня (раунда или перерыва)  
POST http://localhost:8081/poker-shmoker/tournaments/${tournament ID}/rounds  
Пример тела запроса  
{
  "ante": 0,
  "bigBlind": 0,
  "chipUp": true,
  "duration": 0,
  "gameName": "PINEAPPLE",
  "gameType": "LIMIT",
  "roundType": "LEVEL",
  "smallBlind": 0
}  
Пример ответа  
{
  "id": "1789ea52-dd17-4dfb-8374-720ea7820e31",
  "position": 1,
  "number": 1,
  "duration": 0,
  "timeLeft": 0,
  "chipUp": true,
  "gameName": "PINEAPPLE",
  "gameType": "LIMIT",
  "smallBlind": 0,
  "bigBlind": 0,
  "ante": 0,
  "roundType": "LEVEL",
  "tournamentID": "22de8f76-8e0a-4c70-b62c-eb6d2d190a07"
}  

# 2. Обновление уровня  
PUT http://localhost:8081/poker-shmoker/tournaments/${tournament ID}/rounds  
Пример тела запроса  
{
  "id": "1789ea52-dd17-4dfb-8374-720ea7820e31",
  "position": 1,
  "number": 1,
  "duration": 0,
  "timeLeft": 0,
  "chipUp": true,
  "gameName": "PINEAPPLE",
  "gameType": "LIMIT",
  "smallBlind": 0,
  "bigBlind": 0,
  "ante": 10,
  "roundType": "LEVEL",
  "tournamentID": "22de8f76-8e0a-4c70-b62c-eb6d2d190a07"
}  
Пример ответа  
{
  "id": "1789ea52-dd17-4dfb-8374-720ea7820e31",
  "position": 1,
  "number": 0,
  "duration": 0,
  "timeLeft": 0,
  "chipUp": true,
  "gameName": "PINEAPPLE",
  "gameType": "LIMIT",
  "smallBlind": 0,
  "bigBlind": 0,
  "ante": 10,
  "roundType": "LEVEL",
  "tournamentID": "22de8f76-8e0a-4c70-b62c-eb6d2d190a07"
}

# 3. Получение отсортированного списка уровней конкретного турнира  
GET http://localhost:8081/poker-shmoker/tournaments/${tournament ID}/rounds  
Пример ответа  
[
  {
    "id": "1789ea52-dd17-4dfb-8374-720ea7820e31",
    "position": 1,
    "number": 0,
    "duration": 0,
    "timeLeft": 0,
    "chipUp": true,
    "gameName": "PINEAPPLE",
    "gameType": "LIMIT",
    "smallBlind": 0,
    "bigBlind": 0,
    "ante": 10,
    "roundType": "LEVEL",
    "tournamentID": "22de8f76-8e0a-4c70-b62c-eb6d2d190a07"
  }
]

# 4. Получение конкретного уровня турнира  
GET http://localhost:8081/poker-shmoker/tournaments/${tournament ID}/rounds/${position}  
Пример ответа  
{
  "id": "1789ea52-dd17-4dfb-8374-720ea7820e31",
  "position": 1,
  "number": 0,
  "duration": 0,
  "timeLeft": 0,
  "chipUp": true,
  "gameName": "PINEAPPLE",
  "gameType": "LIMIT",
  "smallBlind": 0,
  "bigBlind": 0,
  "ante": 10,
  "roundType": "LEVEL",
  "tournamentID": "22de8f76-8e0a-4c70-b62c-eb6d2d190a07"
}

# 5. Удаление уровня у турнира  
DELETE http://localhost:8081/poker-shmoker/tournaments/${tournament ID}/rounds/${position}  
Код возврата 204
