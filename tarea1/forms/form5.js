/*jshint esversion: 6 */

function Form5(){
    let root = document.getElementById("root");
    while(root.firstChild){
        root.removeChild(root.firstChild);
    }
    let result = document.getElementById("result")
    while(result.firstChild){
        result.removeChild(result.firstChild);
    }
    createForm5(root);
}


function createForm5(root){
    let questions = document.createElement("h1");
    questions.innerText="Formulario 5";
    root.appendChild(questions);
}