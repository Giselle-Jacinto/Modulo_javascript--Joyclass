try {
    // Solicita ao usuário que informe dois números
    let numero1 = prompt("Digite o primeiro número:");
    let numero2 = prompt("Digite o segundo número:");

    // Converte os valores para números
    numero1 = parseFloat(numero1);
    numero2 = parseFloat(numero2);

    // Verifica se a conversão foi bem-sucedida
    if (isNaN(numero1) || isNaN(numero2)) {
        throw new Error("Digite valores numéricos válidos.");
    }

    // Realiza a operação de divisão
    let resultado = numero1 / numero2;

    // Verifica se o resultado é um número finito
    if (!isFinite(resultado)) {
        throw new Error("Resultado é indefinido (divisão por zero).");
    }

    // Exibe o resultado
    alert("O resultado da divisão é: " + resultado);

} catch (erro) {
    // Captura e trata a exceção
    alert("Ocorreu um erro: " + erro.message);

} finally {
    // Executa este bloco independentemente de ter ocorrido uma exceção ou não
    console.log("Fim da execução.");
}
