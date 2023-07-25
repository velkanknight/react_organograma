import './Banner.css'

function Banner (){

    // o / do endereco da imagem é o diretorio publico do projeto
    return (
        <header className='banner'>
            <img src="/imagens/banner.png" alt="Banner principal da página"/>
        </header>
    )

}

export default Banner