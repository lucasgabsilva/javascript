function contar(){
   let ini = document.getElementById('txti')
   let fim = document.getElementById('txtf')
   let passo = document.getElementById('txtp')
   let res = document.getElementById('res')

   if(ini.value.length == 0 || fim.value.length == 0 || passo.value.length == 0){
    window.alert('[ERRO] Preencha todos os campos antes de prosseguir.')
   } else {
    res.innerHTML = 'Contando <br>'
    let i = Number(ini.value)
    let f = Number(fim.value)
    let p = Number(passo.value)

    if(i < f){
    for(let c = i; c<=f; c+= p){
        res.innerHTML += `${c}\u{27A1}`
    }
    
   } else {
    for (let c = i; c >= f; c -= p){
        res.innerHTML += `${c}\u{27A1}`
      }   
    }
    res.innerHTML += `\u{1F3C1}`
   }
}