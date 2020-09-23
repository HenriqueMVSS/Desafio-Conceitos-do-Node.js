var botaoAdicionar = document.querySelector("#buscar-pacientes");

botaoAdicionar.addEventListener("click", function(){
    console.log("Buscando pacientes");
    var xhr = new XMLHttpRequest(); //XMLHttpRequest é utilizado para buscar requisições HTTP

    xhr.open("GET","http://api-pacientes.herokuapp.com/paci1entes"); //.open indica o tipo de requisição a ser utilizada, nesse caso foi GET, e o também o endereço para onde faremos.

    xhr.addEventListener("load", function(){
      var erroAjax = document.querySelector("#erro-ajax");
      if(xhr.status == 200){
         erroAjax.classList.add("invisivel");
        var resposta = xhr.responseText;

        var pacientes = JSON.parse(resposta);

        pacientes.forEach( function(paciente){
            adcionarPacienteNaTabela(paciente);
          });
      }else{
        console.log(xhr.status);
        console.log(xhr.responseText);
        erroAjax.classList.remove("invisivel");
      }
    });

    xhr.send(); //envia informações solicitadas no .open
  });
