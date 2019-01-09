const multiplicar = (a,b)=> a * b;
const somar = (a,b) => a + b;
const subtrair = (a,b) => a - b;

/*
exports.somar = somar;
exports.subtrair = subtrair;
exports.multiplicar = multiplicar;
*/
module.exports = function() {
    return {
        somar,
        subtrair,
        multiplicar
    }
}
/*
module.exports = {
    somar,
    subtrair,
    multiplicar
}
*/