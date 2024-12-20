import { styled, keyframes } from 'styled-components'

export const ContBg = styled.div`
 position: absolute;
`

const bollUm = keyframes`
   
    0%{ left: 0px; top: 0px;}
    25%{ left: 150px; top: 200px;}
    50%{ left: 300px; top: 400px;}
    75%{ left: 450px; top: 500px;}
    100%{ left: 500px; top: 400px;}    
`

const bollOneresponse = keyframes`
   
    0%{ left: 0px; top: 0px;}
    25%{ left: 150px; top: 500px;}
    50%{ left: 100px; top: 600px;}
    75%{ left: 250px; top: 700px;}
    100%{ left: 200px; top: 800px;}    
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

    
@media(max-width: 1000px){
    width: 250px;
    height: 250px;
    border-radius: 100px;
    }

    @media(max-width:687px){
     width: 300px;
     height: 300px;
     border-radius: 600px;
     animation: ${bollOneresponse} 10s infinite alternate-reverse;
    }    

`

const bollTwo = keyframes`
   
    0%{ left: 1300px; top:-600px;}
    25%{ left: 900px; top: -580px; }
    50%{ left: 850px; top: -550px; }
    75%{  left: 800px; top: -520px;}
    100%{  left: 750px; top: -500px;}    
`


const bollTwoResponse = keyframes`
   
    0%{ left: 800px; top:-600px;}
    25%{ left: 500px; top: -580px; }
    50%{ left: 450px; top: -550px; }
    75%{  left: 500px; top: -520px;}
    100%{  left: 450px; top: -500px;}    
`

const bollTwoResponse2 = keyframes`
   
    0%{ left: 200px; top:-300px;}
    25%{ left: 100px; top: -280px; }
    50%{ left: 150px; top: -350px; }
    75%{  left: 100px; top: -320px;}
    100%{  left: 150px; top: -200px;}    
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
   
    @media(max-width: 1000px){
    animation: ${bollTwoResponse} 10s infinite alternate-reverse;    
    width: 250px;
    height: 250px;
    border-radius: 100px;
    }

    @media (max-width: 600px){
        width: 250px;
        height: 250px;
        animation: ${bollTwoResponse2} 10s infinite alternate-reverse;    
    }


`

const bollTheree = keyframes`
   
    0%{  right: -1250px; top:-80px; ;}
    25%{  right: -1150px; top: -90px; }
    50%{  right: -1050px; top: -100px; }
    75%{   right: -950px; top: -110px;}
    100%{   right: -900px; top: -120px;}    
`


const bollThereeResponse = keyframes`
   
    0%{  right: -850px; top:-80px; ;}
    25%{  right: -550px; top: -90px; }
    50%{  right: -680px; top: -100px; }
    75%{   right: -450px; top: -110px;}
    100%{   right: -600px; top: -120px;}     
`

const bollThereeResponse2 = keyframes`
   
    0%{  right: -550px; top:50px; ;}
    25%{  right: -450px; top: 60px; }
    50%{  right: -380px; top: 80px; }
    75%{   right: -350px; top: -90px;}
    100%{   right: -300px; top: -100px;}     
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

    @media(max-width: 1000px){
    animation: ${bollThereeResponse} 10s infinite alternate-reverse;
    width: 250px;
    height: 250px;
    border-radius: 100px;
    }


    @media (max-width: 600px){
        animation: ${bollThereeResponse2} 10s infinite alternate-reverse;    
    }
`

export const ContMain = styled.section`
  background-color: rgb(17, 19, 46);
  height: 100vh;
`



export const ContIntro = styled.div`
height: 100vh;
display: flex;
align-items: center;
padding: 50px;


   
 @media(max-width: 1000px){
   
    flex-direction: column;
    }
`

export const Div = styled.div`
display: flex;
flex-direction: column;
align-items: center;

`

export const ImgPerfil = styled.img`
border-radius: 50%;
 max-width:400px;
 height: 450px;  
 box-shadow: 2px 2px 7px 1px #d5d5d5;  


 @media(max-width: 900px){
    max-width:300px;
    height: 350px;  
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
  margin-top: 10px;
  font-size: 40px;
  z-index: 1;

  @media (max-width: 1000px){
    margin-bottom: 120px;
  }

`

export const LiRedesSocias = styled.li`
:hover{
    
    color:  #50b9ce;
}
`

export const LinkRedes = styled.a`
`

export const ContApresentacao = styled.div`
    width: 50%;
    display: flex;
    font-family: "Kanit", sans-serif;
    font-size: 25px;
    margin-left: 50px;
    z-index:1 ;
    
    @media(max-width: 900px){
     width: 300px;
    }

    @media(max-width: 1000px){ 
    }

`

export const Describe = styled.p`
`

export const Test = styled.div`
`