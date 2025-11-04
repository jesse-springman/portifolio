import { Sectoin, H2Comuni, H2Auto, Span, SpanAuto,  SpanAprende, SpanPensa, SpanComuni, H2Tarefas, H2Aprende, H2Pensa, Lista, Li, ContComunica, ContTarefas, ContAutoData, ContAprendendo, ContPensamento, P, H1 } from "./styleSoft"



export const SoftSkills = () => {

    return (
        <Sectoin id="refSkills" >


            <H1>Soft Skills</H1>

            <Lista>
                <Li>
                    <ContComunica>
                        <H2Comuni>COMUNICAÇÃO</H2Comuni>
                        <P>
                            <SpanComuni>Ao longo da minha jornada desenvolvi  habilidade de uma boa comunicação,</SpanComuni>
                            tenho ciência que isso é fator essencial para um bom desenvolvimento profissional.
                            Acredito que a colaboração e diálogo são a melhor forma de vencer os desafios que nós  encontramos.
                        </P>
                    </ContComunica>

                </Li>

                <Li>
                    <ContAutoData>


                        <H2Auto>Autodidata</H2Auto>

                        <P>
                            Há anos que sou Autodidata, no momento não curso o ensino superior, não por falta de interesse, mas por requisitos financeiros.
                            <SpanAuto>Mas mantenho minha diciplina determinado todos os dias com foco na minha aperfeisoação profissional.</SpanAuto>
                            Pesquisando, estudando, buscando sempre novos conhecimentos e habilidades.
                        </P>

                    </ContAutoData>

                </Li>

                <Li>

                    <ContAprendendo>

                        <H2Aprende>Aprendendo a aprender</H2Aprende>

                        <P>
                            Nessa área  sempre haverá um novo aprendizado a realizar e se tem uma coisa que eu gosto é de aprender coisas novas,
                            expandir meu conhecimento. <SpanAprende>Então não tenho medo de encarar novos desafios e buscar me aprimorar para isso</SpanAprende> .
                        </P>

                    </ContAprendendo>

                </Li>


                <Li>

                    <ContPensamento>

                        <H2Pensa>Foco em resultados e entrega de valor</H2Pensa>

                        <P>
                            Tenho uma visão de negócio além da programação,
                            <SpanPensa> além da programação, eu gosto de pensar no resultado final do produto, entendendo o público,
                            o problema e as oportunidades de negócio</SpanPensa>  .
                            Acredito que um bom desenvolvedor também deve construir soluções que geram valor e ajudam a empresa a crescer.

                        </P>

                    </ContPensamento>
                </Li>


                <Li>

                    <ContTarefas>

                        <H2Tarefas>Gerenciamento de Tarefas</H2Tarefas>

                        <P>
                            Gestão é algo fundamental, gosto criar uma estrutura de tarefas para me guiar. Pegar algo complexo a ser realizado e dividir em pequenas tarefas
                            para ir avançando mesmo aos poucos.
                            Eu utilizo os recursos do <Span>GitHub</Span> para estruturar minhas tarefas, <Span>Milestones, Issues, task</Span>, são execelentes ferramentas que auxiliam
                            o gerenciamento de tempo e recurso de maneira eficaz
                        </P>

                    </ContTarefas>
                </Li>





            </Lista>
        </Sectoin>

    )

}








