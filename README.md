# 🛡️ Sentinela Node.js - Blockchain File Integrity

Este é um sistema de monitorização de integridade de ficheiros em tempo real desenvolvido com Node.js. O projeto utiliza conceitos de **Blockchain** para garantir que qualquer alteração num ficheiro seja detetada e registada num histórico imutável.

## 🚀 Funcionalidades

* **Monitorização Ativa:** Utiliza o módulo `fs.watch` nativo do Node.js para detetar alterações no ficheiro de forma instantânea.
* **Segurança com Hash:** Emprega a biblioteca `bcrypt` e lógica de hashing para criar assinaturas digitais únicas para cada estado do ficheiro.
* **Estrutura de Blockchain:** Cada novo registo (bloco) contém o hash do bloco anterior. Isto cria uma corrente de dependência que impede a manipulação do histórico e valida a integridade contínua.
* **Dashboard Full Stack:** Interface web moderna construída com HTML, CSS (Dark Mode) e Express.js para visualização dos blocos e alertas de violação em tempo real.
* **Auditoria:** Persistência de dados num ficheiro JSON (`BancodeDados.json`), permitindo a análise do histórico de alterações.

## 💻 Tecnologias Utilizadas

* **Backend:** Node.js, Express.js
* **Segurança:** Bcrypt (Hashing)
* **Frontend:** HTML5, CSS3, JavaScript (Fetch API para consumo assíncrono)
* **Base de Dados:** Ficheiro JSON local

## 📂 Estrutura do Repositório

* **`index.js`**: Script principal que atua como o "Sentinela". Ele vigia o ficheiro de texto, valida a corrente de blocos e gera novos hashes (`bcrypt`) sempre que há uma modificação.
* **`server.js`**: Servidor web em Express que disponibiliza a API (em `/api/blockchain`) e serve a interface do dashboard.
* **`index.html` e `style.css`**: O painel de controlo visual (Dashboard) onde podes acompanhar o estado da tua Blockchain.
* **`arquivo_para_leitura.txt`**: O ficheiro "alvo" que está a ser constantemente monitorizado pelo sistema.
* **`package.json`**: Gestor de dependências do projeto.

## ⚙️ Como Executar o Projeto

1. **Clonar o repositório e instalar dependências:**
   Certifica-te de que tens o Node.js instalado na tua máquina.
   ```bash
   npm install
