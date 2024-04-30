class Calculadora {
    sumar(num1, num2) {
        return num1 + num2;
    }

    restar(num1, num2) {
        return num1 - num2;
    }

    dividir(num1, num2) {
        return num1 / num2;
    }

    multiplicar(num1, num2) {
        return num1 * num2;
    }

    porcentaje(num1, porcentaje) {
        return (num1 * porcentaje) / 100;
    }

    cuadrado(num1) {
        return num1 * num1;
    }

    raizCuadrada(num1) {
        return Math.sqrt(num1);
        
    }

}