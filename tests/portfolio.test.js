import { render, screen } from '@testing-library/react'
import { Portifolio } from '../src/components/porti/index.jsx'
 
describe('Botões do Cabeçalho', ()=>{
   
        render(<Portifolio/>);

});


    it('render btn Sobre', ()=>{
      
        const btnSobre = screen.getByText('Sobre-mim');
        
        expect(btnSobre).toBeInTheDocument();
    });

    it('render btn projeto', ()=>{
        
        const btnProjeto = screen.getByTestId('liProjeto');
        
        expect(btnProjeto).toBeInTheDocument();
    });

    it('render btn Soft-Skills', ()=>{
        
        const btnSoft = screen.getByTestId('liSoft');
        
        expect(btnSoft).toBeInTheDocument();
    });

    it('render btn Contato', ()=>{
        
        const btnContato = screen.getByTestId('liContato');
        
        expect(btnContato).toBeInTheDocument();
    })