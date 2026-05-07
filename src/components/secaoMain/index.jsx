import {
  ContMain,
  Span,
  Div,
  ContBg,
  BollBg1,
  BollBg3,
  BollBg4,
  ContIntro,
  Nome,
  ImgPerfil,
  UlRedesSocias,
  LiRedesSocias,
  LinkRedes,
  ContApresentacao,
  Describe,
} from './styleMain';
import ftPerfil from '../../assets/perfil.jpg';

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

          <ImgPerfil href={ftPerfil} src={ftPerfil} />

          <UlRedesSocias>
            <LiRedesSocias>
              <LinkRedes
                href="https://www.linkedin.com/in/jessé-springman-91180b171/"
                target="_blank"
                title="perfil linkdin"
              >
                <i className="fa-brands fa-linkedin icon"></i>
              </LinkRedes>
            </LiRedesSocias>

            <LiRedesSocias>
              <LinkRedes
                href="http://wa.me/5519992704740"
                target="_blank"
                title="Enviar mensagem no Whatsapp"
              >
                <i className="fa-brands fa-whatsapp icon"></i>
              </LinkRedes>
            </LiRedesSocias>

            <LiRedesSocias>
              <LinkRedes
                href="https://github.com/jesse-springman"
                target="_blank"
                title="perfil GitHub"
              >
                <i className="fa-brands fa-github icon"></i>
              </LinkRedes>
            </LiRedesSocias>

            <LiRedesSocias>
              <LinkRedes
                href="https://www.instagram.com/jesse_springman"
                target="_blank"
                title="perfil Instagam"
              >
                <i className="fa-brands fa-instagram icon"></i>
              </LinkRedes>
            </LiRedesSocias>
          </UlRedesSocias>
        </Div>

        <ContApresentacao>
          <Describe>
            Sou desenvolvedor full stack com foco em JavaScript/ TypeScript,
            Node.js, NestJS, Next.js e arquitetura backend escalável, atuando na
            construção de aplicações completas, desde a modelagem do banco até a
            entrega em produção. <br />
            <br />
            Tenho experiência com APIs REST, autenticação, integração com IA,
            PostgreSQL e Prisma, além de práticas como versionamento com Git,
            testes automatizados e pipelines de CI/CD. Atualmente desenvolvo um
            sistema SaaS para automação de comunicação em petshops, utilizando
            inteligência artificial para resolver problemas reais de negócio,
            como retenção de clientes e otimização de atendimento. <br />
            <br />
            Possuo uma abordagem orientada a resultados, combinando visão
            técnica com entendimento de produto para construir soluções
            eficientes, escaláveis e com impacto direto no crescimento do
            negócio.
          </Describe>
        </ContApresentacao>
      </ContIntro>
    </ContMain>
  );
};
