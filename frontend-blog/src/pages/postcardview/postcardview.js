import React, {useEffect, useState, Component, useContext} from 'react';
import Navbar from '../../components/navbar/navbar';
import styles from './postcardview.module.css';
import PostCard from '../../components/postcard/postcard';
import {Link} from 'react-router-dom';
import {POST, POSTBYID} from '../../routes/routes';
import { PostsContext } from '../../contexts/postcontext';
import Button from '../../components/button/button';
import icon from './assets/search.png';
import '../postcardview/postcardview.css';

const PostcardView = () => {

  const { posts, icons, render } = useContext(PostsContext);
  const [selected, setSelected] = useState(0);
  const [search, setSearch] = useState("");

  const handleSelectChange = (e) => {
    setSelected(e.target.value);
  };
  const handleSearchChange = (e) => {
    setSearch(e.target.value)
  }
let resultArray = ['']
  const searchClick = () => {
    let result;
    console.log(search)
    posts.map(item => {
      result = item.title.includes(search);
      if (result == true) {
        resultArray.push(item);
      }
      console.log(resultArray);
      })  
  }


  return (
    <div className={styles.__container_postcardview}>
   
      <div className={styles.__postcardview_div}>
        <div className={styles.__div_search}>
           
          <input className=" form-control" type="text" name="search" placeholder="Busca lo que necesitas..." onChange={handleSearchChange} />
            <img className="input-icon" src={icon} alt="icon" onClick={searchClick} />          
            <select className="form-control col-3 align-self-center mb-5" onChange={handleSelectChange}>
            <option
              className={styles.__option}
              label="Mostrar todo"
              selected
              value="0"
            />
            <hr />
            {icons.map((item) => (
              <option
                className={styles.__option}
                value={item.id}
                label={item.name}
              />
            ))}
          </select>
        </div>
        <div className={styles.__main_postcardview}>
          {posts.map((item) =>
            item.icon_id == selected || selected == 0 ? (
              <Link to={POSTBYID + item.id}>
                <PostCard
                  icon={item.icon_id}
                  title={item.title}
                  description={item.description}
                />
              </Link>
            ) : (
              <></>
            )
          )}
          ;
        </div>
      </div>
    </div>
  );
};

export default PostcardView;
