# 📕 Kanban Board

Aplicação desenvolvida para que você possa gerenciar sua lista de afazeres e dividindo as tarefas em:

- To Do
- Doing
- Done

Highlights da aplicação:

- drag and drop para mover entre colunas
- renderização de markdown no conteúdo de um card
- layout responsivo
- persistência de dados em API

## Setup

Para executar a aplicação em sua máquina você tem duas maneiras: localmente com uma versão do `NodeJS >= 16` ou via Docker.

<blockquote>
🚧 Antes de executar os passos é muito importante que as variáveis de ambiente sejam configuradas. Tanto o backend quanto o frontend, possuem um arquivo .env para este fim. Sem estas configurações o aplicativo não funcionará adequadamente.
</blockquote>

### 🐳 Utilizando Docker para rodar a aplicação

Na raiz do repositório execute `docker compose up -d`. A aplicação estará disponível no endereço [http://localhost:5173/](http://localhost:5173/).

### 🔥 Rodando sem Docker

Você também pode seguir os seguintes passos:

1. Navegar até a pasta /backend, e executar `yarn` ou `npm i` para instalar as dependências
2. Iniciar o backend a partir do comando `yarn server` ou `npm run server`
3. Abrir em outro terminal a pasta /frontend e executar `yarn` ou `npm i` para instalar as dependências
4. Iniciar o frontend com o comando `yarn dev` ou `npm run dev`

A aplicação estará disponível no endereço [http://localhost:5173/](http://localhost:5173/).

## ✍🏽 Decisões Arquiteturais

A decisão das tecnologias utilizadas no projeto envolveu três fatores: pré-requisitos, tempo estimado e experiências anteriores. São elas as principais:

- React JS: lib de interfaces para SPA que tenho maior proeficiência;
- Typescript: utilizar tipos no front-end é libertador e desde que comecei achei extremamente poderoso para velocidade de desenvolvimento e manter projetos bem estruturados;
- React Query: lib de gerenciamento de estados provenientes de api que foi crucial para separar conceitos e manter componentes menores.
- Plop: lib para criar arquivos baseados em templates, foi utilizada para criar componentes com rapidez no desenvolvimento e manter o padrão no nome e estrutura dos arquivos.

Alguns ganhos da arquitetura escolhida:

- SPA: single page applications tornam a experiência de usuário mais fluida,
- Stale While Revalidate: utilizando o react-query foi possível gerenciar com menos código o estado proveniente de dados da API junto com algumas funcionalidades relevantes, o SWR é uma das melhores delas que possibilita que o usuário veja um conteúdo mais recente enquanto a api é chamada em background, isso diminui a quantidade de loadings e melhora UX, além de ser um código mais enxuto se comparado com uma implementação análoga em Redux, por exemplo.

## 🚀 Pontos de melhoria

Recursos que não foram possíveis de adicionar até o momento mas que são importantes:

- Teste unitários, isso seria extremamente perigoso para a longevidade e manutenabilidade da aplicação num cenário real.
- Testes cross-browser: a aplicação foi validada somente no Google Chrome 104.
- Otimização de bundler: algumas bibliotecas tiveram um impacto significativo no bundler da aplicação, isso poderia ser revisto a fim de remover / reduzir os chunks.
  