# 1. Создание турнира  
POST http://localhost:8081/poker-shmoker/tournaments  
Пример тела запроса в JSON:  
{
  "tournamentDescription": "Haha-ahah",
  "tournamentName": "HH"
}  
Пример ответа в JSON  
{
  "id": "5b30ccca-a466-46ab-8c3e-bca6c4310736",
  "tournamentName": "HH",
  "tournamentDescription": "Haha-ahah"
}  

# 2. Обновление турнира  
PUT http://localhost:8081/poker-shmoker/tournaments/${Tournament ID}  
Пример запроса  
{
  "tournamentDescription": "tournament",
  "tournamentName": "HH"
}  
Пример ответа  
{
  "id": "5b30ccca-a466-46ab-8c3e-bca6c4310736",
  "tournamentName": "HH",
  "tournamentDescription": "tournament"
}  

# 3. Получение турнира по ID  
GET http://localhost:8081/poker-shmoker/tournaments/${Tournament ID}  
Пример ответа:  
{
  "id": "5b30ccca-a466-46ab-8c3e-bca6c4310736",
  "tournamentName": "HH",
  "tournamentDescription": "tournament"
}

# 4. Получение списка всех турниров  
GET http://localhost:8081/poker-shmoker/tournaments  
Привер ответа  
[
  {
    "id": "467aef58-8b54-41fe-a6bc-3b8434008286",
    "tournamentName": "string",
    "tournamentDescription": "string"
  },
  {
    "id": "5b30ccca-a466-46ab-8c3e-bca6c4310736",
    "tournamentName": "AAAAAAAA",
    "tournamentDescription": "AA"
  }
]

# 5. Удаление турнира по ID  
DELETE http://localhost:8081/poker-shmoker/tournaments/5b30ccca-a466-46ab-8c3e-bca6c4310736  
Код ответа 204


