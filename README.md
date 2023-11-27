# Katalon-Cypress-Integration
This repository showcase's Integration between Katalon and Cypress.


**To execute code from this repository:**

Step 1 : git clone https://github.com/BhagyeshNanwani/Katalon-Cypress-Integration.git

Step 2 : Go inside the project by doing cd Katalon-Cypress-Integration

Step 3 : Execute command - cd cypress && npm install && npm test

Note : Make sure that cypress and node are installed on your machine


**Steps to be followed for performing integration by creating project from the scratch:**

1. Create a new folder which will host your cypress project(name : Cypress Demo)
2. Go Inside that folder (cd Cypress Demo)
3. Run npm init so that folder gets package.json file
4. Read through this documentation link (https://docs.cypress.io/guides/getting-started/installing-cypress#What-you-ll-learn)
5. Open cypress using command : npx cypress open
6. Create a new spec file and name it as EndToEnd.spec.js, edit that spec file is vs code and ensure that test script is ready and running.

7. Go inside package.json and add following dependencies and script

  scripts  

"scripts": {
    "build": "tsc",
    "test": "node cypress-cli.js"
  },


   dev dependencies  

"devDependencies": {
    "cypress": "^10.9.0",
    "@tsconfig/node10": "^1.0.9",
    "typescript": "^4.1.3"
  },


   dev dependencies  

  "dependencies": {
    "@katalon/testops-cypress": "^1.2.2"
  }

8.Copy testopsconfig.json from https://github.com/katalon-studio/testops-report-js and cypress - cli file
9. Run command for execution cd cypress && npm install && npm test


