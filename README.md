## Overview
A lite clone of Reddit. Features include:
- Users can make posts
- Users can upvote/downvote posts
- Users can save posts
- Users can login

## Stack

- ReactJS
- Node.js
- TypeScript
- MikroORM cli/core/migrations
- PostgreSQL / pg

## Dev Notes 

### False Start
> I started this project using `.tsx` files instead of `.ts` and started to run into trouble with MirkoORM and `.tsx`. Had to restart using `.ts` and `/src` and `/dist` folders.

### Why MikroORM Config File?
> Set up config file to be able to access to migrations from the `cli`

### knex version bug
> Had to version lock "knex" package at `0.21.6` due to bug, found solution here: [connect-ot-postgresql-mikro-orm](https://stackoverflow.com/questions/64527115/connect-ot-postgresql-mikro-orm)