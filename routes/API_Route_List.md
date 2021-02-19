## GET  
* /logout  - Logs out  (result: no changes)
* /api/user_data - ??  
* /api/themes- Gets alls themes possible  (result: works fine)
* /api/moods - Gets all moods possible  (result: works fine)
* /api/activities - Gets all activities  (result: works fine)
* /api/quotes - Gets all quote  (result: works fine)
* /api/user/:id  - Gets current user id and email with theme  (result: cannot get)
* /api/userdata/:UserId - Gets current user information  

## POST   
* /api/login  - Authentification with email and password  (result: bad request)
* /api/signup - Register new account with email  (result: User.email cannot be null)
* /api/userdata - Add entry for mood with activity for current user ()

## PUT  
* /api/user/:id - Change theme for current user  