import { ContMain, Div, ContBg, BollBg1, BollBg3, BollBg4, ContIntro, Nome, ImgPerfil, UlRedesSocias, LiRedesSocias, LinkRedes, ContApresentacao, Describe } from "./styleMain";
import ftPerfil from '../../assets/perfil.jpg'
//import { useRef, useEffect } from "react";



export const Main = () => {


    return (
        <ContMain id="refSoft">

            <ContBg>
                <BollBg1></BollBg1>
                <BollBg3></BollBg3>
                <BollBg4></BollBg4>
            </ContBg>




            <ContIntro>

                <Div>

                    <Nome>Jessé Springman</Nome>

                    <ImgPerfil src={ftPerfil} />


                    <UlRedesSocias>

                        <LiRedesSocias>

                            <LinkRedes href="https://www.linkedin.com/in/jessé-springman-91180b171/" target="_blank"
                                title="perfil linkdin">
                                <i className="fa-brands fa-linkedin icon"></i>
                            </LinkRedes>

                        </LiRedesSocias>


                        <LiRedesSocias>

                            <LinkRedes href="http://wa.me/5519992704740" target="_blank" title="Enviar mensagem no Whatsapp">
                                <i className="fa-brands fa-whatsapp icon"></i>
                            </LinkRedes>

                        </LiRedesSocias>

                        <LiRedesSocias>

                            <LinkRedes href="https://github.com/jesse-springman" target="_blank" title="perfil GitHub">
                                <i className="fa-brands fa-github icon"></i>
                            </LinkRedes>

                        </LiRedesSocias>

                        <LiRedesSocias>

                            <LinkRedes href="https://www.instagram.com/jesse_springman" target="_blank" title="perfil Instagam">
                                <i className="fa-brands fa-instagram icon"></i>
                            </LinkRedes>

                        </LiRedesSocias>


                    </UlRedesSocias>


                </Div>



                <ContApresentacao>

                    <Describe>
                        Sou desenvolvedor Front-end estudando back-end para ser um Full Stack,
                        minhas especialidades são JavaScript, React, HTML e CSS. Venho estudando
                        e consolidadando conhecimentos nessas outras tecnologias : TypeScript, Node.JS, Express, SQL, Git e GitHub.
                    </Describe>

                </ContApresentacao>



            </ContIntro>








        </ContMain>



    )
};
