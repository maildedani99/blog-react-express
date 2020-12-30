import React, {useState, useEffect, useContext} from 'react';
import Navbar from '../../components/navbar/navbar';
import styles from './postupdate.module.css';
import {Editor} from '@tinymce/tinymce-react';
import {useHistory} from 'react-router-dom';
import {useParams} from 'react-router';
import {LANDING} from '../../routes/routes';
import {PostsContext} from '../../contexts/postcontext';
import ReactHtmlParser from 'react-html-parser';
import swal from 'sweetalert';

const PostUpdate = () => {
  const {id} = useParams ();
  const {icons, getPost, post, render, setRender} = useContext (PostsContext);
  const history = useHistory ();
  const [data, setData] = useState ({});

  const handleInputChange = event => {
    setData ({
      ...data,
      [event.target.name]: event.target.value,
    });
    console.log (data);
  };

  const [wysiwyg, setWysiwyg] = useState (null);
  const handleEditorChange = content => {
    setWysiwyg (content);
    console.log (content);
  };

  const handleSelectChange = event => {
    setData ({
      //...data,
      icon: event.target.value,
    });
  };

  getPost (id);

  const submitForm = () => {
    const url = `http://localhost/api/posts/update/${id}`;
    const body = {
      title: data.title,
      icon_id: data.icon,
      description: data.description,
      content: wysiwyg,
    };
    const options = {
      method: 'PATCH',
      headers: new Headers ({
        'Content-type': 'application/json',
      }),
      mode: 'cors',
      body: JSON.stringify (body),
    };
    fetch (url, options)
      .then (response => {
        if (response.status === 201 || response.status === 200) {
            console.log(response.status);
            setRender(!render);
          swal ('Enhorabuena', 'Post creado con exito', 'success');
          history.push (LANDING);
          return response.json ();
        } else {
          return Promise.reject (response.status);
        }
      })
      .catch (error => console.log (error));
  };
    
    const initialData = () => {

         {post && 
            setData({
                ...data,
                title: post.title,
                icon_id: post.icon_id,
                description: post.description,
                content: post.content,
            })}
        
    }

  useEffect (
    () => {
          getPost(id);
          initialData();
          console.log(data);
    },
    [id]
  );

  return (
    <div>
      <h1 className="text-muted mt-5">Modificar Post</h1>
      <div className={styles.__div_form}>
        <select
          className="form-control col-3 align-self-center"
          defaultValue={post.icon_id}
          onChange={handleSelectChange}
        >

          {icons.map (item => (
            <option
              className={styles.__option}
              value={item.id}
              label={item.name}
            />
          ))}
        </select>

        <input
          className="form-control col-6 align-self-center mt-5"
          name="title"
          type="text"
          placeholder="title"
          onChange={handleInputChange}
                  defaultValue={post.title}
                  initialValue={post.title}
        />
        <input
          className="form-control col-6 align-self-center mt-5"
          name="description"
          type="text"
          placeholder="description"
          onChange={handleInputChange}
                  defaultValue={post.description}
                  initialValue={post.description}
        />
        <div className="form-control col-6 align-self-center mt-5">
          <Editor
            initialValue={post.content}
            apiKey="z3chpr7kq0azccojyrbp99s6bab52o2f3t26a7hg1ge0iy93"
            init={{
              height: 500,
              menubar: false,
              plugins: [
                'advlist autolink lists link image charmap print preview anchor',
                'searchreplace visualblocks code fullscreen',
                'insertdatetime media table paste code help wordcount',
              ],
              toolbar: 'undo redo | formatselect | bold italic backcolor | \
             alignleft aligncenter alignright alignjustify | \
             bullist numlist outdent indent | removeformat | help',
            }}
            value={wysiwyg}
            onEditorChange={handleEditorChange}
          />
        </div>

        <input
          className="btn btn-success btn-lg col-2 my-5 align-self-center"
          name="button"
          type="button"
          value="Confirmar cambios"
          onClick={submitForm}
        />
      </div>
    </div>
  );
};
export default PostUpdate;
