
// import { useState } from "react";
import {  UlHeader, LiHeader, } from "./headerStyled";

//H2, H3,Header

import PropTypes from "prop-types";

export const HeaderAll = () => {

    // const[textoEmTela, setTextoEmTela] = useState(false);
    // const [deslocaX, setDeslocaX] = useState(0)
    
    // const exibiSobreMim = () =>{
    //     const  sobreMimSection = document.getElementById('sobre');
    //     sobreMimSection.scrollIntoView({ behavior:'smooth'});
   // onClick={exibiSobreMim} 
    // };

 
    return (
     
                <UlHeader>

                        <LiHeader >Sobre-mim</LiHeader>
 
                        <LiHeader>Projetos</LiHeader>

                        <LiHeader>Soft-Skills</LiHeader>
                  
                        <LiHeader>Contato</LiHeader>
                   

                </UlHeader>
        

     
    )

}

HeaderAll.propTypes = {
    exibirContato: PropTypes.func.isRequired
};


   {/* <div>
                <a href="#">
                    <H2>JS</H2>
                    <H3>Jessé-Springman</H3>
                </a>
            </div> */}