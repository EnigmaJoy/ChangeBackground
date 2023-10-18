/*
Esercizio 1: Cambia Colore di Sfondo al Click
- Crea una pagina HTML con un pulsante.
- Aggiungi un evento di click al pulsante in modo che, ogni volta che viene cliccato, il colore di sfondo della pagina cambia in modo casuale. Utilizza colori esadecimali o nomi di colori predefiniti.
*/
/*
var element = document.getElementById("btn-1");
var element = document.getElementById("bckg-1");
var arrayRandomColors = ["#E3C0D3","#2B59C3","#499F68","#CE8147","#ECDD7B","#CFCFEA","#654236","#F6FEDB","#EDFFAB","#DC136C"]

Math.floor(Math.random() * 11);

function clickButton(){
    var element = document.getElementById("btn-1");
    var element = document.getElementById("bckg-1");
    let arrayRandomColors = ["#E3C0D3","#2B59C3","#499F68","#CE8147","#ECDD7B","#CFCFEA","#654236","#F6FEDB","#EDFFAB","#DC136C"];
    for ()
    
};
console.log() */

function changeColor(){
    document.body.style.backgroundColor=
    "rgb("+ Math.round(Math.random() * 255) + 
    "," + Math.round(Math.random() * 255) + 
    "," + Math.round(Math.random() * 255) + ")";

}