var nome
var idade

function VerificarIdade(event) {
    event.preventDefault();

    idade = document.getElementById("idade")
    nome = document.getElementById("Nome")

    if (idade < 11) {

        resultado.innerHTML = nome = document.getElementById("Nome") + idade + " é uma criança";
    } else if (idade >= 12 && idade <= 20) {

        resultado.innerHTML = nome = document.getElementById("Nome") + idade + " é um adolescente";
    } else if (idade >= 21 && idade <= 65) {

        resultado.innerHTML = nome = document.getElementById("Nome") + idade + " é um adulto";
    } else if (idade >= 65) {

        resultado.innerHTML = nome = document.getElementById("Nome") + idade + " é um idoso";
    }
}