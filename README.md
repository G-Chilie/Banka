[![Build Status](https://travis-ci.org/G-Chilie/Banka.svg?branch=develop)](https://travis-ci.org/G-Chilie/Banka)  [![Coverage Status](https://coveralls.io/repos/github/G-Chilie/Banka/badge.svg?branch=develop)](https://coveralls.io/github/G-Chilie/Banka?branch=develop) [![Maintainability](https://api.codeclimate.com/v1/badges/990acb5b35ea4b885c03/maintainability)](https://codeclimate.com/github/G-Chilie/Banka/maintainability)




# Banka-UI

Banka is a light-weight core banking application that powers banking operations like account creation, customer deposit and withdrawals. This app is meant to support a single bank, where users can signup and create bank accounts online, but must visit the branch to withdraw or deposit money..

The project is managed using [Pivotal Tracker](https://www.pivotaltracker.com). You can view the board [here](https://www.pivotaltracker.com/n/projects/2321462).

You can view the website to Banka UI here: [Banka](https://g-chilie.github.io/Banka/)

## Features

1. User (client) can sign up.
2. User (client) can login.
3. User (client) can create an account.
4. User (client) can view account transaction history.
5. User (client) can view a specific account transaction.
6. Staff (cashier) can debit user (client) account.
7. Staff (cashier) can credit user (client) account.
8. Admin/staff can view all user accounts.
9. Admin/staff can view a specific user account.
10. Admin/staff can activate or deactivate an account.
11. Admin/staff can delete a specific user account.
12. Admin can create staff and admin user accounts.

## API ENDPOINTS

| Ressource URL | Methods  | Description  |
| ------- | --- | --- |
| / | GET | The index (welcome message) |
| /api/v1/auth/signup | POST | sign up |
| /api/v1/auth/login | POST | login |
| /api/v1/accounts | POST | Create bank account  |
| /api/v1//accounts/:accountNumber | PATCH | activate or deactivate an account |
| /api/v1/accounts/:accountNumber | DELETE | delete an account |
| /api/v1//transactions/:accountNumber/credit | POST | credit an account |
| /api/v1/meetups/transactions/:accountNumber/debit| POST | debit an account |



### Language
```
*Javascript*
```
### Server Environment
```
 *NodeJS* (run time Environment for running JS codes)
 ```
### Framework
```
 *Express* (used for building fast APIs)
 ```
### Testing Framework
```
 *Mocha* and *Chai*
 ```
### Style Guide
```
*Airbnb*
```
### Continuous Integration
```
Travis CI
```
### Test Coverage
```
nyc
```
### Git badge
```
coveralls
```
### Deployment
```
Heroku
```
### APP link Example

[heroku link](https://dashboard.heroku.com/apps/banka-chi)

## Getting Started
These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See deployment for notes on how to deploy the project on a live system.

## Prerequisites
To install the software on your local machine, you need first to clone the repository or download the zip file and once this is set up you are going to need this packages. [NodeJS]

```
 [Node Package Installer - NPM] this usually comes with Node or YARN in case NPM doesn't work.
```

## Installing
The installation of this application is fairly straightforward, After cloning this repository to your local machine,CD into the package folder using your terminal, run the following

```
> npm install
```

It will install the node_modules which will help you run the project on your local machine.

## Run the server
```
> npm start
```
## Run the test
```
> npm test
```


---

## License & copyright
Copyright (c) chinweoke okonkwo, Software developer
