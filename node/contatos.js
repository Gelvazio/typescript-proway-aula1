/*
const contatos = [];

const getContatos = () => contatos.length;
const add = (val) => contatos.push(val);

module.exports = {
    getContatos,
    add
}
*/
module.exports = function(){
    const contatos = [];

    const getContatos = () => contatos.length;
    const add = (val) => contatos.push(val);

    return {
        getContatos,
        add
    }
}