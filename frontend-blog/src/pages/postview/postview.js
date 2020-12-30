import React from 'react';
import { useParams } from 'react-router';
import Post from '../../components/post/post';
import styles from './postview.module.css';
import ReactHtmlParser from "react-html-parser";



const PostView = () => {

    const { id } = useParams();
    return (
            <div className={styles.__postview_div_post}>
                <Post id={id} />
            </div>
    )
}
export default PostView;