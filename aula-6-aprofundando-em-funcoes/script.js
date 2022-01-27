function funcao(){
    console.log('Sou uma mensagem de função declarativa');
}
funcao();

var funcao = function(){
    console.log('Sou uma mensagem de função de expressão!');
}
funcao();

var funcao = () => {
    console.log('Sou uma Mensagem de uma Função Arraow!');
}
funcao();