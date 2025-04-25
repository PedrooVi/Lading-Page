function navegar(url, seletor){
    if(!url || !seletor) return
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