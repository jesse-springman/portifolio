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
export const ContContatos = styled.nav`
       display: flex;
       color: aliceblue;
`

export const IconRedeSocial = styled.i`
       display: flex;
       align-items: center;
       color: aliceblue;
      font-size: 30px;
     

      &:hover{
       color: aqua;
     }
      
     &:last-child{
       display: block;
       padding-right: 30px;
} 

`

export const H3 = styled.h3`
       color: aliceblue;
       margin-bottom: 3px;
       font-size: 20px;
       &:hover{
       color: aqua;
     }
       
`

export const Fone = styled.span`
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
