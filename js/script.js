function calcularFatorial() {

    const numero = document.getElementById('fatorial').value;
    var resultado = 1;

    for (var i = 1; i <= numero; i++) {
        resultado *= i;
    }

    document.getElementById('resultado').innerText = `O fatorial de ` + numero + ' é igual a ' + resultado;

}