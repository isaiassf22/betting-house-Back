## About
i'ts a betting-house project. You can bet on available football matches and earn money.

## render deploy

https://bethouse-api.onrender.com

use https://bethouse-api.onrender.com/participants to see the list of participants
or post your own participant.
 
## How to run for development

 -Clone this repository
 -Install all dependencies


 

```bash
npm i
```

 -Create a PostgreSQL database with whatever name you want
- Configure the `.env` file using the `.env.example` file (see "Running application locally or inside docker section" for details)
 -Run all migrations

```bash
npm run dev:migration:run
```
 -Run the back-end in a development environment:

```bash
npm run dev
```

## How to run tests

 -Follow the steps in the last section
 -Configure the `.env.test` file using the `.env.example` file (see "Running application locally or inside docker" section for details)
 -Run all migrations:

```bash
npm run test:migration:run
```

 Run test:

```bash
npm run test
```



## Building for production


```bash
npm run build



## testing nova branch