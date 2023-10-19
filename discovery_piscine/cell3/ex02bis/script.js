const submit = $("#submit");

function calculadora() {
    var value;
    var number1 = parseInt($("#number1").val());
    var number2 = parseInt($("#number2").val());
    var selection = $("#opciones").prop("selectedIndex");

    if (selection == 0) {
        value = parseFloat(number1) + parseFloat(number2);
    }
    if (selection == 1) {
        value = parseFloat(number1) - parseFloat(number2);
    }
    if (selection == 2) {
        value = parseFloat(number1) * parseFloat(number2);
    }
    if (selection == 3) {
        value = parseFloat(number1) / parseFloat(number2);
    }
    if (selection == 4) {
        value = parseFloat(number1) % parseFloat(number2);
    }

    if (value >= 0 && number1 >= 0 && number2 >= 0) {
        alert(value);
        console.log(value);
    } else {
        alert("Error :(");
    }
}

submit.on("click", function(e) {
    calculadora();
});

setTimeout(alerta, 30000);

function alerta() {
    alert("Please, use me...");
}
