import { Portifolio } from './components/porti'
import { createGlobalStyle } from 'styled-components'
import './App.css'

function App() {


  return (
    <>
      <GlobalStyle/>
        <Portifolio />
    </>
  )
}


const GlobalStyle = createGlobalStyle`
 *{
  padding: 0;
  margin: 0;
  box-sizing: border-box;
  text-decoration: none;
  color:black;
  font-weight: 500;
  list-style: none;
  font-family: "Orbitron", sans-serif;  
  /* background-color: rgb(17, 19, 46); */
  color: aliceblue;

 }
`

export default App
