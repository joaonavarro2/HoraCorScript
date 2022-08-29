function carregar(){
var msg = window.document.getElementById('msg')
var img = window.document.getElementById('img')
var data = new Date()
var hora = data.getHours()
var min = data.getMinutes()
// var hora = 21
msg.innerHTML = `<h1>Agora são ${hora} horas e ${min} minutos <h1>`
    if(hora >= 0 && hora <12){
        img.src = 'imagens/manha1.jpg'
        document.body.style.backgroundColor = '#fff2A6'
    } else if (hora >= 12 && hora <18){
        img.src = 'imagens/tarde.jpg'
        document.body.style.backgroundColor = '#ff6961'
    }
    else{
        img.src = 'imagens/noite.jpg'
        document.body.style.backgroundColor = '#cca9dd'
    }
}