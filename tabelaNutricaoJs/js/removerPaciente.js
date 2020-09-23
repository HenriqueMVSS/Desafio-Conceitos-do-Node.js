/*var pacientes = document.querySelectorAll(".paciente");  //outra maneira de deletar paciente.

pacientes.forEach(function(paciente){
  paciente.addEventListener("dblclick", function(){ //dblclick evento de escutar duplo click
      this.remove(); //this se refere ao dono do evento ou seja o paciente e o .remove() esta se referindo function dbclick, ele vai remover toda vez que for clicado duas vezes.
  });

});*/

var tabela = document.querySelector("table"); // quando utiliza dentro das "" no querySelector sem . ou # ele entende que ta se referindo a uma tag.

tabela.addEventListener("dblclick", function(event){
    event.target.parentNode.classList.add("fadeOut");
     setTimeout(function(){ //função do javascript que define com qual tempo deve ser executado o código que estiver dentro dessa função.
        event.target.parentNode.remove(); //Event se refere ao evento de duploclick, o .target se refere ao alvo que foi clicado e o parentNode se refere ao responsável pelo local do click nesse caso o tr que é o pai do td.
  },500); //O 500 se refere a quantidade de tempo da função setTimeout e é lido em milesegundos ou seja 500 equivale a meio segundo.
});
