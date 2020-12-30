import React, {useState, useEffect, useContext} from 'react';
import styles from './post.module.css';
import Logo from '../logo/logo';
import ReactHtmlParser from 'react-html-parser';
import {Link} from 'react-router-dom';
import {LANDING, POSTUPDATEBYID} from '../../routes/routes';
import {useHistory} from 'react-router-dom';
import swal from 'sweetalert';
import {PostsContext} from '../../contexts/postcontext';
import Button from '../button/button';

const Post = (props) => {
  //const [post, setPost] = useState (['']);
  const history = useHistory();
  const {posts, getPosts} = useContext(PostsContext);
  const [post, setPost] = useState({});
  const {id} = props;

  const getPost = () => {
    posts.map((item) => {
      if (item.id == id) {
        setPost(item);
      }
      console.log(post);
    });
  };
  useEffect(() => {
    getPost();
  }, []);

  const deletePost = () => {
    const url = `http://localhost/api/posts/delete/${id}`;
    const options = {
      method: 'DELETE',
      headers: new Headers(),
    };
    fetch(url, options)
      .then((response) => {
        if (response.status === 200) {
          console.log(response.status);
          swal({
            title: 'El post se ha eliminado correctamente',
            icon: 'info',
          });

          return response.json();
        }
        return Promise.reject(response.status);
      })
      .then(function (myJson) {
        history.push(LANDING);
      })
      .catch((error) => console.log(error));
  };

  return (
    <div className={styles.__post_div}>
      <div className={styles.__post_header}>
        <div className={styles.__post_icon}>
          <Logo width="150px" icon={post.icon_id} />
        </div>
        <div className={styles.__post_title_div}>
          <h2>{post.title}</h2>
          <h6>{post.description}</h6>
        </div>
      </div>
      <div className={styles.__post_content}>
        <p>{ReactHtmlParser(post.content)}</p>
      </div>
      <div className={styles.__post_buttons}>
        <div className={styles.__post_button_div}>
          <Link to={LANDING}>
            <Button type="button" value="Volver al listado" />
          </Link>
        </div>
        <div className={styles.__post_button_div}>
          <Button
            type="button"
            value="Eliminar Post"
            disabled="true"
            onClick={deletePost}
          />
        </div>
        <div className={styles.__post_button_div}>
          <Link to={POSTUPDATEBYID + id}>
            <Button type="button" value="Modificar Post" disabled="true" />
          </Link>
        </div>
      </div>
    </div>
  );
};
export default Post;
