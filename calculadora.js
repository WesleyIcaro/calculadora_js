function calculadora() {
  const operacoes = Number(
    prompt(
      'Escolha uma operação:\n 1 - Soma (+)\n 2 - Subtração (-)\n 3 - Multiplicação (*)\n 4 - Divisão (/)\n 5 - Resto da divisão (%)\n 6 - Potência (**)'
    )
  )

  if (!operacoes || operacoes >= 7) {
    alert(`Valor inválido!`)
    calculadora()
  } else {
    let n1 = Number(prompt('Insira o primeiro valor:'))
    let n2 = Number(prompt('Insira o segundo valor:'))
    let resultado

    if (!n1 || !n2) {
      alert(`Valores inválidos!`)
      calculadora()
    } else {
      function soma() {
        resultado = n1 + n2
        alert(`${n1} + ${n2} = ${resultado}`)
        novaOperacao()
      }

      function subtracao() {
        resultado = n1 - n2
        alert(`${n1} - ${n2} = ${resultado}`)
        novaOperacao()
      }

      function multiplicacao() {
        resultado = n1 * n2
        alert(`${n1} * ${n2} = ${resultado}`)
        novaOperacao()
      }

      function divisao() {
        resultado = n1 / n2
        alert(`${n1} / ${n2} = ${resultado}`)
        novaOperacao()
      }

      function restoDaDivisao() {
        resultado = n1 % n2
        alert(`O resto da divisão entre ${n1} e ${n2} é ${resultado}`)
        novaOperacao()
      }

      function potencia() {
        resultado = n1 ** n2
        alert(`A potência de ${n1} elevado a ${n2} é ${resultado}`)
        novaOperacao()
      }
      function novaOperacao() {
        let opcao = prompt(
          'Deseja fazer uma nova operação?\n 1 - Sim!\n 2 - Não!'
        )
        if (opcao == 1) {
          calculadora()
        } else if (opcao == 2) {
          alert(`Até mais!`)
        } else {
          alert(`Opção inválida!`)
          novaOperacao()
        }
      }
    }

    switch (operacoes) {
      case 1:
        soma()
        break
      case 2:
        subtracao()
        break
      case 3:
        multiplicacao()
        break
      case 4:
        divisao()
        break
      case 5:
        restoDaDivisao()
        break
      case 6:
        potencia()
        break
    }
  }
}

calculadora()
