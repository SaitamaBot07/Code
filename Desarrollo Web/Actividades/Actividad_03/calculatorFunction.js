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
        peak: function () {
            return this.array[this.array.length = 1];
        },
        isEmpty: function () {
            return this.array.length === 0;
        }
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
    sqrt: function (a,b) {
        return Math.sqrt (a);
    },
    square: function (a){
        return Math.pow(a,2);
    },
    inverse: function (a) {
        return 1/a;
    },
    percent: function (a){
        return a/100
    }
}

const display = {
    limit: 10,
    nchar: 0,

    content: document.getElementById('resultNumber'),
    clear: function () {
        this.content.value = '0';
        this.nchar = 0;
    },
    go: function () {
        return this.nchar  < this.limit;
    },
    validarPunto: function(key){
        return this.content.value.search(/[.]/) !== -1 && key === '.';
    },
    addkey: function (key){
        if (this.go()){
            if (this.validarPunto(key)) return;
            if (this.content.value === '0' && key !== '.'){
                this.content.value = ' ';
            }
            this.content.value += key;
            this.nchar ++;
        }
    },
}

function addKeyDisplay (key) {
    display.addkey(key);
}

function limpiar () {
    display.clear();
}