function enviar(){
    const nome= document.getElementById("nome").value
    const assunto = document.getElementById("assunto").value
    const mensagem = `Gostaria de entra em contato!! \n\nNome: ${nome} \nAssunto: ${assunto}`

    const msg = encodeURIComponent(mensagem)
    window.open('http://.wa.me/5541997346062')
}