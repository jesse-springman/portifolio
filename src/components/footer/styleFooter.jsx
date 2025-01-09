 import { animated } from '@react-spring/web'
import { styled } from 'styled-components'

export const ContFooter = styled.footer`
 height: 1100px;
 width: 100%;
 display: flex;
 align-items: end;
 justify-content: space-between;
 padding: 20px;
 background-color: rgb(17, 19, 46);
overflow: hidden;

`


export const UlBolls = styled.div`
       
       max-width: 100%;
       position: relative;
     
`

export const ListRedes = styled.ul`
    width: 100vw;
    display: flex;
    justify-content: space-between;
    z-index: 1;
      
    @media(max-width: 600px){
       flex-direction: column;
       align-items: center;
       gap: 15px;
    }

`


 
export const LiBoll = styled(animated.div)` 
         background-color: aqua;
         box-shadow: 2px 2px 40px aqua;
         border-radius: 50%;
         position: absolute;
       

         &:nth-child(even){
              background-color: blueviolet;
              box-shadow: 2px 3px 50px blueviolet;
         }
       
` 
// export const ContContatos = styled.ul`
//        display: flex;
//        color: aliceblue;
//        z-index: 1;
// `

export const IconRedeSocial = styled.i`
       display: block;
       color: aliceblue;
      font-size: 30px;

      &:hover{
       color: aqua;
     }
      




`


export const ContRedes = styled.div`
display: flex;
gap: 30px;
justify-content: center;
 
`

export const H3 = styled.h3`
       
       color: aliceblue;
       margin-bottom: 3px;
       font-size: 25px;
       &:hover{
       color: aqua; 
     }

     @media (max-width:800px){
       font-size:18px;
     }
       
`

export const Fone = styled.span`
   font-size: 23px;
color: aliceblue;
font-weight: 800;
font-family:'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
`

export const LiGit = styled.li`

`


export const  DivRedes = styled.li`
display: flex;
gap: 15px;   
`


export const Link = styled.a`
     display: flex;
     align-items: center;
     gap: 10px;
`
