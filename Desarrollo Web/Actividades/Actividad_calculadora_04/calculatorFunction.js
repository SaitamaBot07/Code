const calculatorFunction = {
    memory: {
        array: [],
        push: function (value) {
            this.array.push(value);
        },
        pop: function () {
            return this.array.pop ();
        },
        clear: function () {
            this.array = [];
        },
        peek: function () {
            return this.array[this.array.length - 1];
        },
        peekBefore: function (){
            return this.array[this.array.length -2];
        },
        isEmpty: function () {
            return this.array.length === 0;
        },
        Newnumber: false,
    },

    add: function (a, b){
        return a + b;
    },
    subtract: function (a, b) {
        return a - b;
    },
    multiply: function (a, b) {
        return a * b;
    },
    divide: function (a,b) {
        return a/b;
    },
    sqrt: function (a) {
        return Math.sqrt (a);
    },
    square: function (a){
        return Math.pow(a,2);
    },
    percentage: function (a,b) {
        return (a*b)/100;
    },
    inverse: function (a){
        return 1/a;
    }
}

const display = {
    content: document.getElementById('resultNumber'),
    limit: 10,
    nchar: 0,

    clear: function () {
        this.content.value = '0';
        this.nchar = 0;
    },

    back: function () {
        if (this.nchar > 0){
            this.content.value = this.content.value.slice(0, -1);
            this.nchar --;
            if (this.content.value === ' '){
                this.content.value = '0';
            }
        }
    },
    go: function () {
        return this.nchar  < this.limit;
    },
    validarPunto: function(value){
        return this.content.value.search(/[.]/) !== -1 && value === '.';
    },
    addKey: function (value){
        if (calculatorFunction.memory.Newnumber === true) {
            this.clear();
            calculatorFunction.memory.Newnumber = false;
        }
        if (this.go()){
            if (this.validarPunto(value)) return;
            if (this.content.value === '0' && value !== '.'){
                this.content.value = '' ;
                this.nchar = 0;
            }
            if (value === "signo") {
                this.content.value = eval(this.content.value) * -1;
                return;
            }
            this.content.value += value;
            this.nchar ++;
        }
    },
}

function addKeyDisplay(value) {
    display.addKey(value);
}

function clearDisplay () {
    display.clear();
}

function backKeyDisplay (){
    display.back();
}

function clearMemory (){
    calculatorFunction.memory.clear();
    display.clear();

}

function operationDisplay (value, equals = false) {
    if(display.content.value === ' ') return;

    const functions = ["raiz", "potencia", "inversa"];
    if (
        !calculatorFunction.memory.isEmpty() ||
        typeof calculatorFunction.memory.peek() === "number"
    ) {
        const a = calculatorFunction.memory.peekBefore();
        const b = eval(display.content.value);
        let resultado = '';
        if (value === 'igual') {
            resultado = 'igual';
        } else if (equals) {
            resultado = value;
        } else {
            resultado = calculatorFunction.memory.peek();
        }
        switch (resultado) {
            case "suma":
                resultadoOperacion = calculatorFunction.add(a,b);
                break;
            case 'resta':
                resultadoOperacion = calculatorFunction.subtract(a,b);
                break;
            case 'multi':
                resultadoOperacion = calculatorFunction.multiply(a,b);
                break;
            case 'division':
                resultadoOperacion = calculatorFunction.divide(a,b);
                break;
            case 'porcentage':
                resultadoOperacion = calculatorFunction.percentage(a,b);
                break;
            case 'igual':
                const value = calculatorFunction.memory.peek();
                if (typeof value === 'string'){
                    operationDisplay(calculatorFunction.memory.peek(), true);
                }
                calculatorFunction.memory.clear();
                return;
        }

        if (value !== "igual") {
            if (String(resultadoOperacion).length > 10) {
                display.content.value = String(resultadoOperacion.toExponential(3));
                return;
            }
            display.content.value = resultadoOperacion;
            }
        }
        if (functions.includes(value)) {
            const a = eval(display.content.value);
            let resultadoOperacion = 0;
            switch (value) {
            case "inversa":
                resultadoOperacion = calculatorFunction.inverse(a);
                break;
            case "raiz":
                resultadoOperacion = calculatorFunction.sqrt(a);
                break;
            case "potencia":
                resultadoOperacion = calculatorFunction.square(a);
                break;
            }
            if (value !== "igual") {
                if (String(resultadoOperacion).length > 10) {
                    display.content.value = String(resultadoOperacion.toExponential(3));
                    return;
                }
                display.content.value = resultadoOperacion;
            }
        }
        calculatorFunction.memory.push(eval(display.content.value));
        calculatorFunction.memory.push(value);
        calculatorFunction.memory.Newnumber = true;

}
