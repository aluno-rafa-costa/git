# 🔥 CRUD com autenticação integrado ao Firebase utilizando apenas HTML, CSS e Javascript

Projeto em HTML, CSS e Vanilla Javascript que implementa um pequeno CRUD.

> ⚠️ **Projeto feito com base  nas aulas da disciplina de Programação para a Internet da Fatec Itu**

# 🧠 Contexto

Esse projeto tem como objetivo proporcionar aos usuários que se cadastrem e façam login.
 Listar e consultar por meio de um formulário os clientes  da odonto mais de uma forma prática e rápida além de caso algum campo seja preenchido errado é possível apagá-lo ou editá-lo conforme a preferência do usuário , caso precise de ajuda ou ocorra algum problema com o site  é só clicar no botão contato e ligar para o suporte . 
 
 Alunos: Rafael Costa Moereira Dos Santos e Mateus Leonel Albenaz.
## 📋 Instruções

- [ ] Inicialmente clone o projeto; 
- [ ] Acesse https://firebase.google.com e crie um novo projeto.
- [ ] Renomeie o arquivo firebase-example.js para firebase.js e copie as informações apresentadas pelo Firebase.
- [ ] Acesse Realtime Database e em regras, informe que apenas usuários autenticados terão direito aos dados:
```json
{
  "rules": {
    ".read": "auth != null",
    ".write": "auth != null"
  }
}
```

- [ ] Abra o arquivo index.html no seu navegador, crie um novo usuário e navegue pelo seu CRUD!


Made with 💜, HTML, CSS and only Vanilla JS. 