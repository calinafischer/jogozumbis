
function resposta1 (){

    var quantTentativa=2
    var quantTentativaAtual=0

    while (quantTentativa >= quantTentativaAtual) {
    
    var resposta=prompt('Escolha uma das alternativas:')

    if (resposta=="a" || resposta=='A') {
        alert ('Excelente escolha!')

        window.location.href="../Josi/josifase2entranocarro.html"

        break
    }
    else if (resposta=='b' || resposta=='B') {
        alert('Excelente escolha!')

        window.location.href="../Josi/josifase2continuacorrendo.html"

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
    
            window.location.href="../Josi/josifase3entranacasa.html"
            break
        }
        else if (resposta=='c' || resposta=='C') {
            alert('Excelente escolha!')
    
            window.location.href="../Josi/josifase3correprafloresta.html"
    
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
    
            window.location.href="../Josi/josifase3vasculhacarro.html"
            break
        }
        else if (resposta=='c' || resposta=='C') {
            alert('Excelente escolha!')
    
            window.location.href="../Josi/josifase3saicorrendo.html"
    
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