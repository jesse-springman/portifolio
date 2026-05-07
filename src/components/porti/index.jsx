//import { ScrollProvider } from "../../content";
import { Main } from "../secaoMain";
import { HeaderAll } from "../header";
import PortfolioSections from "../secao-projetos";
import { SoftSkills } from "../softSkills";
import { SobreMim } from "../sobreMim";
import { BoxEmail } from "../boxEmail";
import { Footer } from "../footer";


export const Portifolio = () => {



    return (
        <>
            <HeaderAll  />
            <Main  />
            <PortfolioSections  />
            <SoftSkills/>
            <SobreMim  />
            <BoxEmail  />
            <Footer  />
        </>
    )
}