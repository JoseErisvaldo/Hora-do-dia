function hora () {
    let horas = new Date()
    let retirar = horas.toLocaleTimeString('pt-br')

    let res = retirar

    document.getElementById('relogio').innerHTML = res 

}

let repetir = setInterval(hora, 1000)


let nome =   prompt('Digite seu nome')

document.getElementById('nome').innerHTML = nome

let horaPeriodo = new Date()
let periodo = horaPeriodo.getHours()

function periodoDoDia () {
    if (periodo >= 06 && periodo < 09) {
        let trocar = document.getElementById('conteiner')
    
        document.querySelector('.conteiner').classList = 'manhazinha'
    } else if (periodo >= 09 && periodo < 12){
        let trocar = document.getElementById('conteiner')
    
        document.querySelector('.conteiner').classList = 'manha'
    } else if (periodo >=12 && periodo < 17) {
        let trocar = document.getElementById('conteiner')
    
        document.querySelector('.conteiner').classList = 'tarde'
    } else if (periodo >=17 && periodo <  19) {
        let trocar = document.getElementById('conteiner')
    
        document.querySelector('.conteiner').classList = 'tardezinha'
    } else {
        let trocar = document.getElementById('conteiner')
    
        document.querySelector('.conteiner').classList = 'noite'
    }
}

periodoDoDia()
