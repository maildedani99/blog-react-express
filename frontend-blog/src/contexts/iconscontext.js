import React, { createContext, useEffect, useState } from 'react';

const IconsContext = createContext();
let { Provider, Consumer, icons } = IconsContext;

const IconsProvider = ({ children }) => {
    
    const [icons, setIcons] = useState (['']);

    const getIcons = () => {
      const url = 'http://localhost:3001/icons';
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

    

    return (
        <Provider value={ { icons, setIcons } } >
            {children}
        </Provider>
    )


}
export { IconsProvider, Consumer as IconsConsumer, IconsContext }

