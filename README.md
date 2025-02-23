# Teste Técnico Mobile - BeTalent 📱

Olá! Sou **Axel Lima** e este é o meu projeto para o teste técnico mobile da **BeTalent**.

Este aplicativo tem como objetivo listar funcionários e permitir que o usuário pesquise por alguns dados como **nome**, **telefone**, **data de admissão** e **cargo**. Além disso, os **cards de funcionários** possuem um **dropdown** que exibe informações adicionais na tela.

## Funcionalidades ⚙️

- **Listagem de Funcionários**: Visualização dos dados dos funcionários.
- **Pesquisa**: Pesquisa por nome, telefone, data de admissão e cargo.
- **Dropdown**: Exibição de informações extras no card do funcionário.

---

## Como rodar o projeto 🚀

### 1. **Instalação das dependências** 💻

O projeto utiliza **Yarn** como gerenciador de pacotes. Para instalar as dependências, execute o seguinte comando no terminal:

```bash
yarn install
```

### 2. **Configuração do banco de dados com JSON Server** 🗄️

Para rodar o banco de dados da aplicação localmente, utilize o **JSON Server**. Caso você não tenha o **JSON Server** instalado, ele será automaticamente baixado ao executar o comando para iniciar seu servidor:

```bash
npx json-server --watch database.json
```

### 3. **Configuração do IPV4 para emulador Android** 🌍

Se você estiver rodando a aplicação em um **emulador Android**, será necessário configurar seu **IPV4**. Para isso, copie o arquivo `.env.example` para `.env` e ajuste as configurações conforme necessário.

### 4. **Iniciar o projeto** 🏁

Após configurar as dependências e o banco de dados, basta rodar a aplicação com:

```bash
yarn run android
```
ou
```bash
yarn run ios 
```

Ou, caso prefira utilizar o **npm**:

```bash
npm run android 
```
ou
```bash
npm run ios 
```

---

## Tecnologias utilizadas 🔧

- **React Native**: Framework para desenvolvimento de aplicações mobile.
- **Yarn**: Gerenciador de pacotes.
- **JSON Server**: Servidor para simulação de banco de dados.

---

Agradeço a **BeTalent** pela oportunidade de participar deste teste técnico! 😄
