# Description

This project uses JS library supertest, mocha and chia to implement automated API tests for checking three acceptance criteria against a public API `https://api.tmsandbox.co.nz/v1/Categories/6327/Details.json?catalogue=false`

# Running locally

1. Download and install [Node.js](https://nodejs.org/en/download/) and [npm](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm) if needed.
2. Clone and checkout souce code from https://github.com/chi-77/api-test.git
    ```
    git clone https://github.com/chi-77/api-test.git
    cd api-test
    git checkout dev
    ```
3. Install dependencies via running the command in a terminal.
    ```
    npm install
    ```
4. Run tests 
    ```
    npm test
    ```
    This will run all automated tests in this project in a local environment.