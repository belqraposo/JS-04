//Questão 1:

function message(){
    console.log('Questão 1: OK!');
}
message();

//Questão 2:

function name(nome){
    console.log('Meu nome é:', nome)
}
name('Isabel');

//Questão 3:

function infos(nome,idade,estiloMusical){
    console.log(`Meu nome é: ${nome}, Minha idade é: ${idade}, Meu estilo musical é: ${estiloMusical}`);
}
infos('Isabel', 20, 'Eclético');

//Questão 4:

function about(filme,musica){
    console.log(`Filme: ${filme}, Música: ${musica}`);
}
about('Interestelar', 'Slipknot Snuff');

//BONUS

function number(numero){
    return numero * 3;
}
console.log(`O triplo do número é: ${number(28)}`);
