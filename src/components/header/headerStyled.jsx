import  { styled } from 'styled-components'

const variaveis = {
    gray : ' #1f0e89',
    rose:  'hsl(300, 69%, 71%)'
}

export const Logo = styled.a`
    display: flex;
    gap: 20px;
    align-items: center;
    font-size: 20px;
`

export const H2 = styled.h2`
&:hover{
    color:${variaveis.gray};
    width: 70px;
    height: 70px;
    border: solid 2px  ${variaveis.gray};
    border-radius: 50%;
    text-align: center;
    line-height: 45px;
    padding: 10px;
}
`

export const H3 = styled.h3`
   font-size: 15px;
   &:hover{
    color:${variaveis.gray}
   }
`

export const UlHeader = styled.ul`
    display: flex;
    justify-content: flex-end;
    gap: 20px;
    background-color: rgb(17, 19, 46);

    @media(max-width:1000px){
        justify-content: center;
        gap: 5px;
    }
`

export const LiHeader = styled.li`
   padding: 12px;

&:hover{
    background-color:  #1f0e89;
    border: aliceblue solid;
    border-radius: 7px;
    cursor: pointer;
    font-weight: 700;
    transition: .3s;
    color: #fff;
}


@media (max-width:1000px){
        font-size: 14px;
    }

`