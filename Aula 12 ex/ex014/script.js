function carregar(){
var msg = window.document.getElementById('msg')//objeto mensagem da pagina em html
var img = window.document.getElementById('imagem')//pega o objeto chamado imagem do codigo html
var data = new Date()//pega a data do sistema
var hora = 12

msg.innerHTML = `Agora são exatamente ${hora} horas`

if (hora >=0 && hora < 12){//se a hora estiver entre 0 e 12, vai dar bom dia
    //bom dia 
    img.src ='fotomanha.png'
    document.body.style.background = '#e3cd9f'
    document.body.style.color = '#000000'
} else if /*se não*/ (hora >= 12 && hora <= 18){//se a hora estiver entre 12 e 18h, da boa tarde
    //boa tarde
    img.src = 'fototarde.png'
    document.body.style.background = '#b9846f'
    document.body.style.color = '#000000'
} else {
    //boa noite
    img.src = 'fotonoite.png'
    document.body.style.background = '#515154'
    document.body.style.color = '#000000'
}


}