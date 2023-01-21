function hora () {
    let horas = new Date()
    let retirar = horas.toLocaleTimeString('pt-br')

    let res = retirar

    document.getElementById('relogio').innerHTML = res 

}

let repetir = setInterval(hora, 1000)


let nome =   prompt('Digite seu nome') 


document.getElementById('nome').innerHTML = nome
/*
for (let dado = 1; dado < le; dado++) {
    

} */