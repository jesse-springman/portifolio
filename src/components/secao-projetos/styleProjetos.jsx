import styled from "styled-components";

export const ContProjet = styled.section`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding-top: 440px;
    background-color: rgb(17, 19, 46);
      background-attachment: fixed;

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
   

     @media(max-width:687px){
       margin-top: 200px;
        
    } 
 
`

export const UlProjet = styled.ul`
    margin-top: 170px;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
   grid-gap: 30px;
  
   

    @media (max-width: 1300px){
        grid-template-columns: repeat(2, 1fr);
    }


`

export const LiProject = styled.li`

    width: 350px; 
   height: 600px;
   object-fit: cover;
   padding-bottom: 20px;
   cursor: pointer;
   position: relative;
   margin-bottom: 300px;
   


   @media (max-width: 1000px){
     
    width: 400px; 
}


   @media (max-width: 900px){
    width: 350px; 
    }

  
      @media(max-width:699px){
        width: 270px; 
        height: 500px;
       
        
    }  

    @media(max-width:400px){
        width: 170px; 
        height: 330px;
        
    }  

   &:nth-last-child(-n+4){

        display: ${props => props.noscreen === 'true' ? 'none' : 'block'};
    }

`



export const ImgProjet = styled.img`
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

   display: flex;
   flex-direction: column;
   align-items:center;
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
   color: #aab2b0;
    
   }

`






export const H3Projet = styled.h3`
  margin-bottom: 30px;
  text-align: center;
   font-size: 27px;

   @media(max-width:687px){
    font-size: 20px;
}  

`


export const H4Projet = styled.h4`

   font-size: 35px;
   font-family: "Kanit", sans-serif;
   opacity: 1;

   @media(max-width:900px){
    font-size: 25px;   
    } 

    @media(max-width:687px){
    font-size: 20px;
}  

`


export const Descricao = styled.div`
font-size: 25px;

@media(max-width:900px){
    font-size: 20px; 
    } 

    @media(max-width:687px){
    font-size: 17px;
}  

@media(max-width:687px){
    font-size: 14px;
}  


`





export const H3Nome = styled.h3`
   
    margin-top: 490px;
    border-bottom: 2px solid aliceblue;
   opacity: 1;
`



export const ContBtn = styled.div`
    display:flex;
    justify-content: center;
    margin-bottom: 100px;

 
`



export const BtnMaisProj = styled.button`
   
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


export const BtnMenosProj = styled.button`
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