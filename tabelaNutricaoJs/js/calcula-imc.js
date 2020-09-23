//console.log("Fui carregado de um arquivo externo"); <!--console.log serve para imprimir algo-->

var titulo = document.querySelector(".titulo");//querySelector seleciona a parte que desejo do html
titulo.textContent = "Viva com Saúde Nutrição" //textContent permite que eu altere o texto.

//var paciente = document.querySelector("#primeiro-paciente"); //O # é o seletor de ID.
var pacientes = document.querySelectorAll(".paciente");//querySelectorAll seleciona todos que tiverem com a classe selecionada.

for(var i = 0; i < pacientes.length; i++){

var paciente = pacientes[i]; //variavel paciente percorre o array (vetor).

var tdpeso = paciente.querySelector(".info-peso"); // O . é o seletor de uma classe.
var peso = tdpeso.textContent;
var tdaltura = paciente.querySelector(".info-altura");
var altura = tdaltura.textContent;
var imc = paciente.querySelector(".info-imc");

var validarpeso = validarPeso(peso);
var validaraltura = validarAltura(altura);

if(!validarpeso){

    validarpeso = false
    imc.textContent = "Peso inválido!";
    paciente.classList.add("paciente-invalido");
}
if(!validaraltura){

    validaraltura = false
    imc.textContent = "Altura inválida!";
    paciente.classList.add("paciente-invalido"); //classList.add serve para utilizar uma classe, por isso não necessita usar o . ex: ("rick")
}
if (validarpeso && validaraltura){
var infoimc = calcularimc(peso, altura);
imc.textContent = infoimc;//toFixed comando utilizado para escolher a quantidade de casas decimais.

}
}

function calcularimc(peso,altura){ //função criada para calcular imc.
  var imc = 0;
  imc = peso / (altura * altura);
  return imc.toFixed(2);

}

function validarPeso(peso){
  if(peso > 0 && peso < 1000){
    return true;
  }else{
    return false;
  }
}

function validarAltura(altura){
  if(altura > 0 && altura < 3.00 ){
    return true;
  }else{
    return false;
  }
}
