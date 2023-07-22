function adiciona (num) {
    document.getElementById ('resp').innerHTML += num
}

function reset () {
    const resp = document.getElementById ('resp')
    resp.innerHTML = ''
}

function apagar () {
    const resp = document.getElementById ('resp').innerHTML
    document.getElementById ('resp').innerHTML = resp.substring (0, resp.length -1)
}
function calcular () {
    const resp = document.getElementById ('resp').innerHTML
    
    if (resp) {
        document.getElementById ('resp').innerHTML = eval(resp)
    } else {
        const resp =  document.getElementById ('resp')
        document.getElementById ('resp').innerHTML = 'Nada para calcular'
        
    }
    
}

