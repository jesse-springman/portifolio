
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

            <LiHeader  data-testid="liProjeto" onClick={() => scrollSecao ('refProjeto')} >Projetos</LiHeader>

            <LiHeader data-testid="liSoft" onClick={() => scrollSecao('refSkills')} >Soft-Skills</LiHeader>

            <LiHeader data-testid="liContato" onClick={() => scrollSecao('refCont')} >Contatos</LiHeader>


        </UlHeader>



    )

}




