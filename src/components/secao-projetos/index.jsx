import { ContProjet, Descricao, H2projet, UlProjet, LiProject, ImgProjet, H3Projet, H4Projet,DivImg, ContBtn, BtnMaisProj } from "./styleProjetos"
import { useState } from "react";
import { dadosProjetos } from "../../data/dados";
//import { ContInfo } from "./infoProject";




export const ExibicaoProje = () => {

    const [oculta, setOcultar] = useState(true);
    const [textBtn, setTextBtn] = useState('Mais');
    const [counterClick, setCounterClick] = useState(0);

    function btnProjetos() {


        setOcultar(false);
        setTextBtn('Menos');
        setCounterClick((counterClick + 1));

        if (counterClick >= 1) {
            setOcultar(true);
            setTextBtn('Mais');
            setCounterClick(0)
        }
    }



    return (
        <ContProjet id="refProjeto">
            <H2projet>Projetos</H2projet>

            <UlProjet>
                {

                    dadosProjetos ? (
                        dadosProjetos.map((project, index) => {

                            return (
                                <LiProject noscreen={oculta} key={index}>



                                    <a href={project.linkGitHub}></a>
                                    <ImgProjet src={project.projetoImg} />

                                    <H3Projet>{project.titulo}</H3Projet>
                                    <DivImg>



                                        <H3Projet>{project.titulo}</H3Projet>

                                        <H4Projet>Tecnologias utilizadas</H4Projet>
{/* 
                                        <ContInfo/> */}

                                        <Descricao>

                                        <ul>

                                     {
                                       
                                   
                                        
                                     project.tecnologias.map((tecnologia,index)=>{

                                        return(
                                            <li key={index}>
                                                <p>{tecnologia}</p>
                                            </li>
                                        )
                                     })
                                     
                                     }

                                     </ul>
                                        </Descricao>

                                        {/* <H3Nome>{project.titulo}</H3Nome>  */}
                                    </DivImg>
                                </LiProject>

                            )
                        })

                    )

                        : <p>erro</p>

                }


            </UlProjet>

            <ContBtn>

                <BtnMaisProj onClick={btnProjetos} > {textBtn} Projeto </BtnMaisProj>

            </ContBtn>

        </ContProjet>
    )
};