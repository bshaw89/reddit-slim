import { __prod__ } from "./constants";
import { Post } from "./entities/Post";
import { MikroORM } from '@mikro-orm/core';
import path from 'path';

export default {
  migrations: {
    path: path.join(__dirname, './migrations'), // path to the folder with migrations; joins these two filepaths
    pattern: /^[\w-]+\d+\.[tj]s$/, // altered regular expression to also handle js
  },
  entities: [Post],
    dbName: "reddit-slim",
    type: 'postgresql',
    debug: !__prod__
} as Parameters<typeof MikroORM.init>[0];