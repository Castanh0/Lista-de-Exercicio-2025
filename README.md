# Atividades+PraTi

Todos os EXERCICIOS do Codifica/+praTI

⚠️OBS: PARA OLHAR AS ATIVIDADES, ENTRE EM BRANCHES!!!

📝 Lista de Exercícios +PraTi & Codifica Edu


📋 Pré-requisitos


✅ PASSO 1: Instalar o Node.js

1 - Vá até o site oficial: https://nodejs.org/

2 - Baixe a versão LTS (a mais estável).

3 - Instale o Node.js no seu computador (é só ir clicando em "Next", pode deixar tudo padrão).

4 - Depois de instalar, abra o terminal (CMD, PowerShell ou o terminal do VS Code) e digite: "node -v" // isso mostra a versão do seu node.js


✅ PASSO 2: Criar um projeto no VS Code

1 - Crie uma pasta no seu computador, como exemplo: (meu-projeto-js).

2 - Abra essa pasta no Visual Studio Code.

3 - Dentro dela, crie um arquivo chamado (index.js).


✅ PASSO 3: Instalar o prompt-sync

1 - No terminal do VS Code (atalho: Ctrl + aspas), digite: "npm init -y" // Isso vai criar um (package.json) no seu projeto.

2 - Depois, instale o prompt-sync com: "npm install prompt-sync"


✅ PASSO 4: Usar no seu código

1 - No seu index.js, você pode agora usar o prompt-sync assim: 

const prompt = require('prompt-sync')(); // o prompt é uma caixa de entrada (input), resumindo, lhe permite digitar algo

let nome = prompt('Qual seu nome? ');
console.log(`Olá, ${nome}!`);  


✅ PASSO 5: Rodar o código

No terminal do VS Code, digite: "node index.js"
