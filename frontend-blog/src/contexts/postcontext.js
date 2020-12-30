import React, { createContext, useEffect, useState } from 'react';

const PostsContext = createContext();
let { Provider, Consumer, posts, SetPosts, icons, render, setRender, getPosts } = PostsContext;

const PostsProvider = ({ children }) => {   
    
    const [posts, setPosts] = useState(['']);
    const [icons, setIcons] = useState(['']);
    const [post, setPost] = useState({});

    const [render, setRender] = useState(false);

    const getPosts = () => {
      const url = 'http://localhost:8000/api/posts';
      const options = {
        method: 'GET',
        mode:'cors',

        headers: new Headers (),
      };
      fetch (url, options)
        .then (response => {
          if (response.status === 200) {
            return response.json ();
          }
          return Promise.reject (response.status);
        })
          .then(function(myJson) {
            setPosts(myJson)    
            console.log(posts)
        })
        .catch (error => console.log (error));
    };


    const getIcons = () => {
        const url = 'http://localhost:8000/api/icons';
        const options = {
          method: 'GET',
        mode:'cors',

          headers: new Headers (),
        };
        fetch (url, options)
          .then (response => {
            if (response.status === 200) {
              return response.json ();
            }
            return Promise.reject (response.status);
          })
          .then (function (myJson) {
            setIcons (myJson);
          })
          .catch (error => console.log (error));
    };
    
    const getPost = (id) => {
        posts.map(item => { 
          if (item.id == id) {
              setPost(item);
          }
        }
        )
    }
  

    useEffect(() => {
        getPosts();
        getIcons();
    }, [render]);
        

    return (
        <Provider value={ { posts, setPosts, icons, render, setRender, post, getPosts, getPost } } >
            {children}
        </Provider>
    )


}
export { PostsProvider, Consumer as PostsConsumer, PostsContext }

