import Colaborador from '../Colaborador/Colaborador'
import './Time.css'

const Time = (props) => {

    return (
       (props.colaboradores.length > 0) ? <section className='time' style={{backgroundColor: props.corSecundaria}}>
            <h3 style={{borderColor: props.corPrimaria}}>{props.nome}</h3>
            <div className='colaboradores'>
                {props.colaboradores.map(colaborador => <Colaborador corDeFundo={props.corPrimaria}
                    nome={colaborador.nome} 
                    imagem={colaborador.imagem} 
                    cargo={colaborador.cargo}/>)}
                
            </div>
       </section>
       : ''
    )
}

export default Time