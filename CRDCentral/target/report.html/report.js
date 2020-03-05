$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/Features/Login.feature");
formatter.feature({
  "name": "Realizar login",
  "description": "",
  "keyword": "Funcionalidade"
});
formatter.scenario({
  "name": "Login inválido",
  "description": "",
  "keyword": "Cenário",
  "tags": [
    {
      "name": "@loginn"
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
  "error_message": "org.junit.ComparisonFailure: expected:\u003c[Invalid email address].\u003e but was:\u003c[Authentication failed].\u003e\r\n\tat org.junit.Assert.assertEquals(Assert.java:117)\r\n\tat org.junit.Assert.assertEquals(Assert.java:146)\r\n\tat PageObjects.UsuarioLogado_Page.validaEmailInvalidoNaoLogado(UsuarioLogado_Page.java:26)\r\n\tat Steps.Steps.emailInvalidoNaoLogado(Steps.java:141)\r\n\tat ✽.não sou autenticado(file:///C:/RafaelWeb/src/test/Features/Login.feature:16)\r\n",
  "status": "failed"
});
});