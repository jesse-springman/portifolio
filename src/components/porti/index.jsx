// import { useRef } from "react";
import { Main } from "../secaoMain";
import { HeaderAll } from "../header";
import { ExibicaoProje } from "../secao-projetos";
import { SobreMim } from "../sobreMim";
import { BoxEmail } from "../boxEmail";
import { Footer } from "../footer";


export const Portifolio = () =>{


    // const refSobreMim = useRef(null);


    // const exibirContato = () =>{
    //     refSobreMim.current.scrollIntoView({ behavior: 'smooth'});
    // };


    return(
        <>
            <HeaderAll  />
            <Main/>
            <ExibicaoProje/>
            <SobreMim  />
            <BoxEmail/>
            <Footer/>
        </>
    )
}