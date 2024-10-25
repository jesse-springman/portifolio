import  { styled, keyframes } from 'styled-components'

export const ContBg = styled.div`
 position: absolute;
 top: 50px;


`

const bollUm = keyframes `
   
    0%{ left: 0px; top: 0px;}
    25%{ left: 150px; top: 200px;}
    50%{ left: 300px; top: 400px;}
    75%{ left: 450px; top: 500px;}
    100%{ left: 500px; top: 400px;}    
`

export const BollBg1 = styled.div`
    width: 400px;
    height: 400px;
    border-radius: 9999px;
    position: relative;
    animation: ${bollUm} 10s infinite alternate-reverse;
    opacity: .5;
    filter: blur(90px);
    background-color: rgb(10, 69, 230);
`

const bollTwo = keyframes `
   
    0%{ left: 1300px; top:-600px;}
    25%{ left: 900px; top: -580px; }
    50%{ left: 850px; top: -550px; }
    75%{  left: 800px; top: -520px;}
    100%{  left: 750px; top: -500px;}    
`


export const BollBg3 = styled.div`
    width: 300px;
    height: 300px;
    border-radius: 9999px;
    position: relative;
    animation: ${bollTwo} 10s infinite alternate-reverse;
    opacity: .5;
    filter: blur(90px);
    background-color: rgb(0, 232, 217);
   
`

const bollTheree = keyframes `
   
    0%{  right: -1250px; top:-80px; ;}
    25%{  right: -1150px; top: -90px; }
    50%{  right: -1050px; top: -100px; }
    75%{   right: -950px; top: -110px;}
    100%{   right: -900px; top: -120px;}    
`

export const BollBg4 = styled.div`
    width: 300px;
    height: 300px;
    border-radius: 9999px;
    position: relative;
    animation: ${bollTheree} 10s infinite alternate-reverse;
    opacity: .5;
    filter: blur(90px);
    background-color: #84e098;
`

export const ContMain = styled.section`
  background-color: rgb(17, 19, 46);
  height: 100vh;

`



export const ContIntro = styled.div`
display: flex;
flex-direction: column;
padding: 50px;

   

`

export const ImgPerfil = styled.img`
border-radius: 50%;
 width:400px;
 height: 450px;  
 box-shadow: 2px 2px 7px 1px #d5d5d5;  
 z-index: 1;
 @media(max-width: 1400px){
  
    }
`

export const Nome = styled.h1`
    width: 500px;
    margin-bottom: 40px;
    font-size: 35px;
   text-align: center;
   z-index: 1;
   
  
`

export const UlRedesSocias = styled.ul`
   display: flex;
   width: 200px;
  gap: 30px;
  margin-top: 120px;
  font-size: 40px;
  z-index: 1;
`

export const LiRedesSocias = styled.li`
:hover{
    color: #1f0e89;
}
`

export const LinkRedes = styled.a`

`

export const ContApresentacao = styled.div`
    max-width: 40%;
    text-align: justify;
    font-family: "Kanit", sans-serif;
    font-size: 25px;
    /* margin:  0 auto; */
    margin-top: -300px;
    margin-left: 700px;
    z-index:1 ;

    
   
`

export const Describe = styled.p`
    z-index: 1;
   
    

 
`

  export const Test = styled.div`

    
`