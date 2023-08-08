
function contar(){
    var ini = window.document.getElementById('inicio')
    var fim = window.document.getElementById('fim')
    var pass = window.document.getElementById('passo')
    let res = document.getElementById('res')
    
    if (ini.value.length == 0 || fim.value.length == 0 || pass.value.length == 0){
        res.innerHTML = `Impossível contar se as caixas estiverem vazias`
        window.alert('[ERRO] Verifique os dados e tente novamente.')
    } else {
        res.innerHTML = `Contando...<br>`
        let i = Number(ini.value)
        let f = Number(fim.value)
        let p = Number(pass.value)
        if (p <= 0){
            window.alert('O passo não pode ser menor ou igual a zero')
        }
         if (i < f){
            for (let c = 1; c <= f; c += p){
                 res.innerHTML += `${c} \u{1F449}` 
        }
        } else {
            for (c = i; c>= f; c -= p) {
                res.innerHTML += `${c} \u{1F449}`
            }

        }
        res.innerHTML += `\u{1f3C1}`
            
    }
}