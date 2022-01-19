function carregar() {
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    var min = data.getMinutes ()
    msg.innerHTML=`Agora são: ${hora}hrs e ${min}min`
    if (hora >= 0 && hora < 12) {
        //BOM DIA!
        img.src = 'imagem/FotoManha.png' 
        document.body.style.background = '#faedba'
    } else if (hora >= 12 && hora <= 18) {
        //BOA TARDE!
        img.src = 'imagem/FotoTarde.png'
        document.body.style.background = '#ffce89'
    } else {
        //BOA NOITE!
        img.src = 'imagem/FotoNoite.png'
        document.body.style.background = '#1a2d2e'
    }

}