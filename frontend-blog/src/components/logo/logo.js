import React, {useState, useEffect, useContext} from 'react';
import styles from './logo.module.css';

import react from './assets/react.svg';
import laravel from './assets/laravel.png';
import js from './assets/js.png';
import css from './assets/css.png';
import mysql from './assets/mysql.png';
import docker from './assets/docker.png';
import nodejs from './assets/nodejs.png';
import { PostsContext } from '../../contexts/postcontext';

const Logo = (props) => {
  const { icon, width } = props;
  
  const { icons } = useContext(PostsContext); 

  
  return(
    <div> {
  icons.map((item) =>
    item.id == icon ? <img width={width} src={item.url} alt="hola" /> : <div />
  )
      }    </div>
  )
};
export default Logo;
