import './Botao.css'

//Ao usar o children, podemos acessar oq é passado dentro das tags do elemento, exemplo <div> esse conteudo </div>
const Botao = (props) => {
    return (
    <button className='botao'>
        {props.children}
    </button>)
}

export default Botao