# BynderAutomationFramework -- Guidelines
Framework is based on cypress

# Usage
clone the repo and do npm ci

fixtures --> contains userdata.json , which stores all the data provided to the test cases

integration --> Folder contains page objects and test cases

Reports --> Mochawesome reports are created here

support --> contains command.js where we write commonFunctions

# Execution on Local
Scenario can be executed from cmd prompt or VS code/Intellij IDE. 

* open the terminal and run the following command

   npm run test

# Execution on Docker
1)run the following command to build the image from docker file

docker build -t cypress .

or

docker-compose up

# Reporting
Mochawesome reports are automatically generated and stored in the report folder.



