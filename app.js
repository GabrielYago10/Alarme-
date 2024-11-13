/**
 * Simples simulador de uma lâmpada
 * @author Gabriel Yago 
 */

let som = new Audio('sound/alarme.mp3')


const botao = document.getElementById('button')

botao.addEventListener('mousedown', (event) => {
    event.preventDefault()//ignorar o comportamento padrão
    //console.log('botão pressionado')
    // se a lampada estiver intacta e o interruptor principal estiver desligado
   som.play()
})
//mouseup (soltar o botão do mouse) 
botao.addEventListener('mouseup', (event) => {
    event.preventDefault()//ignorar o comportamento padrão 
   // console.log('botão solto')
     // se a lampada estiver intacta e o interruptor principal estiver desligado
    som.pause()
})

//touchstart (tocar na tela e manter)
botao.addEventListener('touchstart', (event) => {
    event.preventDefault()//ignorar o comportamento padrão 
   // console.log('tela pressionado')
    som.play()
})
//touchend (deixar de pressionar a tela touch) 
botao.addEventListener('touchend', (event) => {
    event.preventDefault()//ignorar o comportamento padrão 
    som.pause()
})
