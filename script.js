const cel = document.getElementById("cel");
const fah = document.getElementById("fah");

function celToFah() {
    let output = parseFloat(cel.value) * 1.8 + 32;
    fah.value = parseFloat(output.toFixed(2));
}

function fahToCel() {
    let output = (parseFloat(fah.value) - 32) / 1.8;
    cel.value = parseFloat(output.toFixed(2));
}