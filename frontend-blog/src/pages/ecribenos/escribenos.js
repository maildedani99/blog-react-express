import React, { useState } from 'react';
import styles from './escribenos.module.css';
import emailjs from 'emailjs-com';
import { init } from 'emailjs-com';
import swal from 'sweetalert';
import Button from '../../components/button/button';





const Escribenos = () => {

    init("user_QBdjWPXBM10KE5Imheg0r");

    function sendEmail(e) {
        console.log("enviando")
        e.preventDefault();

        emailjs.sendForm('service_qk2n1rf', 'template_qfzbhsc', e.target, 'user_QBdjWPXBM10KE5Imheg0r')
            .then((result) => {
                
                if (result.status === 200) {
                    swal({
                        title: "Enhorabuena",
                        text: "Tu mail se enviado correctamente",
                        icon: "success",
                        button: "Aceptar",
                      });
                } else {
                    swal({
                        title: "Lo sentimos",
                        text: "Tu mail se no ha podido enviar correctamente",
                        icon: "danger",
                        button: "Aceptar",
                      });
                }
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
    }

    return (
        <>
            <div className={styles.__escribenos_container}>
            <div className={styles.__title_div}>
          <h1 className={styles.__title}>
            Escribenos, preguntanos o sugiernos...<br/>Te escuchamos</h1>
        </div>
                <div className={styles.__escribenos_main}>
                   
                    <form onSubmit={sendEmail}>
                        <div className={styles.__escribenos_div_form}>
                            <input className={styles.__escribenos_input_text} name="name" type="text" placeholder="Nombre" required/>
                            <input className={styles.__escribenos_input_text} name="email" type="text" placeholder="Email" required/>
                            <input className={styles.__escribenos_input_text} name="telf" type="text" placeholder="Telefono" required/>
                            <textarea className={styles.__escribenos_input_textarea} name="message" type="text" placeholder="Cuentanos..." required/>
                                <Button  type="submit" name="submit" value="Enviar" />
                                
                        </div>
                    </form>

                </div>



            </div>

        </>
    )
}
export default Escribenos;