function calcular() {
    // Obtém os valores e o operador do usuário
    const valor1 = parseFloat(document.getElementById('valor1').value);
    const valor2 = parseFloat(document.getElementById('valor2').value);
    const operador = document.getElementById('operador').value;

    let resultado;
    let resto;

    // Realiza a operação com base nos valores e operador fornecidos
    switch (operador) {
        case '+':
            resultado = valor1 + valor2;
            break;
        case '-':
            resultado = valor1 - valor2;
            break;
        case '*':
            resultado = valor1 * valor2;
            break;
        case '/':
            resultado = Math.floor(valor1 / valor2); // Divisão inteira
            resto = valor1 % valor2; // Resto da divisão
            break;
        default:
            document.getElementById('resultado').innerText = 'Operador inválido';
            return;
    }

    // Exibe o resultado na página
    if (operador === '/') {
        document.getElementById('resultado').innerText = `Resultado: ${resultado}, Resto: ${resto}`;
    } else {
        document.getElementById('resultado').innerText = `Resultado: ${resultado}`;
    }
}
