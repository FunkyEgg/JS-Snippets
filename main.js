function getRandomInt(min, max) {
    if (!min) throw new Error('invalid value for min number');
    if (!max) throw new Error('invalid value for max number');

    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function sleep(ms) {
    if (!ms) throw new Error('invalid value for ms');

    Atomics.wait(new Int32Array(new SharedArrayBuffer(4)), 0, 0, ms);
}



class Logic {
    constructor() {
        // regular logic
        this.and = function(input1, input2) {
            if (input1 === true || input1 === false) {
                if (input2 === true || input2 === false) {
                    if (input1 === true) {
                        if (input2 === true) {
                            return true;
                        } else return false;
                    } else return false;
                } else throw new Error('invalid value for input 2');
            } else throw new Error('invalid value for input 1');
        }

        this.not = function(input) {
            if (input === true || input === false) {
                if (input === true) {
                    return false;
                } else return true;
            } else throw new Error('invalid value for input');
        }

        this.or = function(input1, input2) {
            if (input1 === true || input1 === false) {
                if (input2 === true || input2 === false) {
                    if (input1 === true || input2 === true) {
                        if (input1 === false || input2 === false) {
                            return true;
                        } else if (input1 === true || input2 === true) {
                            return true;
                        } else return false;
                    } else return false;
                } else throw new Error('invalid value for input 2');
            } else throw new Error('invalid value for input 1');
        }

        // nor logic (nand, xnor, nor)
        this.nand = function(input1, input2) {
            if (input1 === true || input1 === false) {
                if (input2 === true || input2 === false) {
                    if (input1 === true) {
                        if (input2 === true) {
                            return false;
                        } else return true;
                    } else return true;
                } else throw new Error('invalid value for input 2');
            } else throw new Error('invalid value for input 1');
        }

        this.nor = function(input1, input2) {
            if (input1 === true || input1 === false) {
                if (input2 === true || input2 === false) {
                    if (input1 === true || input2 === true) {
                        if (input1 === false || input2 === false) {
                            return false;
                        } else if (input1 === true || input2 === true) {
                            return false;
                        } else return true;
                    } else return true;
                } else throw new Error('invalid value for input 2');
            } else throw new Error('invalid value for input 1');
        }
    }
}

class Math {
    constructor() {
        this.add = function(num1, num2) {
            if(!num1) throw new Error('invalid value for num 1');
            if(!num2) throw new Error('invalid value for num 2');

            return num1 + num2;
        }
    }
}

let math = new Math();
let logic = new Logic();

module.exports = {
    getRandomInt,
    sleep,
    logic,
    math
}