function teste(){
    console.log('teste');
}

function teste2(){
    teste();
    console.log(' + teste2');
}

function teste3(){
    teste();
    teste2();
    console.log(' + teste3');
}

module.exports = {
    teste,
    teste2,
    teste3
}