## Overview
SecuriTree is an access control management application that provides a visual tree view of the security and access control units installed in a client’s system. 
This application will allow authorized security operatives to monitor and manage each physical security and access control unit, at a client’s premises from one central location.

### Web App
The web based page that allows only authenticated user to login/logout, view the system hierarchy and manage the state of a door. 


### Server
The Node.js server handles web app requests,user authentication using the Json Web tokens, and builds the system hierarchy alongside updating the state of doors. The server runs independently of the app, thus, our securitree application is secured. 

### Database
The json database stores the app's users, areas, doors and access_rules. The server is able to query the database to retrieve data which is then sent to the web app. 

### Technologies used
Bullet list ReactJs
Bullet list HTML
Bullet list CSS
Bullet list Nodejs


## Setup prerequisite
1. Download and run install `git` from https://git-scm.com/download/win
2. Download and run install `nodejs` from https://nodejs.org/dist/v16.13.2/node-v16.13.2-x64.msi

## Installation

1. Download or clone project using `git clone https://github.com/ryancliffew44/epiusetask.git` from Git Bash 
2. Open terminal or command prompt in the project root directory
3. Install node libraries using `npm install`
4. Run the script using `npm run dev`
5. Access the web app from http://localhost:3000 on a web browser.
6. Login using one of the registered users credentials.

