import { Sectoin, H2Comuni, H2Auto, Span, H2Tarefas, H2Aprende, H2Pensa, Lista, Li, ContComunica, ContTarefas, ContAutoData, ContAprendendo, ContPensamento, P, H1 } from "./styleSoft"



export const SoftSkills = () => {

    return (
        <Sectoin id="refSkills" >


            <H1>Soft Skills</H1>

            <Lista>
                <Li>
                    <ContComunica>
                        <H2Comuni>COMUNICAÇÃO</H2Comuni>
                        <P>
                            Ao longo da minha jornada desenvolvi  habilidade de uma boa comunicação,
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
                            Mas mantenho minha diciplina determinado todos os dias com foco na minha aperfeisoação profissional.    
                            Pesquisando, estudando, buscando sempre novos conhecimentos e habilidades.
                        </P>

                    </ContAutoData>

                </Li>

                <Li>

                    <ContAprendendo>

                        <H2Aprende>Aprendendo a aprender</H2Aprende>

                        <P>
                           Nessa área  sempre haverá um novo aprendizado a realizar e se tem uma coisa que eu gosto é de aprender coisas novas,
                            expandir meu conhecimento. Então não tenho medo de encarar novos desafios e buscar me aprimorar para isso.
                        </P>

                    </ContAprendendo>

                </Li>


                <Li>

                    <ContPensamento>

                        <H2Pensa>Pensamento Crítico</H2Pensa>

                        <P>
                            Creio que um bom profissional contém um pensamento crítico  e eu tenho isso.



                            Sei avalivar o cenário por perspectivas diferentes
                            , tomo descições baseadas em informações revevantes, 
                            exponho minhas ídeas com argumentos fundamentados.
                
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








