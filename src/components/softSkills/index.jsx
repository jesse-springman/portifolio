import {
  Sectoin,
  H2Comuni,
  H2Auto,
  Span,
  SpanAuto,
  SpanAprende,
  SpanPensa,
  SpanComuni,
  H2Tarefas,
  H2Aprende,
  H2Pensa,
  Lista,
  Li,
  ContComunica,
  ContTarefas,
  ContAutoData,
  ContAprendendo,
  ContPensamento,
  P,
  H1,
} from './styleSoft';

export const SoftSkills = () => {
  return (
    <Sectoin id="refSkills">
      <H1>Soft Skills</H1>

      <Lista>
        <Li>
          <ContComunica>
            <H2Comuni>Comunicação</H2Comuni>
            <P>
              Desenvolvi uma comunicação clara e objetiva ao longo da minha
              jornada, facilitando a colaboração em equipe e o alinhamento de
              expectativas. Valorizo o diálogo como ferramenta essencial para
              resolver problemas e evoluir soluções de forma eficiente.
            </P>
          </ContComunica>
        </Li>

        <Li>
          <ContAutoData>
            <H2Auto>Autodidata</H2Auto>

            <P>
              Além de cursos eu construí minha formação de forma autodidata,
              mantendo consistência nos estudos e evolução contínua. Busco
              constantemente novos conhecimentos e aplico na prática,
              demonstrando disciplina e responsabilidade com meu desenvolvimento
              profissional.
            </P>
          </ContAutoData>
        </Li>

        <Li>
          <ContAprendendo>
            <H2Aprende>Aprendizado contínuo</H2Aprende>

            <P>
              Tenho facilidade em aprender novas tecnologias e me adaptar a
              diferentes contextos. Encaro desafios como oportunidades de
              crescimento e estou sempre evoluindo minhas habilidades técnicas e
              analíticas.
            </P>
          </ContAprendendo>
        </Li>

        <Li>
          <ContPensamento>
            <H2Pensa>Visão de produto</H2Pensa>

            <P>
              Vou além da implementação técnica, buscando entender o problema, o
              usuário e o impacto da solução. Desenvolvo pensando em gerar valor
              real para o negócio e contribuir para o crescimento do produto.
            </P>
          </ContPensamento>
        </Li>

        <Li>
          <ContTarefas>
            <H2Tarefas>Organização e gestão de tarefas</H2Tarefas>

            <P>
              Estruturo demandas complexas em etapas menores, facilitando a
              execução e garantindo consistência nas entregas. Utilizo
              ferramentas como GitHub (Issues, Milestones) para organizar
              tarefas e otimizar o fluxo de desenvolvimento.
            </P>
          </ContTarefas>
        </Li>
      </Lista>
    </Sectoin>
  );
};
