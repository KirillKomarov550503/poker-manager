# Настройки турнира  <br>

## 1. Создание и обновление общих настроек турнира   
PUT http://localhost:8081/poker-shmoker/tournament/${tournament ID}/configs/general  
Пример тела запроса  
{
  "buyIn": 20.5,
  "chipsAmount": 20,
  "commission": 20.5
}  
Пример ответа  
{
  "id": "6b2c1d50-2bbd-44ef-b0ce-cd996c75062a",
  "buyIn": 20.5,
  "chipsAmount": 20,
  "commission": 20.5,
  "tournamentID": "5b30ccca-a466-46ab-8c3e-bca6c4310736"
}  

## 2. Получение общих настроек турнира  
GET http://localhost:8081/poker-shmoker/tournament/${tournament ID}/configs/general  
Пример ответа  
{
  "id": "6b2c1d50-2bbd-44ef-b0ce-cd996c75062a",
  "buyIn": 20.5,
  "chipsAmount": 20,
  "commission": 20.5,
  "tournamentID": "5b30ccca-a466-46ab-8c3e-bca6c4310736"
}

## 3. Создание и обновление других настроек  
PUT http://localhost:8081/poker-shmoker/tournament/${tournament ID}/configs/other  
Пример запроса  
{
  "chipsAmount": 0,
  "commission": 0,
  "configPresent": true,
  "gameConfigType": "REBUY"
}  
Пример ответа  
{
  "id": "6cbc60c6-0976-4772-bd94-860bd264991a",
  "gameConfigType": "REBUY",
  "chipsAmount": 0,
  "commission": 0,
  "configPresent": true,
  "tournamentID": "22de8f76-8e0a-4c70-b62c-eb6d2d190a07"
}

## 4. Получение других настроек турнира  
GET http://localhost:8081/poker-shmoker/tournament/${tournament ID}/configs/other  
Пример ответа  
{
  "id": "6cbc60c6-0976-4772-bd94-860bd264991a",
  "gameConfigType": "REBUY",
  "chipsAmount": 0,
  "commission": 0,
  "configPresent": true,
  "tournamentID": "22de8f76-8e0a-4c70-b62c-eb6d2d190a07"
}  
