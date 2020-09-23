var botaoAdcionar = document.querySelector("#adicionar-paciente");
//addEventListener escuta um evento no pagina html, por exemplo "click", function () cria uma função anonima {


botaoAdcionar.addEventListener("click", function(event){ //function(event) serve para poder utilizar a função event.preventDefault.
      event.preventDefault(); //Previne e evita que o html utilize o default.
      //Colhendo informações do paciente no form.
      var form = document.querySelector("#form-adiciona");

      var paciente = obtemPaciente(form);

      var erros = validaPaciente(paciente);

      if(erros.length > 0){
        exibeMensagensErro(erros);
        return; //return vazio sai da fun caso execute o  if.
      }

      adcionarPacienteNaTabela(paciente);

      form.reset(); //apos adcionar um novo paciente ele reseta os campos.
      var mensagemErro = document.querySelector("#mensagem-erro");
      mensagemErro.innerHTML = "";

})

function adcionarPacienteNaTabela(paciente){
  var pacienteTr = criandoTr(paciente);
  var tabela = document.querySelector("#tabela-pacientes");// adciona novo paciente na tabela.
  tabela.appendChild(pacienteTr);
}

function exibeMensagensErro(erros){
  var ul = document.querySelector("#mensagem-erro");
  ul.innerHTML = ""; //apaga as mensagens anteriores e exibe as novas.
  erros.forEach(function(erro){
      var li = document.createElement("li");
      li.textContent = erro;
      ul.appendChild(li);

  });

}
function obtemPaciente(form){
  var paciente = {  //criar objeto em JS var nome qualquer = {}.
    nome : form.nome.value, //value serve para pegar os valores.
    peso : form.peso.value,
    altura : form.altura.value,
    gordura : form.gordura.value,
    imc : calcularimc(form.peso.value, form.altura.value),
  }
  return paciente;
}

function criandoTr(paciente){
  var pacienteTr = document.createElement("tr"); //createElement cria tags no html atraves do javascript
  pacienteTr.classList.add("paciente");
  var nomeTd = document.createElement("td");
  var pesoTd = document.createElement("td");
  var alturaTd = document.createElement("td");
  var gorduraTd = document.createElement("td");
  var imcTd = document.createElement("td");

  //vinculando as td a tr
  pacienteTr.appendChild(montaTd(paciente.nome, "info-nome")); //appendChild vincula como filho, ex as td foram vinculadas a tr
  pacienteTr.appendChild(montaTd(paciente.peso, "info-peso"));
  pacienteTr.appendChild(montaTd(paciente.altura, "info-altura"));
  pacienteTr.appendChild(montaTd(paciente.gordura, "info-gordura"));
  pacienteTr.appendChild(montaTd(paciente.imc, "info-imc"));

  return pacienteTr;

}

function montaTd(dado,classe){
  var td = document.createElement("td");
  td.textContent = dado;
  td.classList.add(classe);
  return td;
}

function validaPaciente(paciente){
  var erros = []; //[] cria um array no javascript.

  if(paciente.nome.length == 0){
    erros.push("O campo de nome é obrigatório!!")
  }

  if(paciente.gordura.length == 0){
    erros.push("O campo de gordura é obrigatório!")
  }

  if(paciente.peso.length == 0){
    erros.push("O campo de peso é obrigatório!")
  }

  if(paciente.altura.length == 0){
    erros.push("O campo de altura é obrigatório!")
  }
  if(!validarPeso(paciente.peso)){
    erros.push("Peso é inválido!");  // .push inseri strings no array.
  }

  if(!validarAltura(paciente.altura)){
    erros.push("Altura é inválida!");
  }

  return erros;
}
