# 🛡️ Sentinela Node.js - Blockchain File Integrity

Este é um sistema de monitoramento de integridade de arquivos em tempo real desenvolvido com Node.js. O projeto utiliza conceitos de Blockchain para garantir que qualquer alteração não autorizada em um arquivo seja detectada e registrada em um histórico imutável.

 🚀 Funcionalidades

- Monitoramento Ativo: Utiliza o módulo `fs.watch` para detectar alterações no arquivo instantaneamente.
- Segurança com Hash: Emprega `bcrypt` e lógica de hashing para criar assinaturas digitais únicas.
- Estrutura de Blockchain: Cada novo registro (bloco) contém o hash do bloco anterior, criando uma corrente de dependência que impede a manipulação do histórico.
- Dashboard Full Stack: Interface web moderna construída com Express.js e CSS Dark Mode para visualização dos blocos e alertas de violação.
- Auditoria: Função de exportação de log em JSON para análise de segurança.

🛠️ Tecnologias Utilizadas

- Backend:* Node.js, Express.js
- Segurança: Bcrypt (Hashing)
- Frontend: HTML5, CSS3 (Modern UI), JavaScript (Async/Fetch API)
- Database: JSON (Persistência local)

1. Clone o repositório:
   ```bash