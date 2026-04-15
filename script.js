document.addEventListener("DOMContentLoaded", () => {

    // ==========================================
    // 1. SIMULADOR DE ECONOMIA
    // ==========================================
    
    // Selecionando os inputs e botões baseado na estrutura atual do seu HTML
    const inputsEconomia = document.querySelectorAll("#simulador .field input");
    const btnCalcularEconomia = document.querySelector("#simulador .action-btn");
    const resultadosList = document.querySelectorAll("#simulador .result-list strong");

    if (btnCalcularEconomia) {
        btnCalcularEconomia.addEventListener("click", () => {
            // Pegando os valores digitados (substituindo vírgula por ponto para evitar erros matemáticos)
            const contaLuz = parseFloat(inputsEconomia[0].value.replace(',', '.')) || 0;
            const consumoLuz = parseFloat(inputsEconomia[1].value.replace(',', '.')) || 0; // Opcional para o cálculo base
            const contaAgua = parseFloat(inputsEconomia[2].value.replace(',', '.')) || 0;
            const consumoAgua = parseFloat(inputsEconomia[3].value.replace(',', '.')) || 0; // Opcional para o cálculo base

            // Regras de negócio hipotéticas para a simulação:
            // Cisterna economiza em média 40% da conta de água
            // Energia solar economiza em média 85% da conta de luz
            const economiaCisterna = contaAgua * 0.40;
            const economiaSolar = contaLuz * 0.85;
            const economiaTotal = economiaCisterna + economiaSolar;

            // Atualizando os valores na tela
            resultadosList[0].textContent = `R$ ${economiaCisterna.toFixed(2).replace('.', ',')}`;
            resultadosList[1].textContent = `R$ ${economiaSolar.toFixed(2).replace('.', ',')}`;
            resultadosList[2].textContent = `R$ ${economiaTotal.toFixed(2).replace('.', ',')}`;
        });
    }

    // ==========================================
    // 2. SIMULADOR DE INVESTIMENTO
    // ==========================================
    
    const inputInvestimento = document.querySelector("#investimento .sim-invest input");
    const btnVerResultados = document.querySelector("#investimento .action-btn");
    const divSimInvest = document.querySelector("#investimento .sim-invest");

    if (btnVerResultados) {
        btnVerResultados.addEventListener("click", () => {
            const valorInvestido = parseFloat(inputInvestimento.value.replace(',', '.')) || 0;

            // Rentabilidade hipotética do mercado verde: 12% ao ano
            const lucro = valorInvestido * 0.12;
            const totalAcumulado = valorInvestido + lucro;

            // Como não há um campo específico no HTML para a resposta, 
            // o JS cria um texto abaixo do botão dinamicamente.
            let resultadoTexto = document.getElementById("resultado-investimento");
            
            // Se o texto de resultado ainda não existir, nós o criamos
            if (!resultadoTexto) {
                resultadoTexto = document.createElement("div");
                resultadoTexto.id = "resultado-investimento";
                resultadoTexto.style.marginTop = "15px";
                resultadoTexto.style.fontSize = "14px";
                divSimInvest.appendChild(resultadoTexto);
            }

            // Exibe o resultado formatado
            resultadoTexto.innerHTML = `
                Retorno estimado em 1 ano (12% a.a.): <br>
                <span style="color: #4caf50; font-weight: bold;">R$ ${lucro.toFixed(2).replace('.', ',')}</span> <br><br>
                Total Acumulado: <strong>R$ ${totalAcumulado.toFixed(2).replace('.', ',')}</strong>
            `;
        });
    }
});