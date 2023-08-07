var idade = 66
if (idade < 16){
    console.log('Não pode votar')
} else if (idade < 18 || idade > 65){
        console.log('Seu voto é opcional')
} else if (idade >=18){
    console.log('Seu voto é obrigatório')
}