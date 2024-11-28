/**
 * Simples simulador de uma lâmpada
 * @author Gabriel Yago 
 */

let som = new Audio('sound/alarme.mp3')
// lanterna (pré carregamento)
let stream, track //variaveis de apoio
inicializarLanterna()


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
        ligar() 
        inicializarLanterna()
})
//touchend (deixar de pressionar a tela touch) 
botao.addEventListener('touchend', (event) => {
    event.preventDefault()//ignorar o comportamento padrão 
    som.pause()
    desligar()
    inicializarLanterna()
})
//touchstart (tocar na tela e manter)
botao.addEventListener('touchstart', (event) => {
    event.preventDefault()//ignorar o comportamento padrão 
   // console.log('tela pressionado')
   if (lampada === true && chave ===false){
    lampadaImg.src='img/on.jpg'//troca a imagem
} 
})
//touchend (deixar de pressionar a tela touch) 
botao.addEventListener('touchend', (event) => {
    event.preventDefault()//ignorar o comportamento padrão 
   // console.log('tela livre')
   if (lampada === true && chave ===false){
    lampadaImg.src='img/off.jpg'//troca a imagem
}
})

//Lanterna (torch)
async function inicializarLanterna(){
   // try catch (tratamento de exceções)
    try {
        // Solicita acesso à câmera traseira sem exibir o vídeo
        stream = await navigator.mediaDevices.getUserMedia({
            video: { facingMode: "environment" }
        })
        
        // Obtém o track do vídeo para controlar a lanterna
        track = stream.getVideoTracks()[0]
        
        // Verifica se o dispositivo suporta o uso da lanterna
        const capabilities = track.getCapabilities()
        if (!capabilities.torch) {
            console.log("Lanterna não suportada no dispositivo.")
            return
        }
    } catch (error) {
        console.error(`Erro ao inicializar a lanterna: ${error}`)
    }
}

async function ligar(){
    if (track) {
        try {
            await track.applyConstraints({ advanced: [{ torch: true }] })
        } catch (error) {
            console.error(`Erro ao inicializar a lanterna: ${error}`)
        }
    }
}

async function desligar(){
    if (track) {
        try {
            await track.applyConstraints({ advanced: [{ torch: false }] })
        } catch (error) {
            console.error(`Erro ao inicializar a lanterna: ${error}`)
        }
    }
}

