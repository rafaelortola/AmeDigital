$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/Features/Login.feature");
formatter.feature({
  "name": "Realizar login",
  "description": "",
  "keyword": "Funcionalidade"
});
formatter.scenario({
  "name": "Login Sucesso",
  "description": "",
  "keyword": "Cenário",
  "tags": [
    {
      "name": "@login"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "que eu informe um email válido",
  "keyword": "Dado "
});
formatter.match({
  "location": "Steps.Steps.emailValido()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "informe uma senha válida",
  "keyword": "E "
});
formatter.match({
  "location": "Steps.Steps.senhaValida()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "faço o login",
  "keyword": "Quando "
});
formatter.match({
  "location": "Steps.Steps.logar()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "sou cadastrado com sucesso",
  "keyword": "Então "
});
formatter.match({
  "location": "Steps.Steps.validaCadastro()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Login inexistente",
  "description": "",
  "keyword": "Cenário",
  "tags": [
    {
      "name": "@login"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "que eu informe um email inexistente",
  "keyword": "Dado "
});
formatter.match({
  "location": "Steps.Steps.emailInexistente()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "informe uma senha válida",
  "keyword": "E "
});
formatter.match({
  "location": "Steps.Steps.senhaValida()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "faço o login",
  "keyword": "Quando "
});
formatter.match({
  "location": "Steps.Steps.logar()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "não sou autenticado",
  "keyword": "Então "
});
formatter.match({
  "location": "Steps.Steps.emailInvalidoNaoLogado()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Login inválido",
  "description": "",
  "keyword": "Cenário",
  "tags": [
    {
      "name": "@login"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "que eu informe um email inválido",
  "keyword": "Dado "
});
formatter.match({
  "location": "Steps.Steps.emailInvalido()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "informe uma senha válida",
  "keyword": "E "
});
formatter.match({
  "location": "Steps.Steps.senhaValida()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "faço o login",
  "keyword": "Quando "
});
formatter.match({
  "location": "Steps.Steps.logar()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "não sou autenticado",
  "keyword": "Então "
});
formatter.match({
  "location": "Steps.Steps.emailInvalidoNaoLogado()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Login em branco",
  "description": "",
  "keyword": "Cenário",
  "tags": [
    {
      "name": "@login"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "que eu informe um email em branco",
  "keyword": "Dado "
});
formatter.match({
  "location": "Steps.Steps.emailEmBranco()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "informe uma senha válida",
  "keyword": "E "
});
formatter.match({
  "location": "Steps.Steps.senhaValida()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "faço o login",
  "keyword": "Quando "
});
formatter.match({
  "location": "Steps.Steps.logar()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "não sou autenticado",
  "keyword": "Então "
});
formatter.match({
  "location": "Steps.Steps.emailInvalidoNaoLogado()"
});
formatter.result({
  "status": "passed"
});
});