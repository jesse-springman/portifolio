import styled from "styled-components";


export const SecForm = styled.section`

padding-top: 200px;
background-color: rgb(17, 19, 46);
 

`
export const ContForm = styled.div`
   max-height: 750px;
   width: 35%;
   background-color: rgb(1, 4, 34); 
   border: 3px solid ;
   padding: 20px;
   border-radius: 20px;
   pointer-events: auto;
   margin:  0 auto;
   box-shadow: 1px 1px 14px 1px #fff;
   position: relative;

   @media(max-width:800px){
      width: 65%;
   }

`


export const H3 = styled.h3`
   text-align: center;
   margin-bottom: 100px;
   font-size: 36px;
   color: aliceblue;
`


export const Form =  styled.form`
   display: flex;
   flex-direction: column;
   gap: 30px;
   padding-bottom: 130px;
   pointer-events: auto;

`

export const Label = styled.label`

`

export const Input = styled.input`
   height: 30px;
   width: 70%;
   color: #000000;
   border: 2px solid;
   border-radius: 10px;
   margin-bottom: 80px;
   font-family: "Kanit", sans-serif;
   padding: 5px;

   @media(max-width:800px){
      width: 85%;
   }
`

export const Texto = styled.textarea`
   height: 100px;
   width: 85%;
   border-radius: 4px;
   margin-bottom: 40px;
   
`

export const BtnSubmet = styled.button`
   color: #f9f9f9;
   background-color: rgb(34, 41, 89);
   border-radius: 13px;
   border: 2px solid;
   width: 100px;
   height: 50px;
   margin: 0 auto;
   cursor: pointer;

   &:hover{
   width: 110px;
   height: 55px;
   transition: .3s;
   background-color: #000000;
   }
`