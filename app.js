// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let listaAmigos = [];

function agregarAmigo() {
    let amigo = document.getElementById('amigo').value;
    if (validarVacio(amigo)) {
        listaAmigos.push(amigo);
        limpiarAmigo();
        agregarNuevoElementoLi("#listaAmigos", amigo);
    }
}

function sortearAmigo() {
    if (listaAmigos.length == 0) {
        alert("Por favor, inserte al menos un amigo.");
        return;
      }
    let amigo = listaAmigos[Math.floor(Math.random() * listaAmigos.length)];
    asignarTextoElemento("#resultado", amigo);
    limpiarListaDeAmigos();
  }

function validarVacio(amigo) {
    if (amigo == "") {
        alert("Por favor, inserte un nombre.");
        return false;
    }
    return true;
}

function limpiarAmigo() {
    document.querySelector('#amigo').value = '';
}

function agregarNuevoElementoLi(listaId, texto) {
    let lista = document.querySelector(listaId);
    if (!lista) return console.error("Elemento no encontrado:", listaId);

    let nuevoElemento = document.createElement("li");
    nuevoElemento.textContent = texto;
    lista.appendChild(nuevoElemento);
}

function asignarTextoElemento(elemento, texto) {
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}

function limpiarListaDeAmigos() {
    document.querySelector('#amigo').value = '';
    listaAmigos = [];
    document.querySelector("#listaAmigos").innerHTML = '';
  }