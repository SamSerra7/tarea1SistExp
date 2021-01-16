/*jshint esversion: 6 */

function Form6(){
    let root = document.getElementById("root");
    while(root.firstChild){
        root.removeChild(root.firstChild);
    }
    createForm6(root);
}


function createForm6(root){
    let questions = document.createElement("h1");
    questions.innerText="Formulario 6";
    root.appendChild(questions);
}