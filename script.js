function hora () {
    let horas = new Date()
    let retirar = horas.toLocaleTimeString('pt-br')

    let res = retirar

    document.getElementById('relogio').innerHTML = res 

}

let repetir = setInterval(hora, 1000)


/*let nome =   prompt('Digite seu nome')*/

document.getElementById('nome').innerHTML = nome

let horaPeriodo = new Date()
let periodo = horaPeriodo.getHours()
console.log(periodo)



function periodoDoDia () {
    if (periodo >= 06 && periodo < 12) {
        let trocar = document.getElementById('conteiner')
    
        document.querySelector('.conteiner').classList = 'manha'
    } else if (periodo >=12 && periodo < 18) {
        let trocar = document.getElementById('conteiner')
    
        document.querySelector('.conteiner').classList = 'tarde'
    } else {
        let trocar = document.getElementById('conteiner')
    
        document.querySelector('.conteiner').classList = 'noite'
    }
}

periodoDoDia()
