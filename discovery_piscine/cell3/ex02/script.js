const submit = document.getElementById("submit");
function calculadora() {
    var value;
    var number1 = parseInt(document.getElementById("number1").value);
    var number2 = parseInt(document.getElementById("number2").value);
    var lista = document.getElementById("opciones");
    var selection = lista.selectedIndex;
    var division = document.getElementById("dividir");
    var rest = document.getElementById("resto");
    if (selection == 0) {
        value = parseFloat(number1) + parseFloat(number2);
    }
    if (selection == 1) {
        value = parseFloat(number1) - parseFloat(number2)
    }
    if (selection == 2) {
        value = parseFloat(number1) * parseFloat(number2)
    }
    if (selection == 3) {
        value = parseFloat(number1) / parseFloat(number2)
    }
    if (selection == 4) {
        value = parseFloat(number1) % parseFloat(number2)
    }
    if (division && rest == 0) {
        alert("Its over 9000!");
    }
    if (number1 >= 0 && number2 >= 0){
        alert(value);
        console.log(value);
    }
    else {
        alert("Error :(");
    }
}
submit.onclick = function(e) {
    calculadora();
}
setTimeout(alerta, 30000);
function alerta() {
    alert("Please, use me...");
}