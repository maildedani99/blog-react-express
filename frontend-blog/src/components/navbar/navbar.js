import React from 'react';
import { Link } from 'react-router-dom';
import logo from './proweb21_logo.png';
//import styles from './navbar.module.css';
import {LANDING, POSTCARD, POST, POSTFORM, ESCRIBENOS} from '../../routes/routes';
import PostcardView from '../../pages/postcardview/postcardview';
import Button from '../button/button';
import './navbar.css';
import Escribenos from '../../pages/ecribenos/escribenos';
const Navbar = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-dangerous h5 fixed-top bg-white px-5 "  >
        <a className="navbar-brand" heigth="3rem" href="#">
          
          <Link className="link_router" to={LANDING}>
            <img className="navbar_icon" src={logo} alt="logo"/>          
          </Link>
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
            
                {/* <Link className="link_router" to={POSTCARD}>
                  <Button value="Ver los Posts" />
                </Link> */}

                  <h3 className="navbar_title mx-auto align-self-end mt-5">"Guia de viaje" desarrollo WEB</h3>
                {/* <Link className="link_router" to={POSTFORM}>
                  <Button  className="link_router" to={POSTFORM} value="New Post"/>
                </Link> */}
          <Link to={ESCRIBENOS}>
              <Button value="Contacto" type="button" />
          </Link>
              {/* <Button value="Registro" type="button" /> */}
        </div>
      </nav>
    </div>
  );
};
export default Navbar;
