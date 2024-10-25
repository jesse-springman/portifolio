import styled from "styled-components";
import { animated } from "@react-spring/web";


export const Cont = styled(animated.div)`
display: flex;
flex-direction: column;
align-items: center;
gap: 40px;
padding: 20px;
margin-bottom: 200px;
border: 5px solid ;
background-color: rgb(17, 19, 46);
`

export const H2 = styled.h2`
font-size: 40px;
font-weight: 700;
`

export const ContTest1 = styled.div`

`


export const P =  styled.div`
 /* display: ${props => props.emtela === true ? 'block' : 'none'};   */
font-family: 'Segoe UI', Tahoma, sans-serif;
font-size: 22px;
text-align: justify;
 width: 1200px;
`