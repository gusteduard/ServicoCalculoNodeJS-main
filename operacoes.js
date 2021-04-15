var calculadora = function (operacao, a, b) {
    var numero1 = Number(a)
    var numero2 = Number(b)

    if (operacao == 'soma') {
        return (numero1 + numero2) + ''


    } else if (operacao == 'subtracao') {
        return (numero1 - numero2) + ''

    }else if(operacao == 'divisao') {
        return (numero1 / numero2) + ''


    }else if(operacao == 'multiplicacao') {
        return (numero1 * numero2) + ''
    }

}

module.exports = calculadora;