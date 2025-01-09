import styled from "styled-components";
import { animated } from "@react-spring/web";


export const Cont = styled.div`
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
height: 120vh;
background: rgb(6,6,6);
background: linear-gradient(90deg, rgba(6,6,6,1) 7%, rgba(37,37,152,1) 60%, rgba(40,114,179,1) 92%);
padding: 20px;


@media (max-width: 1300px){
    width:100%;
    height: 100%;
}

@media (max-width: 850px){
    height: 100vh; 
}


@media (max-width: 640px){
    height:150vh;  
}

`


export const ContSobre = styled(animated.div)`
width: 70vw;
padding: 60px;
border-radius: 20px;
border: 3px solid;
background: rgba(0, 0, 0, 0.7);
box-shadow: 1px 1px 14px 1px #fff;

@media (max-width: 1300px){
    padding: 20px;
}




@media(max-width:400px){
    width: 380px;
 }
`

export const H2 = styled.h2`
font-size: 49px;
color: #4362ca;
font-weight: 700;
margin-bottom: 50px;
text-align: center;

@media(max-width:1100px){
    font-size: 39px;
    margin-bottom: 20px;
 }

 @media(max-width:850px){
    font-size: 24px;
 }
`



export const P =  styled.div`
font-family: 'Segoe UI', Tahoma, sans-serif;
font-size: 24px;
text-align: justify;
width: 100%;



 @media(max-width:1100px){
    font-size: 19px;
 }

 @media (max-width: 850px){
    font-size: 17px;
    
}

`