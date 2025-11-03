# Mapa Visual Interativo: O Processo de UX para um Grupo Focal

## 🚀 Sobre o Projeto

Esta aplicação web é um **"mapa visual" interativo** que documenta e simula o processo de brainstorming e refinamento de uma equipe em uma aula de UX.

O objetivo original da aula era **elaborar uma pergunta para ser discutida em um grupo focal** que conseguisse abranger um conjunto complexo de termos-chave.

Este site transforma o que era um log de aula estático em um **"sandbox" dinâmico**: em vez de apenas ler o processo, o usuário pode interagir com ele, editar os termos e perguntas, e testar como o fluxo de ideias poderia ter mudado.

---

## 🎯 O Desafio da Aula

A proposta central, definida na aula do Prof. Ecivaldo de Souza Matos, era criar uma pergunta-guia para um grupo focal. O processo começou com um brainstorm de termos relacionados a um tema (posteriormente definido como "Protagonismo Estudantil").

Os termos iniciais foram:

* Estudantes indígenas
* Morador de periferia
* Etapa do ensino superior
* Refugiado
* PCD
* Gosto pelo estudo
* Autoidentificação

A aplicação web segue a jornada da equipe desde esses termos brutos, passando pelos refinamentos, "pivots" (mudanças de direção), até a votação da pergunta final.

---

## ✨ Funcionalidades Principais

* **Visualização do Processo:** O layout em grid guia o usuário passo a passo pela jornada de ideação da equipe, do Passo 1 ao 8.
* **Sandbox Interativo:** O usuário pode clicar e **editar qualquer texto-chave** (termos, palavras-chave, perguntas) usando o atributo `contenteditable`.
* **Persistência de Dados:** Todas as edições são salvas automaticamente no `localStorage` do navegador. As alterações permanecem mesmo que a página seja atualizada.
* **Resetável:** Um botão "Resetar" permite ao usuário limpar todas as suas edições e retornar ao estado original da aula a qualquer momento.
* **Design Responsivo:** Construído com uma identidade visual moderna (temas claro/escuro) e animações sutis de `hover` para uma melhor experiência do usuário.

---

## 💻 Tecnologias Utilizadas

* **HTML5:** Para a estrutura semântica da página.
* **CSS3:** Para a identidade visual completa, layout em grid, responsividade (media queries) e animações (`transition`, `transform`).
* **JavaScript (ES6+):** Para toda a interatividade, incluindo:
    * Simulação de autenticação (login/logout).
    * Manipulação do DOM para exibir/ocultar seções.
---

## 🚀 Como Executar

Este projeto não requer um servidor ou dependências.

1.  Faça o download dos três arquivos:
    * `index.html`
    * `style.css`
    * `script.js`
2.  Coloque todos os três arquivos na mesma pasta.
3.  Abra o arquivo `index.html` em qualquer navegador web moderno.

---

## 🎓 Créditos da Aula

* **Docente:** Ecivaldo de Souza Matos
* **Discentes:** Fabiano, Jéssica Amaro, Leticia Boncompanhe
