var agora = new Date()
var diaSem = agora.getDay()

console.log(diaSem)

switch(diaSem){
    case 0: 
        console.log('Tenha um bom domingo!')
        break
    case 1: 
        console.log('Tenha uma boa segunda!')
        break
    case 2: 
        console.log('Tenha uma boa terça!')
        break
    case 3: 
        console.log('Tenha uma boa quarta!')
        break
    case 4: 
        console.log('Tenha uma boa quinta!')
        break
    case 5: 
        console.log('Tenha uma boa sexta!')
    break
    case 6: 
        console.log('Tenha um bom sábado!')
        break
    default:
        console.log('Dia inválido')
        break
}