import { useSpring } from "@react-spring/web"
import { useInView } from "react-intersection-observer";
import { Cont, ContSobre, H2, P, Span } from "./styleSobre";

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
          Comecei na área estudado programação de microprocessadores (Arduino, ESP32) no SENAI,  elas utilizam  uma Espécie de linguagem C simplificada. Realizava comunicações de diferentes máquinas onde as mesmas trocavam dados entre si via protocolos de comunicação(MQTT, Modbus TCP/IP, Ethernet/IP).<br></br>
          Em 2023 achei um canal falando sobre programação web e eles iram realizar um workshop onde ensinaria  criar um site de seleção de personagens de desenhos, decidi entrar no evento gostei muito de programar e tomei paixão.<br></br>
          Desde então venho ao longo do tempo estudando todo dia me dedicando ao meu aprimoramento pessoal nas seguintes tecnologias
          :<Span> NodeJS,PostgreSQL,GitHub,Docker,Migrations, Jest etc</Span> . A área da tecnologia me deslumbra e me motiva, procuro sempre aprimorar
          meus conhecimentos me aprofundando mais nessa área que amo tanto.
          Trabalho como programador/operador de máquina CNC estou na busca da minha primeira vaga, mas enquanto isso <Span>estou 
          desenvolvendo meu SaaS que utiliza IA, API da DeepSeek, todo projeto coberto por testes automátizados(Jest), sistema de segurança por meio de encriptação(bcypt), servidor (NodeJS), banco de dados (PostgreSQL), hospedagem (Vercel), CI/CD(GitHub Actions).</Span>
        </P>
      </ContSobre>


    </Cont>








  );


};


