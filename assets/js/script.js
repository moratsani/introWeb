/* 
  - Tipagem fraca dinamica (inferencia de dados)
  - Case Sensitive (a != A)
  - criação de variaveis
    -- let -> "let it change" -> variavel que pode ter o valor alterado
    -- const -> "constant" -> variavel que não pode ter o valor alterado
    -- var -> "variable" -> variavel que pode ou não ter o valor alterado

    DOM -> Document-Object Model

     buscar elementos pelo nome da Tag (caso tenha mais que um, vai pegar todos)
    window.document.getElementsByTagName(label)
    
    buscar elementos pelo id (encontrou o primeiro, para a busca)
   const campo = window.document.getElementById('nome')
    */

   let nome = document.querySelector("#nome")
   let email = document.querySelector("#email")
   let assunto = document.querySelector("#assunto")
   let nomeOk = false
   let emailOk = false
   let assuntoOk = false
   let mapa = document.querySelector("#mapa")

  //  console.log(nome);
  //  console.log(email)

  //  Funções no JS == Metodos Java

  // public void validaNome() {}
nome.style.width = "100%"
email.style.width = "100%"

  function validaNome() {
    let txtNome = document.querySelector("#txtNome")
    if(nome.value.length >= 3){
      nome.style.border = '1px solid green'
      txtNome.innerHTML = "Nome Válido"
      txtNome.style.color = "green"
      nomeOk = true
    } else {
      nome.style.border = '1px solid red'
      txtNome.innerHTML = "Nome Inválido"
      txtNome.style.color = "red"
    }
  }

  function validaEmail(){
    let txtEmail = document.querySelector("#txtEmail")
    let regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/

    if (email.value.match(regex)){
        txtEmail.innerHTML = "E-mail válido"
        txtEmail.style.color = "green"
        emailOk = true
    } else {
        txtEmail.innerHTML = "E-mail inválido"
        txtEmail.style.color = "red"
    }
}

function validaAssunto() {
    let txtAssunto = document.querySelector("#txtAssunto")

    if(assunto.value.length >= 100){
        txtAssunto.innerHTML = "Texto é muito grande, digite no máximo 100 caracteres"
        txtAssunto.style.color = "red"
        txtAssunto.style.display = "block"
        
    } else {
        txtAssunto.style.display = "none"
        assuntoOk = true
    }

}

function enviar(e){
    e.preventDefault()
    if(nomeOk == true && emailOk == true && assuntoOk == true){
        alert ("Formulário enviado com sucesso!")
    } else {
        alert ("Preencha o formulário corretamente antes de enviar...")
    }
}

function mapaZoom(){
    mapa.style.width = "800px"
    mapa.style.height = "600px"

}

function mapaNormal(){
    mapa.style.width = "400px"
    mapa.style.height = "250px"
}