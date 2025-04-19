
# ✅ Projeto de Testes Automatizados com Cypress

Este repositório contém testes automatizados desenvolvidos com **Cypress** para validar o fluxo de login da aplicação [Automation Practice](https://automationpratice.com.br). O projeto simula interações reais do usuário, garantindo que o sistema responda corretamente a diferentes cenários.

## 🧪 Funcionalidade Testada

- Login com credenciais válidas  
- Login com senha incorreta  
- Login com campo de senha vazio  
- Login com campo de e-mail vazio  

## 📱 Testes em Múltiplas Telas

Os testes foram executados nos seguintes dispositivos simulados:

- 📱 iPhone 6  
- 📱 Samsung Note 9  

Utilizei o comando `cy.viewport()` para validar o comportamento responsivo da aplicação.

## 📁 Estrutura do Projeto

```
📁 cypress
│   ├── 📁 e2e
│   │   └── login.cy.js
│   ├── 📁 fixtures
│   ├── 📁 support
│       └── commands.js
├── 📄 cypress.config.js
├── 📄 package.json
```

## ▶️ Como Executar o Projeto

1. Clone o repositório:
```
git clone https://github.com/Davelli-y/qa-cypress
```

2. Instale as dependências:
```
npm install
```

3. Execute o Cypress em modo interativo:
```
npx cypress open
```

Ou execute em modo headless:
```
npx cypress run
```


---

📌 Desenvolvido por [Guilherme Yamaguchi (Guilherme Davelli)](https://www.linkedin.com/in/davelli-y)
