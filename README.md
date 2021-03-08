# Deployment Instructions (Node.js and PostgreSQL are required for this project to work):
Included batch file for starting the front/back end processes on windows, use the manual commands for other environments

## PostgreSQL user and database creation
1) Create a user with username "challenger" and password "challengePass" in your PostgreSQL, this user must be able to create databases
	eg. "createuser -d -P challenger;" and enter "challengePass" in the password prompt
2) Create a database called "challenge" eg. "create database challenge;"
3) Quit PostgreSQL and import the provided database with "psql -U challenger -d challenge < challengeData" in the command line from the root directory of the repo

NOTE: You can use different database / user names or passwords, change the PostgreSQL settings at the start of ./node-level/server.js to use different names, 
	host locations, or database ports

## Node and React project building
For first time launch, go into both the node-level and react-level folders and run "npm install" in each of them

Running the included startProj.bat will launch both the Node.js and react processes, which are in separate folders with their own npm commands
	To run these processes manually, type "npm run dev" in the node-level directory, then "npm start" in the react-level directory, you will likely need to do these commands in seperate terminals

	If the react project starts before the server does, you may have to refresh the page to get it working properly, but I've never seen this happen

# Structural/Design Details
I decided to keep the front end and back end very separate, each has their own node_modules and are run as separate, but interracting, processes.
	For a project this small, it may have been better to avoid the extra bulk of 2 node_modules packages, but I thought more separation between the front and back end would
	better encapsulate normal development, and be more scalable.

Each of the different types of information boxes have their own Component, which could each be updated to give them more complete functionality.
	I decided to keep them all in one file instead of in their own files in a components directory for the sake of simplicity, but changing to that structure would be good if expanding on the project

The project was tested on a 1920 x 1080 monitor, other resolutions and levels of zoom may lead to awkward spacing of elements

Icons taken from Font Awesome, they are imported via url, so the project won't look right without an internet connection
World map image taken from https://all-free-download.com/free-vector/simple-world-map-vector.html
This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

