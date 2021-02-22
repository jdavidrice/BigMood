 <span align="center">   
  
# BigMood 
  
[![Build Status](https://travis-ci.com/espoldi/bigmood.svg?branch=main)](https://travis-ci.com/espoldi/bigmood)
![GitHub commits since latest release (by SemVer)](https://img.shields.io/github/commits-since/espoldi/BigMood/latest/main) 
[![GitHub license](https://img.shields.io/github/license/espoldi/bigmood)](https://github.com/espoldi/bigmood/blob/master/LICENSE) 

</span>  

## Table of Contents  
* [Description](#Description)  
* [Motivation](#Motivation)  
* [User Story and Details](#User-Story-and-Details)  
* [Installation and Usage](#Installation-and-Usage)  
* [Images of the app](#Images-of-the-app)  
* [Team Roles](#Team-Roles)  
* [Future Development](#Future-Development)
* [Credits](#Credits) 
* [License](#License)  
* [Contact](#Contact) 


## Description  

The "BigMood" web app gives users an easy way to track their mood throughout the day. After they are asked to create an account, users will log in to the app and create a new entry where they are prompted to report how they are feeling on a 1-5 scale (their mood), and what their current activity is. They will also be presented with a randomly chosen inspirational quote. On subsequent logins, in addition to recording their current mood and activity, users will be able to view all past entries, see a graph displaying their average mood, view their most used activity, and change the theme of the app. 

The deployed app can be found online here: [BigMood App](https://https://bigmoodapp.herokuapp.com/)
 
*   [Return to Top](#BigMood)  

## Motivation   

This app was designed to address the issue of wanting to become more aware of changes in mood throughout the day. It gives our users a simple, non-obtrusive way to track their mood and accompanying activities, to ultimately help them become more aware of their mental states. Noticing and identifying moods, and being able to look back and analyze mood changes, will allow our users to focus more on doing activities that are correlated with a positive mood, and to hopefully avoid those activities that are correlated with negative mood. 

*   [Return to Top](#BigMood)  

## User Story and Details

User Story Acceptance Criteria
```
AS an end-user of the BigMood app, 
I Want to sign up for the app with my email, username, and password,  
SO that I can log in easily whenever I want to use the app.
WHEN I log in, I want to click on a button to open a window and choose my current "mood level," on a scale of one to five, and my current activity, from a variety of choices. 
WHEN I click on the "Latest Quote" link, I want to see a new inspirational quote.
WHEN I click on the "Most Used Activity" link, I want to see the most common activity that I have logged with the app.
WHEN I click on the "Average Mood" link, I want to see an image that displays my average mood,
SO that I can connect my mood changes with my activities throughout the day. 
WHEN I view the "All Entries" list, I want to see all of my mood/activity entries since signing up for the app. 
WHEN I click on the side-menu icon, I want to view my username, and be presented with an option to choose the color theme of the app. 
WHEN I want to log out of the app, I will see a "Logout" button under the color theme switcher.
WHEN I want to see the developers who make the app, I will see links to their GitHub profiles under the Logout button. 
```
This Node.js app was created with the following npm packages: bcryptjs, dotenv, express, express-handlebars, express-session, mysql2, passport, passport-local, and sequelize. It also contains the development dependencies eslint, eslint-config-airbnb-base, eslint-plugin-import, and nodemon. The app utilizes Travis CI and is set up for automatic deployment on Heroku. 

*   [Return to Top](#BigMood)  

## Installation and Usage  

There is nothing to install to use this web app. New users must create a login that requires them to enter in an email address, username, and password. They will then be presented with a Dashboard where they can see relevant statistics about their mood/activity entries, and a button to create a new entry. After they create a new entry, the app will immediately save and display the entry in the "All Entries" list, and incorporate the new data into the Average Mood and Most Used Activity tabs. Users will also be able to read a new inspirational quote every time that they log in to the app, and will be able to alter the color theme of the app through a drop-down menu accessed through a side-menu icon. Users will also be able to Logout of the app or view the GitHub profiles of the developers by accessing the side-menu. 
 

*   [Return to Top](#BigMood)  

## Image of the App   
  
![BigMood](/public/assets/img/big_mood_app_signup.png)

*   [Return to Top](#BigMood)  

## Team Roles  

- Front-end work:  
    - Emily Spoldi   
    - Qi Feng

- Back-end work:   
    - Jeremy Rice   
    - Delph-Sunny  

*   [Return to Top](#BigMood)  

## Future Development  

A feature that we would like to add to the app is the ability to allow users to enter in their own activities, and keep those activities reserved for only their use.  

*   [Return to Top](#BigMood)  

## Credits  
 
Icon made by Freepik from [www.flaticon.com](https://www.flaticon.com/)

*   [Return to Top](#BigMood)  

## License  

Copyright (c) 2021 Emily Spoldi, Qi Feng, DT, Jeremy Rice. This project is [MIT](https://choosealicense.com/licenses/mit/) licensed.  

*   [Return to Top](#BigMood)  

## Contact  
GitHub: 
[Emily](https://github.com/espoldi), 
[Jeremy](https://github.com/jdavidrice), 
[Delphine](https://github.com/Delph-Sunny), 
[Qi](https://github.com/qifeng86)  

*   [Return to Top](#BigMood)  
---

