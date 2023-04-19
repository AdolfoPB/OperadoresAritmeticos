function calcular(){
    var valor1 = Number(document.getElementById('valor1').value);
    var valor2 = Number(document.getElementById('valor2').value);
    tipo = document.getElementById('tipo').value;

    console.log(tipo);
    if(tipo == "suma"){
        var result = valor1 + valor2;
    }else if(tipo == "resta"){
        var result = valor1 - valor2;
    }else if(tipo == "multiplicacion"){
        var result = valor1 * valor2;
    }else if(tipo == "division"){
        var result = valor1 / valor2;
    }else if(tipo == "modulo"){
        var result = valor1 % valor2;
    }

    // switch (tipo) {
    //     case "suma":
    //         var result = valor1 + valor2;
    //       break;
    //     case "resta":
    //         var result = valor1 - valor2;
    //       break;
    //     case "multiplicacion":
    //         var result = valor1 * valor2;
    //       break;
    //       case "division":
    //         var result = valor1 / valor2;
    //       break;
    //       case "modulo":
    //         var result = valor1 % valor2;
    //       break;
    //     default:
    //       alert('Eliga una opcion');
    //       break;
    //   }
    

    document.getElementById('result').value = result;
}



document.addEventListener('DOMContentLoaded', function(){
    let formulario = document.getElementById('formul');
    formulario.addEventListener('submit', function() {
      formulario.reset();
    });
  });