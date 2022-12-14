[![Quality Gate Status](https://sonarcloud.io/api/project_badges/measure?project=ricardopolanski_tivix_test_challenge&metric=alert_status)](https://sonarcloud.io/summary/new_code?id=ricardopolanski_tivix_test_challenge)

[![Tivix Challenge](https://github.com/ricardopolanski/tivix_test_challenge/actions/workflows/main.yml/badge.svg)](https://github.com/ricardopolanski/tivix_test_challenge/actions/workflows/main.yml)

<H1>How to install and run automated Tivix Challenge test</h1>

<h3>Requirements</h3>

- [NodeJS](https://nodejs.org/en/download/ "NodeJS")

<h3>Steps to execute</h3>

- Clone this repository to your local computer using the following URL: https://github.com/ricardopolanski/tivix_test_challenge
- Run the following comands:

	- Install dependencies
		- npm i

	- Run the test on openMode
		- npx cypress open

	- Run the test on runMode
		- npx cypress run


<h3>About the project</h3>

The project was developed using [Cypress](https://www.npmjs.com/package/cypress "Cypress") Framework and [Gherkin Syntax](https://cucumber.io/docs/gherkin/ "Gherkin Syntax").
Was writen three scenarios as following:
  1. Search Car Filters
  2. Select a Car
  3. Filling up Personal Information

<h3>Bug Report</h3>

[Bug Report Link](bugReport.pdf)
  
<h3>Project Structure</h3>
<pre>
📂---.github
|   \📂---workflows
|         📜 main.yml			# Git Action Config file
📂---cypress
    |   .gitignore
    |
    📂---fixtures
    |       example.json
    |
    📂---integration
    |   \📂---tests
    |      \📂---actions				# Test Actions
    |       |      📜commonActions.js
    |       |      📜personalInfoActions.js
    |       |      📜searchCarActions.js
    |       |      📜selectCarActions.js
    |       |
    |       📂---data					# Auxiliar Information
    |       |      📜dateFunctions.js
    |       |      📜personalInfo.js
    |       |      📜searchInfo.js
    |       |
    |       📂---features				# Gherkin features
    |       |      📜rentCar.feature
    |       |
    |       📂---pageObjects				# Page Elements
    |       |      📜commonElements.js
    |       |      📜personalInfoElements.js
    |       |      📜searchElements.js
    |       |
    |       📂---steps					# Steps Definitions
    |              📜personalInfo.js
    |              📜searchCar.js
    |              📜selectCar.js
 </pre>


 