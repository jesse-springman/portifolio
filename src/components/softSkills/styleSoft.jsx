import styled from "styled-components";
import ft from "../../assets/fundoSoft.jpg"


export const Sectoin = styled.section`
display: flex ;
flex-direction: column;
align-items: center;
justify-content: center;
background-image: url(${ft});
 background-size: cover; 
background-position: center; 
padding: 20px;


@media(max-width: 1000px){
  padding: 50px; 
}

`

export const H1 = styled.h1`
   text-align: center;
  color: aqua;
font-size: 45px;

 @media(max-width: 1700px){
  font-size: 30px; 
  margin-bottom: 100px;
}
`


export const Lista = styled.ul`
display: flex;
height: 900px;
align-items: center;
justify-content: center;
gap: 25px;


@media(max-width: 1500px){
  height: 100%;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
}

 @media(max-width: 800px){
  grid-template-columns:1fr;
  justify-content: center;
} 


 li:nth-child(1){
  border: solid 2px aqua;
  box-shadow: 1px 1px 10px 1px aqua;
} 



li:nth-child(2){
  border: solid 2px dodgerblue;
  box-shadow: 1px 1px 10px 1px dodgerblue;
} 

li:nth-child(3){
  /* background-color: #blue; */
  border: solid 2px #0425fe;
  box-shadow: 1px 1px 10px 1px #0425fe;
} 

`



export const Li = styled.li`

height: 600px;
width: 400px;
border-radius: 15px;
padding: 20px;
display: flex;
background: rgba(0, 0, 0, 0.7);
align-items: center;
border: solid 2px blueviolet;
box-shadow: 1px 1px 10px 1px blueviolet;

 @media(max-width: 1500px){
  height: 400px;
} 

`


export const ContComunica = styled.div`
width: 100%;
`

export const P = styled.p`
font-size: 25px;
font-family: 'Segoe UI', Tahoma, sans-serif;

@media(max-width: 1500px){
  font-size: 20px;
}
`

export const H2Comuni = styled.h2`
text-align: center;
margin-bottom: 30px;
font-size: 38px;    
color: aqua;

@media(max-width: 1500px){
  font-size: 28px; 
}
`

export const H2Auto = styled.h2`
text-align: center;
margin-bottom: 30px;
font-size: 38px;    
color: dodgerblue;

@media(max-width: 1500px){
  font-size: 28px; 
}
`

export const H2Aprende = styled.h2`
text-align: center;
margin-bottom: 30px;
font-size: 38px;    
color: #0425fe;

@media(max-width: 1500px){
  font-size: 28px; 
}
`

export const H2Pensa = styled.h2`
text-align: center;
margin-bottom: 30px;
font-size: 38px;    
color: blueviolet;

@media(max-width: 1500px){
  font-size: 28px; 
}
`

export const H2 = styled.h2`
margin-bottom: 30px;
font-size: 28px;    
color: aqua;
`

export const ContAutoData = styled.div`
`

export const ContAprendendo = styled.div`
`


export const ContPensamento = styled.div`
`