/*jshint esversion: 6 */
let root = document.getElementById("root");

function Form3(){
    let root = document.getElementById("root");
    while(root.firstChild){
        root.removeChild(root.firstChild);
    }
    let result = document.getElementById("result")
    while(result.firstChild){
        result.removeChild(result.firstChild);
    }
    createForm3(root);
}


function createForm3(root){
    let questions = document.createElement("h1");
    questions.innerText="Formulario 3";
    root.appendChild(questions);
}