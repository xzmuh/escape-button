const sim = window.document.getElementById("opcyes")
const nao = window.document.getElementById("opcNo")
const fundo = window.document.getElementById("area")
const resp = window.document.getElementById("textinho")
const maintxt = window.document.getElementById("maintxt")
const pyroDiv = window.document.getElementById("pyro")

nao.addEventListener("mouseenter", entrar)
let estado = -1

function entrar(){
    estado++
    if (estado == 0){
        sim.style.transform="translate(+95px)"
        nao.style.transform="translate(330px, -190px)"
    }
    if (estado == 1){
        nao.style.transform="translate(430px, +290px)"
    }
    if (estado == 2){
        nao.style.transform="translate(-325px, +220px)"
    }
    if (estado == 3){
        nao.style.transform="translate(-455px, -300px)"
    }
    if (estado == 4){
        nao.style.transform="translate(+405px, +300px)"
    }
    if (estado == 5){
        nao.style.transform="translate(+335px, -250px)"
    }
    if (estado == 6){
        nao.style.transform="translate(-185px, +150px)"
    }
    if (estado == 7){
        nao.style.transform="translate(-325px, -250px)"
        estado = -1
    }
}

sim.addEventListener("click", clicar)

function clicar(){
    resp.innerHTML ="Eu te amo meu amoooor!!"
    maintxt.innerHTML =""
    sim.style.transform="translate(0px)"
    nao.style.transform="translate(0px, 0px)"
    pyroDiv.style.display="block";
}

botaoSim.setFocusable(false);