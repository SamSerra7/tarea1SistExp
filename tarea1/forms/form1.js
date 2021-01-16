/*jshint esversion: 6 */

function Form1(){
    let root = document.getElementById("root");
    while(root.firstChild){
        root.removeChild(root.firstChild);
    }
    createForm1(root);
}


function createForm1(root){
    let questions = document.createElement("h1");
    questions.innerText="Formulario 1";
    root.appendChild(questions);
}