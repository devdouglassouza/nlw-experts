const perguntas = [
    {
      pergunta:
        "Qual é a palavra-chave usada para declarar uma variável que não pode ser alterada?",
      respostas: ["let", "var", "const"],
      correta: 2, // "const"
    },
    {
      pergunta: "Qual função é usada para imprimir algo no console?",
      respostas: ["print()", "console.log()", "log()"],
      correta: 1, // "console.log()"
    },
    {
      pergunta: "Qual dos seguintes é um tipo de dado primitivo em JavaScript?",
      respostas: ["array", "object", "string"],
      correta: 2, // "string"
    },
    {
      pergunta:
        "Qual operador é usado para comparar valores e tipos em JavaScript?",
      respostas: ["==", "===", "!="],
      correta: 1, // "==="
    },
    {
      pergunta: "O que o método 'push()' faz em um array?",
      respostas: [
        "Remove o último elemento",
        "Adiciona um elemento ao final",
        "Inverte os elementos",
      ],
      correta: 1, // "Adiciona um elemento ao final"
    },
    {
      pergunta: "Qual destes é um método de string em JavaScript?",
      respostas: ["length()", "toUpperCase()", "concat()"],
      correta: 1, // "toUpperCase()"
    },
    {
      pergunta: "Qual é o resultado da expressão '5 + '5' em JavaScript?",
      respostas: ["55", "10", "Erro"],
      correta: 0, // "55"
    },
    {
      pergunta: "Qual é a função do operador 'typeof'?",
      respostas: [
        "Para verificar se um valor é nulo",
        "Para verificar o tipo de um valor",
        "Para verificar se um valor é indefinido",
      ],
      correta: 1, // "Para verificar o tipo de um valor"
    },
    {
      pergunta: "Qual é a função do operador '&&'?",
      respostas: [
        "Operador de concatenação de strings",
        "Operador de adição",
        "Operador lógico E",
      ],
      correta: 2, // "Operador lógico E"
    },
    {
      pergunta: "O que o método 'slice()' faz em uma string?",
      respostas: [
        "Divide a string em substrings",
        "Remove espaços em branco",
        "Extrai uma parte da string",
      ],
      correta: 2, // "Extrai uma parte da string"
    },
  ];
  
  //selecionando no HTML a div e o template
  const quiz = document.querySelector("#quiz");
  const template = document.querySelector("template");
  
  const corretas = new Set();
  const totalDePerguntas = perguntas.length;
  const mostrarTotal = document.querySelector("#acertos span");
  mostrarTotal.textContent = corretas.size + " de " + totalDePerguntas;
  
  //loop ou laço de repetição
  for (const item of perguntas) {
    const quizItem = template.content.cloneNode(true);
    quizItem.querySelector("h3").textContent = item.pergunta;
  
    for (let resposta of item.respostas) {
      const dt = quizItem.querySelector("dl dt").cloneNode(true);
      dt.querySelector("span").textContent = resposta;
      dt.querySelector("input").setAttribute(
        "name",
        "pergunta-" + perguntas.indexOf(item)
      );
      dt.querySelector("input").value = item.respostas.indexOf(resposta);
      dt.querySelector("input").onchange = (event) => {
        const estaCorreta = event.target.value == item.correta;
        corretas.delete(item);
        if (estaCorreta) {
          corretas.add(item);
        }
  
        mostrarTotal.textContent = corretas.size + " de " + totalDePerguntas;
      };
  
      quizItem.querySelector("dl").appendChild(dt);
    }
  
    //deleta a primeira linha Resposta A
    quizItem.querySelector("dl dt").remove();
  
    //coloca a pergunta na tela
    quiz.appendChild(quizItem);
  }
  