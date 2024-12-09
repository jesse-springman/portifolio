
import {  UlHeader, LiHeader, } from "./headerStyled";



export const HeaderAll = () => {



    

   
    const scrollSecao = (teste) =>{

        const secao = document.getElementById(teste);

        if(secao){
            secao.scrollIntoView({behavior:'smooth'});
        }
        
    }








    return (

        <UlHeader>

            <LiHeader onClick={() => scrollSecao('refSobre')} >Sobre-mim</LiHeader>

            <LiHeader onClick={() => scrollSecao ('refProjeto')} >Projetos</LiHeader>

            <LiHeader onClick={() => scrollSecao('refSoft')} >Soft-Skills</LiHeader>

            <LiHeader onClick={() => scrollSecao('refCont')} >Contato</LiHeader>


        </UlHeader>



    )

}




