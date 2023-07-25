import './CampoTexto.css'

//esse obj useState retorna o valor e o setter do valor que passa pelos eventos de controle do react

const CampoTexto = (props) => {

    const aoDigitar = (event) => {
        props.aoAlterar(event.target.value)
    }

    return (
        <div className="campo-texto">
            <label>{props.label}</label>
            <input value={props.valor} onChange={aoDigitar} required={props.required} placeholder={props.placeholder}></input>
        </div>
    )
}

export default CampoTexto