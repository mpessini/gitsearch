# Git-Search

## Aplicação para realizar busca de usuários do GitHub.

### Link da aplicação no GitHub Pages.
[Git-Search](https://mpessini.github.io/gitsearch/)

Tabela de conteúdos
=================
  * [Sobre](#Sobre)
  * [Instalação](#instalacao)
  * [Como usar](#como-usar)
  * [Tecnologias](#tecnologias)

Sobre
=====
Aplicação que permite ao usuário logado, realizar buscar de usuários
do GitHub, que são retornadas atravez de uma API, e exibindo diversas
informações disponíveis, bem como a lista de repositórios caso ela exista.


Instalação
==========
### Pré-requisitos
Certifique-se de ter instalado em sua maquina estas ferramentas:
[Git](https://git-scm.com), [Node.js](https://nodejs.org/en/).  
E também um editor de textos como o [VSCode](https://code.visualstudio.com/)

### Rodando a aplicação localmente
1. Clone o repositório
  * `git clone https://github.com/mpessini/gitsearch.git`.(URL)
    Ou
  * `git clone git@github.com:mpessini/gitsearch.git`(SSH)

  * Entre na pasta do repositório que você acabou de clonar:
    * `cd gitsearch`

2. Instale as dependências e inicialize o projeto
  * Instale as dependências:
    * `npm install`
  * Inicialize o projeto:
    * `npm start` (uma nova página deve abrir no seu navegador)

Como Usar
=========
### Login
Após executar o projeto em seu navegador, faça o login utilizando
"admin" no campo de nome de usuário e "password" no campo de senha e
clicando no botão com o texto "Entrar".

### Buscas
Você pode realizar busca de usuários reais do GitHub preenchendo o
campo de busca com o username de um usuário válido e então clicarm em buscar.
Seŕa retornado de uma API as informações disponíveis sobre o usuário buscado,
bem como a lista de seus repositórios.

### Repositórios
Após realizar a busca, você pode ver a lista de repositórios do usuário que
foi buscado clicando no botão com o texto "Ver Respositórios", que então será aberto
uma lista com todos os repositórios do usuário, que ao ser clicados, abrem um modal
com as informações sobre o repositório.

Tecnologias
===========
* Tecnologias utilizadas para construção da aplicação:
[React](https://pt-br.reactjs.org/)  
[React Testing Library](https://testing-library.com/)  

* Ferramentas para controle e organização de código:
[ESLint](https://eslint.org/)  
[Prettier](https://prettier.io/)  
[Git](https://git-scm.com)