function addBola(){
    //cria uma div, adicionando uma classe a mesma.
    var bola = document.createElement ("div");
    bola.setAttribute("class", "bola");
   
    //definindo uma posição aleatoria da div criada (a bolinha)
    var p1 = Math.floor(Math.random()* 500);
    var p2 = Math.floor(Math.random()* 400);
    var cor = Math.floor(Math.random()* 999999);

    //adiciona cor a bola
    bola.setAttribute("style", "left:"+p1+"px;top:"+p2+"px;background-color:#"+cor+";");
    bola.setAttribute("onclick", "estourar(this)");

    //adiciona o elemento no corpo da pagina (body)
    document.body.appendChild(bola);
}

    //faz com que as bolas estourem ao clicar no mouse.
function estourar(element) {
    document.body.removeChild(element);
    document.getElementById('placar').innerHTML++;
    let cor = Math.floor(Math.random()*999999);
    let cor1 = Math.floor(Math.random()*999999);
    document.getElementById('placar').setAttribute("style", "color:#"+cor1+";background-color:#"+cor+";");

}
// faz com que as bolas apareçam na tela.
function iniciar() {
    setInterval(addBola, 1000);
}