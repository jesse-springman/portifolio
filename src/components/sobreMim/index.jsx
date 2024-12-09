import { useSpring } from "@react-spring/web"
import { useInView } from "react-intersection-observer";
import { Cont, ContSobre, H2, P, } from "./styleSobre";

export const SobreMim = () => {


  const { ref, inView } = useInView()

  const anima = useSpring({

    transform: inView ? 'translateX(0%)' : 'translateX(-100%)',
    config: { tension: 200, friction: 100 }
  });

  return (

    <Cont>

      <ContSobre ref={ref} style={anima} id="refSobre" >

        <H2>Um pouco sobre Jessé Springman</H2>

        <P>
          Comecei na área estudado programação de microprocessadores (Arduino, ESP32) no SENAI, que controlam motores, LEDs, ventiladores por meio da programação criada e salva no chip da placa, elas utilizam  uma Espécie de linguagem C simplificada. Realizava comunicações de diferentes máquinas onde as mesmas trocavam dados em si via protocolos de comunicação, desenvolvia também interfaces homem máquina que pode-se dizer que é front-end voltado para a industria onde criava a tela para o funcionário  operar a máquina.  <br></br>
          Em 2023 achei um canal falando sobre programação web e eles iram realizar um workshop onde ensinaria  criar um site de seleção de personagens de desenhos, decidi entrar no evento gostei muito de programar e tomei paixão.<br></br>
          Desde então venho ao longo do tempo estudando todo dia me dedicando ao meu aprimoramento pessoal nas seguintes tecnologias
          : JS, TS, React, Node,Postgres,SQL, Prisma e GitHub. A área da tecnologia me deslumbra e me motiva, procuro sempre aprimorar
          meus conhecimentos me aprofundando mais nessa área que amo tanto.
          Trabalho como torneiro-mêcanico mas como mencionei acima oque me deslumbra é área da tecnologia, me dedico todos os dias para
          realizar meu sonho de me tornar um programador. Estou sempre me desafiando criando projetos novos para consolidar meu aprendizado.
          Atualmente estou voltado para área de Back-End, API, servidor, banco de dados. Busco ser um programdor mais completo possível para um dia ser um bom Full-Stack.
        </P>
      </ContSobre>


    </Cont>








  );


};


