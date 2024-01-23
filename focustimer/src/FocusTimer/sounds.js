export const buttonPressAudio = new Audio('./assets/button-press.wav')

export const kitchenTimer = new Audio('./assets/kichen-timer.mp3')

export const bgAudio = new Audio('./assets/bg-audio.mp3')

bgAudio.loop = true // Fica em loop, para sempre.



// (linha 1) É um construtor de áudio no html juntamente com a DOM. É a mesma coisa que iniciarmos um play em uma tag HTML. O único detalhe é que se eu crio uma tag de audio no HTML eu vejo o player. Guardando o caminho do audio na constante eu posso usar no meu js 