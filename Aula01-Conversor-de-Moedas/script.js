function conversorDolar() {
    valor = prompt("Digite um valor em Real: ");
  
    dolar = 5.71;
    conversao = valor / dolar;
    // alert("€ " + conversao)
    const ResultadoFormatadoDolar = conversao.toLocaleString('pt-BR', { style: 'currency', currency: 'USD', maximumFractionDigits: 2 });
    const ValorEmDolarFormatado = valor.toLocaleString('pt-BR', { style: 'currency', currency: 'USD', maximumFractionDigits: 2 });
  
    alert( ValorEmDolarFormatado + " reais hoje equivale a " + ResultadoFormatadoDolar )
   }
  
  function conversorEuro() {
    valor = prompt("Digite um valor em Real: ");
  
    euro = 6.19;
    conversao = valor / euro;
    // alert("€ " + conversao)
    
    const ResultadoFormatadoEuro = conversao.toLocaleString('pt-BR', { style: 'currency', currency: 'EUR', maximumFractionDigits: 2 });
    const ValorEmDolarFormatado = valor.toLocaleString('pt-BR', { style: 'currency', currency: 'EUR', maximumFractionDigits: 2 });
  
    alert( ValorEmDolarFormatado + " reais hoje equivale a " + ResultadoFormatadoEuro )
  }
  
  function conversorWons() {
    valor = prompt("Digite um valor em Real: ");
  
    euro = 0.0040;
    conversao = valor / euro;
    // alert("₩ " + conversao)
    
    const ResultadoFormatadoWons = conversao.toLocaleString('pt-BR', { style: 'currency', currency: 'KRW', maximumFractionDigits: 2 });
    const ValorEmDolarFormatado = valor.toLocaleString('pt-BR', { style: 'currency', currency: 'KRW', maximumFractionDigits: 2 });
  
    alert( ValorEmDolarFormatado + " reais hoje equivale a " + ResultadoFormatadoWons )
  }
