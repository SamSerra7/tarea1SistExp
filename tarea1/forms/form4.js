/*jshint esversion: 6 */

function Form4(){
    let root = document.getElementById("root");
    while(root.firstChild){
        root.removeChild(root.firstChild);
    }
    let result = document.getElementById("result")
    while(result.firstChild){
        result.removeChild(result.firstChild);
    }
    createForm4(root);
}


function createForm4(root){
    let questions = document.createElement("h1");
    questions.innerText="Formulario 4";
    root.appendChild(questions);
}