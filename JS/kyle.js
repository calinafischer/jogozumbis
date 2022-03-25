
function resposta1 (){

    var quantTentativa=2
    var quantTentativaAtual=0

    while (quantTentativa >= quantTentativaAtual) {
    
    var resposta=prompt('Escolha uma das alternativas:')

    if (resposta=="a" || resposta=='A') {
        alert ('Excelente escolha!')

        window.location.href="../Kyle/kylefase2entrarnacasa.html"

        break
    }
    else if (resposta=='b' || resposta=='B') {
        alert('Excelente escolha!')

        window.location.href="../Kyle/kylefase2continuacorrendo.html"

        break
    }

    else if (resposta=='c' || resposta=='C') {
        alert('Oh não, tente novamente')
        quantTentativa--
    }

    if (quantTentativa<=quantTentativaAtual) {
        alert('Você alcançou o número de tentativas...')
    
        window.location.href="../HTML/derrota.html"
    
    }
    }
}

function resposta021() {

    var quantTentativa=2
    var quantTentativaAtual=0

    while (quantTentativa >= quantTentativaAtual) {
    
        var resposta=prompt('Escolha uma das alternativas:')
    
        if (resposta=="a" || resposta=='A') {
            alert ('Excelente escolha!')
    
            window.location.href="../Kyle/kylefase3escalaarvore.html"
            break
        }
        else if (resposta=='c' || resposta=='C') {
            alert('Excelente escolha!')
    
            window.location.href="../Kyle/kylefase3pulanoriacho.html"
    
            break
        }
    
        else if (resposta=='b' || resposta=='B') {
            alert('Oh não, tente novamente')
            quantTentativa--
        }
    
        if (quantTentativa<=quantTentativaAtual) {
            alert('Você alcançou o número de tentativas...')
        
            window.location.href="../HTML/derrota.html"
        
        }
    }

}

function resposta022() {

    var quantTentativa=2
    var quantTentativaAtual=0

    while (quantTentativa >= quantTentativaAtual) {
    
        var resposta=prompt('Escolha uma das alternativas:')
    
        if (resposta=="a" || resposta=='A') {
            alert ('Excelente escolha!')
    
            window.location.href="../Kyle/kylefase3escolhearma.html"
            break
        }
        else if (resposta=='c' || resposta=='C') {
            alert('Excelente escolha!')
    
            window.location.href="../Kyle/kylefase3esconde.html"
    
            break
        }
    
        else if (resposta=='b' || resposta=='B') {
            alert('Oh não, tente novamente')
            quantTentativa--
        }
    
        if (quantTentativa<=quantTentativaAtual) {
            alert('Você alcançou o número de tentativas...')
        
            window.location.href="../HTML/derrota.html"
        
        }
    }

}

function resposta3 (){

    var quantTentativa=2
    var quantTentativaAtual=0

    while (quantTentativa >= quantTentativaAtual) {
    
    var resposta=prompt('Escolha uma das alternativas:')

    if (resposta=='a' || resposta=='A') {
        alert ('Excelente escolha!')

        window.location.href="../HTML/vitoria.html"

        break
    }
    else if (resposta=='c' || resposta=='C') {
        alert('Excelente escolha!')

        window.location.href="../HTML/vitoria.html"

        break
    }

    else if (resposta=='b' || resposta=='B') {
        alert('Oh não, tente novamente')
        quantTentativa--
    }
}

    if (quantTentativa<=quantTentativaAtual) {
    alert('Você alcançou o número de tentativas...')

    window.location.href="../HTML/derrota.html"
}
}