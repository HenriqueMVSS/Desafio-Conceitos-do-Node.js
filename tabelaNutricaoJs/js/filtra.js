var filtrar = document.querySelector("#filtrar-paciente");
filtrar.addEventListener("input",function(){ //input captura o conteudo de texto que foi digitado.
    var pacientes = document.querySelectorAll(".paciente");

    if(this.value.length > 0 ){

      for(var i = 0; i < pacientes.length ; i++){
        var paciente = pacientes[i];
        var tdNome = paciente.querySelector(".info-nome");
        var nome = tdNome.textContent;
        var expressao = new RegExp(this.value, "i"); //RegExp expressao regular permite filtrar letra a letra, "i" é caseInsensitive ele busca tanto maiusculo quanto minusculo.
        if(!expressao.test(nome)){ //.test() serve para testar se o texto digitado é igual a um pedaço do texto.
          paciente.classList.add("invisivel");
        }else{
          paciente.classList.remove("invisivel");
        }
      }

    }else{

      for (var i = 0; i < pacientes.length; i++) {
        var paciente = pacientes[i];
          paciente.classList.remove("invisivel");
      }
    }


})
