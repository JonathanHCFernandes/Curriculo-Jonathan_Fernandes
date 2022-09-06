//Uma variavel definindo que o Anakin ja comeca como a variavel verdadeira
let AnakinVisivel = true;

function TrocarDeLado(){
    //Inicializando os componentes que vao ser alterados e armazenando em uma variavel
    let portugues = document.getElementById('portugues');
    let ingles = document.getElementById('ingles');
    let Site = document.querySelector('body');
    let eua = document.getElementById('eua');
    let titulo = document.getElementById('titulo');

    //Condicao verificando se no inicio o portugues estiver ativo, ele faz a troca para o ingles
    if(AnakinVisivel == true){
        AnakinVisivel = false;
        portugues.style.display = 'none';
        ingles.style.display = 'block';
        titulo.textContent = 'Junior Full Stack Developer'
        Site.style.backgroundColor = '#292929';
        Site.style.color = 'white';
        eua.src = 'images/novobrasil.png';
        eua.style.backgroundColor = 'rgb(41, 41, 41)';
        console.log("entrou na primeira condição")
    }else{
        AnakinVisivel = true;
        portugues.style.display = 'block';
        titulo.textContent = 'Desenvolvedor Full-Stack Júnior'
        ingles.style.display = 'none';
        Site.style.backgroundColor = 'white';
        Site.style.color = 'black';
        eua.src = 'images/eua.png';
        eua.style.backgroundColor = 'white'; 
    }

}