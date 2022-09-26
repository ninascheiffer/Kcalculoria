
var valorRecebido = document.querySelector ('#inserirValor')

var Rcalorias = document.querySelector('#Rkcal')
var Rproteina = document.querySelector('#Rprot')
var Rcarboidrato = document.querySelector('#Rcarb')
var Rgordura = document.querySelector('#Rgord')
var Rfibra = document.querySelector('#Rfibr')


let arroz = {
    kcal: 1,
    proteina: 0.1,
    carboidrato: 0.2,
    gordura: 0.1,
    fibra: 0.008,
}

var numero = parseInt("xpto");
if (Number.isNaN(numero))
    numero = 0; //

function receba (){

    let kcal = arroz.kcal;
    let proteina = arroz.proteina;
    let carboidrato = arroz.carboidrato;
    let gordura = arroz.gordura;
    let fibra = arroz.fibra

    Rcalorias.innerHTML= (kcal* parseFloat(valorRecebido.value).toFixed(2)) + " Kcal" 
    Rproteina.innerHTML= (proteina* parseFloat(valorRecebido.value)).toFixed(2) + "g"
    Rcarboidrato.innerHTML= (carboidrato* parseFloat(valorRecebido.value)).toFixed(2) + " g"
    Rgordura.innerHTML= (gordura* parseFloat(valorRecebido.value)).toFixed(2) + " g"
    Rfibra.innerHTML= (fibra* parseFloat(valorRecebido.value)).toFixed(2) + " g"
    
}


// function receba() {
//     var btnSalvar = document.querySelector("#btnSalvar");

//     btnSalvar.addEventListener('click', function (event) {
//         event.preventDefault();

//         var form = document.querySelector("#formulario");
//         // console.log(form.qtde.value);


//     });

//     let qtdeDigitada = document.querySelector("#formulario").value;

//     let arroz = {
//         kcal: 1,
//         proteina: 0.1,
//         carboidrato: 0.2,
//         gordura: 0.1,
//     }

//     function somaKcal(qtdeDigitada, arroz) {
//         let kcal = arroz.kcal;
//         let proteina = arroz.proteina;
//         let carboidrato = arroz.carboidrato;
//         let gordura = arroz.gordura;
//         return;


//     }

//     somaKcal(qtdeDigitada);
//     alert(`${quatidade}g de arroz tem: \n${kcal * quatidade} Kcal\n${proteina * quatidade}g Proteina\n${carboidrato * quatidade}g Carboidrato\n${gordura * quatidade}g Gordura`);

// };





