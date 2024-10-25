import { ContProjet, H2projet, UlProjet, LiProject, ImgProjet, H3Projet, H3Nome, H4Projet, Descricao, DivImg,ContBtn, BtnMaisProj } from "./styleProjetos"
import { useState } from "react";

import projPoke from '../../assets/pokeCell.png';
import projApp from '../../assets/tela-app.png';
import projNaruto from '../../assets/tela-naruto.png';
import projXmen from '../../assets/tela-xmen.png';
import placeHolde from '../../assets/placeholder.png';



export const ExibicaoProje = () => {




    const dadosProjetos = [
        {
            projetoImg: projPoke,
            linkGitHub: "https://github.com/jesse-springman/pokedex",
            titulo: "Projeto Pokedex",
            tecnologias: "✅Vite  ✅React ✅ React Router Dom  ✅Styled  🔎Ver no GitHub pages",

        },

        {
            projetoImg: projApp,
            linkGitHub: "https://jesse-springman.github.io/app-previsao-test",
            titulo: "Projeto App de Previsão de Tempo",
            tecnologias: "🟠HTML 🔵CSS 🟡JavaScript  🔎Ver no GitHub pages"
        },

        {
            projetoImg: projNaruto,
            linkGitHub: "https://jesse-springman.github.io/naruto",
            titulo: "Projeto Naruto",
            tecnologias: "🟠HTML 🔵CSS 🟡JavaScript  🔎Ver no GitHub pages"
        },


        {
            projetoImg: projXmen,
            linkGitHub: "https://jesse-springman.github.io/x-men",
            titulo: "Projeto Xmen",
            tecnologias: "🟠HTML 🔵CSS 🟡JavaScript  🔎Ver no GitHub pages"
        },

        {
            projetoImg: placeHolde,
            linkGitHub: "#",
            titulo: "Projeto 5",
            tecnologias: "🟠HTML 🔵CSS 🟡JavaScript  🔎Ver no GitHub pages",
            oculto: true
        },

        {
            projetoImg: placeHolde,
            linkGitHub: "#",
            titulo: "Projeto 6",
            tecnologias: "🟠HTML 🔵CSS 🟡JavaScript  🔎Ver no GitHub pages",
            oculto: true
        },

        {
            projetoImg: placeHolde,
            linkGitHub: "#",
            titulo: "Projeto 7",
            tecnologias: "🟠HTML 🔵CSS 🟡JavaScript  🔎Ver no GitHub pages",
            oculto:true
        },

        {
            projetoImg: placeHolde,
            linkGitHub: "#",
            titulo: "Projeto 8",
            tecnologias: "🟠HTML 🔵CSS 🟡JavaScript  🔎Ver no GitHub pages",
            oculto: true
        }


    ]


   const [oculta, setOcultar] =  useState(true);
   const [textBtn, setTextBtn] = useState('Mais');
   const [counterClick, setCounterClick] = useState(0);

  function btnProjetos(){

    
   setOcultar(false);
   setTextBtn('Menos');
   setCounterClick( (counterClick + 1));

   if(counterClick >= 1){
    setOcultar(true);
    setTextBtn('Mais');
    setCounterClick(0)
   }
  }




    return (
        <ContProjet>
            <H2projet>Projetos</H2projet>

            <UlProjet>
                {

                    dadosProjetos ? (
                        dadosProjetos.map((project, index) => {

                            return (
                                <LiProject noscreen={oculta} key={index}>

                                    <a href={project.linkGitHub}></a>
                                    <ImgProjet src={project.projetoImg} />



                                    <DivImg>




                                        <H3Projet>{project.titulo}</H3Projet>

                                        <H4Projet>Tecnologias utilizadas</H4Projet>

                                        <Descricao>{project.tecnologias}</Descricao>

                                        <H3Nome>{project.titulo}</H3Nome>
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
}