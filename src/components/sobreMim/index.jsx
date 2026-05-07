import { useSpring } from '@react-spring/web';
import { useInView } from 'react-intersection-observer';
import { Cont, ContSobre, H2, P, Span } from './styleSobre';

export const SobreMim = () => {
  const { ref, inView } = useInView();

  const anima = useSpring({
    transform: inView ? 'translateX(0%)' : 'translateX(-100%)',
    config: { tension: 200, friction: 100 },
  });

  return (
    <Cont>
      <ContSobre ref={ref} style={anima} id="refSobre">
        <H2>Um pouco sobre Jessé Springman</H2>

        <P>
          Sobre mim Iniciei minha jornada na tecnologia com programação de
          microcontroladores no SENAI, utilizando plataformas como Arduino e
          ESP32, onde tive contato com lógica de programação em C e integração
          entre dispositivos por meio de protocolos como MQTT, Modbus TCP/IP e
          Ethernet/IP. <br />
          Em 2023, tive meu primeiro contato com desenvolvimento web durante um
          workshop prático, onde desenvolvi uma aplicação simples. A partir
          desse momento, direcionei minha carreira para o desenvolvimento de
          <br />
          <br /> Atualmente, atuo como programador de dobradeira CNC no setor de
          PCP, trabalhando diretamente com uma equipe de engenheiros. Minha
          rotina envolve a interpretação de desenhos técnicos 2D, modelagem em
          3D e desenvolvimento de programas utilizando o software CADMAN LVD,
          que são enviados para o banco de dados integrado às máquinas para
          execução pelos operadores. Essa experiência fortaleceu minha
          capacidade analítica, atenção a detalhes e responsabilidade com a
          entrega, já que os programas desenvolvidos impactam diretamente a
          produção. <br />
          <br /> Paralelamente, venho me especializando no ecossistema
          <Span>
            {' '}
            JavaScript/TypeScript, com foco em Node.js, NestJS e desenvolvimento
            backend , utilizando PostgreSQL, testes automatizados com Jest,
            versionamento com Git e práticas de CI/CD.{' '}
          </Span>{' '}
          <br />
          <br />
          Atualmente desenvolvo um sistema SaaS com integração de inteligência
          artificial para automação de comunicação, aplicando conceitos de
          arquitetura, segurança com criptografia (bcrypt) e integração com APIs
          externas. Estou em busca da minha primeira oportunidade como
          desenvolvedor, onde possa aplicar meus conhecimentos, evoluir
          tecnicamente e contribuir com soluções que gerem valor real para o
          negócio.
        </P>
      </ContSobre>
    </Cont>
  );
};
