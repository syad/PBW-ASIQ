function calculate(operator) {
    var num1 = prompt("Masukan angka pertama");
    var num2 = prompt("Masukan angka kedua");
    var result;

    num1 = parseFloat(num1);
    num2 = parseFloat(num2);

    if (isNaN(num1) || isNaN(num2)) {
        alert('Silakan masukan angka kembali');
        return;
    }

    if (operator === '+') {
        result = num1 + num2;
    } else if (operator === '-') {
        result = num1 - num2;
    } else if (operator === '*') {
        result = num1 * num2;
    } else if (operator === '/') {
        if (num2 === 0) {
            alert('Tidak bisa dibagi dengan nol');
            return;
        }
        result = num1 / num2;
    } else {
        alert('Invalid operator');
        return;
    }

    alert('Result: ' + result);
}