import React, { useState, useEffect } from 'react';
import styles from './searchbar.module.css';

const SearchBar = (props) => {

    const { icons } = props;
    
    
    return (
        
        <div className={styles.__div_search}>
            <input  className={styles.__search} type="search" name="search" placeholder="Buscar" />
            <select  className={styles.__select}  name="" id="">
                <option selected>Selecciona un tipo</option>
                {icons.map((item) => 
                    <option  > {item.name} </option>
                )}
            </select>
            </div>
    )
}
export default SearchBar;