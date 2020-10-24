import React from 'react';
import ReactDOM from 'react-dom';
import { MikroORM } from '@mikro-orm/core';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { __prod__ } from './constants';
import { Post } from './entities/Post';
import microConfig from './mikro-orm.config';

const main = async () => {
  const orm = await MikroORM.init(microConfig);

  const post = orm.em.create(Post, {title: 'my first post'});
  await orm.em.persistAndFlush(post);
}



// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById('root')
// );

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
