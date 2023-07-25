import Banner from './components/Banner/Banner';
import Formulario from './components/Formulario/Formulario';
import { useState } from 'react'
import Time from './components/Time/Time';


function App() {

  const times = [
    {
      nome: 'Programacao',
      corPrimaria: '#57c278',
      corSecundaria: '#d9f7e9'
    },
    {
      nome: 'Front-End',
      corPrimaria: '#82cffa',
      corSecundaria: '#e8f8ff'
    },
    {
      nome: 'Data Science',
      corPrimaria: '#e06869',
      corSecundaria: '#fde7e8'
    }

  ]

  const [colaboradores, setColaboradores] = useState([])

  const aoNovoColaboradorAdicionado = (colaborador) => {
    console.log(colaborador)
    setColaboradores([...colaboradores, colaborador])
  }

//no momento que a prop aoColaboradorCadastrado recebe o obj, eu passo esse obj pra funcao aoNovoColaboradorAdicionado
//note que é um caminho inverso aos framework convecionais
  
  return (
    <div className="App">
      <Banner/>
      <Formulario times={times.map(time => time.nome)} aoColaboradorCadastrado={colaborador => aoNovoColaboradorAdicionado(colaborador)}/> 
      {times.map(time => <Time 
        key={time.nome} 
        nome={time.nome} 
        corPrimaria={time.corPrimaria} 
        corSecundaria={time.corSecundaria}
        colaboradores={colaboradores.filter(c => c.time === time.nome)}/>)}
    </div>
  );
}

export default App;
