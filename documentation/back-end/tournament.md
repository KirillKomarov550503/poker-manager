# 1. Создание турнира  
POST http://localhost:8081/poker-shmoker/tournaments  
Пример тела запроса в JSON:  
{
  "generalConfigDTO": {
    "buyIn": 21,
    "chipsAmount": 100,
    "commission": 5.5
  },
  "otherConfigDTO": {
    "chipsAmount": 57,
    "commission": 12.5,
    "configPresent": true,
    "gameConfigType": "REBUY"
  },
  "tournamentDescription": "NaVi win",
  "tournamentName": "NaVi"
}  
Пример ответа в JSON  
{
  "id": "4c75c9c0-7f93-4ee6-b94f-83a9d00a14b0",
  "tournamentName": "NaVi",
  "tournamentDescription": "NaVi win",
  "generalConfigDTO": {
    "id": "ed46e575-a697-4594-916e-b51e8122c302",
    "buyIn": 21,
    "chipsAmount": 100,
    "commission": 5.5,
    "tournamentID": "4c75c9c0-7f93-4ee6-b94f-83a9d00a14b0"
  },
  "otherConfigDTO": {
    "id": "73b1a7ba-2385-4d21-9f9b-bb833fe26c9e",
    "gameConfigType": "REBUY",
    "chipsAmount": 57,
    "commission": 12.5,
    "configPresent": true,
    "tournamentID": "4c75c9c0-7f93-4ee6-b94f-83a9d00a14b0"
  }
}   

# 2. Обновление турнира  
PUT http://localhost:8081/poker-shmoker/tournaments/${Tournament ID}  
Пример запроса  
{
    "tournamentName": "NaVi",
    "tournamentDescription": "NaVi win. I believe",
    "generalConfigDTO": {
      "id": "ed46e575-a697-4594-916e-b51e8122c302",
      "buyIn": 21,
      "chipsAmount": 100,
      "commission": 5.5,
      "tournamentID": "4c75c9c0-7f93-4ee6-b94f-83a9d00a14b0"
    },
    "otherConfigDTO": {
      "id": "73b1a7ba-2385-4d21-9f9b-bb833fe26c9e",
      "gameConfigType": "REBUY",
      "chipsAmount": 57,
      "commission": 12.5,
      "configPresent": true,
      "tournamentID": "4c75c9c0-7f93-4ee6-b94f-83a9d00a14b0"
    }
}    
Пример ответа  
{
  "id": "4c75c9c0-7f93-4ee6-b94f-83a9d00a14b0",
  "tournamentName": "NaVi",
  "tournamentDescription": "NaVi win. I believe",
  "generalConfigDTO": {
    "id": "ed46e575-a697-4594-916e-b51e8122c302",
    "buyIn": 21,
    "chipsAmount": 100,
    "commission": 5.5,
    "tournamentID": "4c75c9c0-7f93-4ee6-b94f-83a9d00a14b0"
  },
  "otherConfigDTO": {
    "id": "73b1a7ba-2385-4d21-9f9b-bb833fe26c9e",
    "gameConfigType": "REBUY",
    "chipsAmount": 57,
    "commission": 12.5,
    "configPresent": true,
    "tournamentID": "4c75c9c0-7f93-4ee6-b94f-83a9d00a14b0"
  }
}  

# 3. Получение турнира по ID  
GET http://localhost:8081/poker-shmoker/tournaments/${Tournament ID}  
Пример ответа:  
{
  "id": "4c75c9c0-7f93-4ee6-b94f-83a9d00a14b0",
  "tournamentName": "NaVi",
  "tournamentDescription": "NaVi win",
  "generalConfigDTO": {
    "id": "ed46e575-a697-4594-916e-b51e8122c302",
    "buyIn": 21,
    "chipsAmount": 100,
    "commission": 5.5,
    "tournamentID": "4c75c9c0-7f93-4ee6-b94f-83a9d00a14b0"
  },
  "otherConfigDTO": {
    "id": "73b1a7ba-2385-4d21-9f9b-bb833fe26c9e",
    "gameConfigType": "REBUY",
    "chipsAmount": 57,
    "commission": 12.5,
    "configPresent": true,
    "tournamentID": "4c75c9c0-7f93-4ee6-b94f-83a9d00a14b0"
  }
}  

# 4. Получение списка всех турниров  
GET http://localhost:8081/poker-shmoker/tournaments  
Привер ответа  
[
  {
  "id": "4c75c9c0-7f93-4ee6-b94f-83a9d00a14b0",
  "tournamentName": "NaVi",
  "tournamentDescription": "NaVi win",
  "generalConfigDTO": {
    "id": "ed46e575-a697-4594-916e-b51e8122c302",
    "buyIn": 21,
    "chipsAmount": 100,
    "commission": 5.5,
    "tournamentID": "4c75c9c0-7f93-4ee6-b94f-83a9d00a14b0"
  },
  "otherConfigDTO": {
    "id": "73b1a7ba-2385-4d21-9f9b-bb833fe26c9e",
    "gameConfigType": "REBUY",
    "chipsAmount": 57,
    "commission": 12.5,
    "configPresent": true,
    "tournamentID": "4c75c9c0-7f93-4ee6-b94f-83a9d00a14b0"
  }
},
{
  "id": "4c75c9c0-7f93-4ee6-b94f-83a9d00a14b0",
  "tournamentName": "NaVi",
  "tournamentDescription": "NaVi win",
  "generalConfigDTO": {
    "id": "ed46e575-a697-4594-916e-b51e8122c302",
    "buyIn": 21,
    "chipsAmount": 100,
    "commission": 5.5,
    "tournamentID": "4c75c9c0-7f93-4ee6-b94f-83a9d00a14b0"
  },
  "otherConfigDTO": {
    "id": "73b1a7ba-2385-4d21-9f9b-bb833fe26c9e",
    "gameConfigType": "REBUY",
    "chipsAmount": 57,
    "commission": 12.5,
    "configPresent": true,
    "tournamentID": "4c75c9c0-7f93-4ee6-b94f-83a9d00a14b0"
  }
}
]  

# 5. Удаление турнира по ID  
DELETE http://localhost:8081/poker-shmoker/tournaments/5b30ccca-a466-46ab-8c3e-bca6c4310736  
Код ответа 204


