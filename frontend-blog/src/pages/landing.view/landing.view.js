import React from 'react';
import styles from './landing.view.module.css';
import PostCard from '../../components/postcard/postcard';
import Post from '../../components/post/post';
import Navbar from '../../components/navbar/navbar';
import react from '../../components/postcard/assets/react.svg';
import laravel from '../../components/postcard/assets/laravel.png';
import js from '../../components/postcard/assets/js.png';
import css from '../../components/postcard/assets/css.png';
import docker from '../../components/postcard/assets/docker.png';
import php from '../../components/postcard/assets/php.png';
import PostcardView from '../postcardview/postcardview';




const LandingView = () => {


    return (
        <>
        <div className={styles.__container_landing}>

            <div className={styles.__landing_title_div}>
            <h1  className={styles.__landing_title}>Esta es la Landing</h1>
            </div>
            <div className={styles.__main_landing}>
                    <PostcardView />
            </div>
        </div>
</>


    )
}

export default LandingView;