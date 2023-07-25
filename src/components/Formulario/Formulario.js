import { useState } from 'react'
import Botao from '../Botao/Botao'
import CampoTexto from '../CampoTexto/CampoTexto'
import Dropbox from '../Dropbox/Dropbox'
import './Formulario.css'

const Formulario = (props) => {


    const [nome, setNome] = useState('')
    const [cargo, setCargo] = useState('')
    const [imagem, setImagem] = useState('')
    const [time, setTime] = useState('')

    const aoSalvar = (event) => {
        //previnindo o comportamento padrao do js, para n recarregar a pagina
        event.preventDefault()
        console.log(nome, cargo, imagem, time)
        //ao submeter o form eu seto na prop aoColaboradorCadastrado os valores dos campos
        props.aoColaboradorCadastrado ({
            nome,
            cargo,
            imagem,
            time
        })
    }

    return (
        <section className="formulario">
            <form onSubmit={aoSalvar}>
                <h2>Preencha os dados para criar o card do colaborador </h2>
                <CampoTexto 
                    required
                    label="Nome" 
                    placeholder="Digite seu nome"
                    valor={nome}
                    aoAlterar={valor => setNome(valor)} />
                <CampoTexto 
                    required
                    label="Cargo" 
                    placeholder="Digite seu cargo"
                    valor={cargo}
                    aoAlterar={valor => setCargo(valor)} />
                <CampoTexto 
                    label="Imagem" 
                    placeholder="Digite o endereco da imagem"
                    valor={imagem}
                    aoAlterar={valor => setImagem(valor)} />
                <Dropbox valor={time} aoAlterar={valor => setTime(valor)} label="Times" itens={props.times}></Dropbox>
                <Botao>Criar Card</Botao>
            </form>
        </section>
    )
}

export default Formulario