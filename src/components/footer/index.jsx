
import { ContFooter, ContContatos, ListRedes, H3, UlBolls, LiGit, IconRedeSocial, Link, DivRedes, Fone } from "./styleFooter"
 import { ListBolls } from "./bolls"


export const Footer = () => {

    const balls = Array.from({length:100},(_,index) => index)


    return (
        <ContFooter  id="refCont">

            <UlBolls>

            {
                balls.map((index, ball)=>{

                    return(
                        <ListBolls key={index} >{ball}</ListBolls>  
                    )

                   
                })
            }

            </UlBolls>

            


            <ContContatos>


                <ListRedes>

  

                    <LiGit>

                        <Link href="http://wa.me/5519992704740" target="_blank" title="Enviar mensagem no Whatsapp">
                            <H3>Telefone: <Fone>19 992704740</Fone> </H3>
                            <IconRedeSocial className="fa-brands fa-whatsapp" />

                        </Link>
                    </LiGit>





                    <LiGit>

                        <IconRedeSocial>


                            <H3>Redes Sociais :</H3>
                           
                            

                        
                            <DivRedes>

                            <Link href="https://www.linkedin.com/in/jessé-springman-91180b171/" target="_blank"
                                title="perfil linkdin">
                                <IconRedeSocial className="fa-brands fa-linkedin icon-footer"></IconRedeSocial>
                            </Link>

                            <Link href="https://github.com/jesse-springman" target="_blank" title="perfil GitHub" >
                                <IconRedeSocial className="fa-brands fa-github icon-footer " />
                            </Link>

                            <Link href="https://www.instagram.com/jesse_springman" target="_blank" title="perfil Instagam" >
                                <IconRedeSocial className="fa-brands fa-instagram icon-footer" />
                            </Link>

                            </DivRedes>

                        </IconRedeSocial>


                    </LiGit>






                </ListRedes>


            </ContContatos>


        </ContFooter>
    )
}