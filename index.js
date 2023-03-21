var uno = 12000;
var dos = 17000;
var tres = 22000;


function convercion() {

    var horas = document.getElementById("horas").value
    var categoria = document.getElementById("categoria").value
    if (categoria == 1) {
        total = uno
    }
    if (categoria == 2) {
        total = dos
    }
    if (categoria == 3) {
        total = tres
    }
    if (horas) {
        total = total * horas;
    }
    if (horas > 40) {
        horas = horas - 40
        total = 25 / 100 * horas + total
    }

    document.getElementById("area").value = "-el total de el suelto del trabajador por las horas extras es " + total;


}