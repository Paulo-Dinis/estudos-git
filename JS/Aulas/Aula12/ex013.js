var agora = new Date()
var diasem = agora.getDay()

switch(diasem) {
    case 0: 
        console.log('Domingo')
        break
    case 1: 
        console.log('segunda')
        break
    case 2: 
        console.log('terça')
        break
    case 3: 
        console.log('Quarta')
        break    
    case 4: 
        console.log('Quinta')
        break   
    case 5: 
        console.log('Sexta')
        break
    case 6: 
        console.log('Sabado')
        break     
    default:
        console.log('[erro] Dia inválido!')
        break
}