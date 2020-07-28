# [WebdriverIO](https://webdriver.io/)  UI Automation Framework

  

## Tech

  **Pre-requisite:**
  You will need to have [Node.js](http://nodejs.org/) and [NPM](https://www.npmjs.org/) installed on your machine. Check out their project websites for more instructions

**FrameWork add-ons:**

  

*  [selenium-standalone] - NPM package that automatically sets up the standalone server and all required drivers (Chrome, Firefox, ie) for you

*  [chromedriver] - Install chrome driver to run tests on chrome browser

*  [JSON] - Test data provider (data driven)

*  [Allure-Report] - Generate HTML Report

*  [Babel] - Compiler for test files

*  [Mocha] - Added adapter for Mocha testing framework in the config file

*  [Chai] - Chai is an _assertion library_, similar to Node's built-in `assert`. It makes testing much easier by giving you lots of assertions you can run against your code

*  [wdio.conf.js] - The configuration file contains all necessary information to run your test suite. It is a node module that exports a JSON
	* Browser selection
	* Timeouts
	* Organizing suites
	* BDD framework selection
	* Before/After test suite setup
	
* [Page Object Pattern] - There are no additional packages required to create page objects. It turns out that  `Object.create`  provides all necessary features we need:

-   inheritance between page objects
-   lazy loading of elements
-   encapsulation of methods and actions

The goal behind page objects is to abstract any page information away from the actual tests. Ideally you should store all selectors or specific instructions that are unique for a certain page in a page object, so that you still can run your test after you’ve completely redesigned your page.

First off we need a main page object that we call  `Page`. It will contain general selectors or methods all page objects will inherit from. Apart from all child page objects  `Page`  is created using the prototype model

We will always export an instance of a page object and never create that instance in the test. Since we are writing end to end tests we always see the page as a stateless construct the same way as each http request is a stateless construct. Sure, the browser can carry session information and therefore can display different pages based on different sessions, but this shouldn’t be reflected within a page object. These state changes should emerge from your actual tests.

**Note:** `Assertions, constants, test data are seperated form the tests for easy maintenance`

## Installation

  

WebdriverIO requires [Node.js](https://nodejs.org/en/download/) to run.

  

Install the dependencies and devDependencies and start running test

  

```sh

$ cd Hubdoc

$ npm install

$ npm test

$ npm run generateReport

```

  

### Ref# `Added tutorial video in the repository`
