import styled from "styled-components";

export const ContProjet = styled.section`
  
    padding: 40px;
    background-color: rgb(17, 19, 46);
 
`

export const H2projet = styled.h2`
    text-align: center;
    margin: 0 auto;
    color  :aliceblue ;
    border: 3px solid ;
    max-width: 200px;
    padding: 8px;
    border-radius: 15px;
    font-size: 35px;
     background: rgb(0,0,0);
     background: linear-gradient(90deg, rgba(0,0,0,1) 0%, rgba(16,23,139,1) 50%, rgba(2,195,156,1) 100%);
     z-index: 1;
   
 
`

export const UlProjet = styled.ul`
    margin-top: 170px;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-gap: 50px;
 
`

export const LiProject = styled.li`

     max-width: 550px; 
   max-height: 700px;
   object-fit: cover;
   padding-bottom: 20px;
   cursor: pointer;
   position: relative;
   margin-bottom: 300px;


   &:nth-last-child(-n+4){

        display: ${props=>props.noscreen ? 'none' : 'block'};
    }

`



export const ImgProjet =  styled.img`
    width: 100%; 
    height: 90%;
    border: #000000 2px solid;
    border-radius: 15px;
    box-shadow: 2px 2px 7px 4px #030303;
  
  

    &:hover{
        border: aliceblue 2px solid;
        box-shadow: 2px 2px 7px 4px aliceblue;
        z-index: 2;
    }
`


export const DivImg = styled.div`
   position: absolute;
   top: 0;
   padding: 10px;
   background-color: #000000;
   opacity: 0;
   width : 100%;
   height: 87%;

   &:hover{
    opacity: 0.8;
    transition: .3s;
   color: aquamarine;
    
   }

`






export const H3Projet = styled.h3`
    margin-bottom: 20px;
    padding: 5px;
    height: 30px;
    color: aliceblue;
  
    &:hover{
       
    }
`


export const H4Projet = styled.h4`

   font-size: 22px;
   font-family: "Kanit", sans-serif;
   color: aliceblue;
 

   &:hover{
    
    }

`


export const Descricao = styled.p`
  color: aliceblue;


    &:hover{
      
    }

`



export const H3Nome = styled.h3`
    width: 200px;
    margin-top: 600px;
    border-bottom: 2px solid aliceblue;
    color: aliceblue;
    opacity: 1;

`



export const ContBtn = styled.div`
    display:flex;
    justify-content: center;
    margin-bottom: 100px;

 
`



export const BtnMaisProj = styled. button`
   
    margin-bottom: 50px;
    width: 150px;
    background-color:rgb(11, 67, 108);
    border: aqua solid;
    border-radius: 15px;
    padding: 18px;
    color: aqua;
    font-size: 16px;
    font-weight: 500;
    cursor: pointer;


       &:hover{
        background-color: rgb(203, 180, 225);
    font-weight: 700;
    transition: .3s;
    color: blueviolet;
    box-shadow: 2px 2px 7px 1px blueviolet;
    border: blueviolet solid;
    }

`


export const BtnMenosProj = styled. button`
   display: none;
    margin-bottom: 50px;
    width: 150px;
    background-color:rgb(11, 67, 108);
    border: aqua solid;
    border-radius: 15px;
    padding: 18px;
    color: aqua;
    font-size: 16px;
    font-weight: 500;
    cursor: pointer;

`