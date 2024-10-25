
import { SecForm, H3, ContForm, Form, Label, Input, BtnSubmet } from "./styleBoxEmail"

export const BoxEmail = () => {
    return (


        <SecForm>


            <ContForm>

                <H3>Contato</H3>

                <Form target="_blank" class="form-email" action="https://formsubmit.co/597bc9afabfe7827fefa925554ff8621" method="POST" >

                    <Label htmlFor="nome">Nome :</Label>
                    <Input type="text" name="nome" placeholder="Digite seu nome" />


                    <Label htmlFor="email">Email :</Label>
                    <Input type="email" name="email" placeholder="Digite seu Email" required />



                    <Label htmlFor="mensagem">Mensagem :</Label>
                    <Input style={{ height: '100px' }} name="mensagem" placeholder="Digite sua menssagem" />

                    {/* <Texto name="mensagem"  placeholder="Digite sua menssagem"  /> */}


                    <BtnSubmet type="submit" >Enviar</BtnSubmet>


                </Form>
            </ContForm>

        </SecForm>


    )
};