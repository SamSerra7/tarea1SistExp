/*jshint esversion: 6 */

function Form2(){
    let root = document.getElementById("root");
    while(root.firstChild){
        root.removeChild(root.firstChild);
    }
    let result = document.getElementById("result")
    while(result.firstChild){
        result.removeChild(result.firstChild);
    }
    createForm2(root);
}

function createForm2(root){
    let questions = document.createElement("h1");
    questions.innerText="Formulario 2";
    root.appendChild(questions);
}
