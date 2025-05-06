function navegacaoPagina(id){
    const elemento = document.getElementById(id)
    if(elemento){
        elemento.scrollIntoView({behavior: 'smooth'})
    }
}

document.querySelectorAll('[navegacao]').forEach(link =>{
    link.addEventListener('click', function (e){
        e.preventDefault()
        const destino = link.getAttribute('navegacao')
        navegacaoPagina(destino)
    })
})


function verNoMapa(unidade){
    const card = unidade.closest('.card')
    const endereco = card.querySelector('h3').textContent

    const url = `https://www.google.com/maps/search/?api=1&query=${endereco}`
    window.open(url, '_blank')

}

document.querySelectorAll('.btn-card').forEach(botao =>{
    botao.addEventListener('click', function(e){
        e.preventDefault()
        verNoMapa(botao)
    })
})