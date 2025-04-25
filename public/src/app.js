function navegar(url, seletor){
    
    if(!url || !seletor) return

    document.querySelectorAll('.section-principal').forEach(secao => {
        secao.style.display = 'none'
    })
    

    const elemento = document.querySelector(seletor)
    fetch(url)
    .then(resp  => resp.text())
    .then(html =>{
        elemento.innerHTML = html
    })
}

document.querySelectorAll('[nav-link]').forEach(link =>{
    const url = link.attributes['nav-link'].value
    const seletorDestino = link.attributes['nav-destino'].value

    link.onclick = e => {
        e.preventDefault()
        navegar(url, seletorDestino)
    }
})

function navegacaoUnidades(id){
    const elemento = document.getElementById(id)
    if(elemento){
        elemento.scrollIntoView({behavior: 'smooth'})
    }
}

document.querySelectorAll('[nav-unidades]').forEach(link =>{
    link.addEventListener('click', function (e){
        e.preventDefault()
        navegacaoUnidades('unidades')
    })
})