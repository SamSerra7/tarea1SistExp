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
    //Page title
    let title = document.createElement("h1");
    title.innerText="Formulario 3";
    title.classList.add("title");
    
    //Subtitle
    let subtitle = document.createElement("h2");
    subtitle.innerText = "De qué género eres...";
    subtitle.classList.add("subtitle");

    // div container
    let container = document.createElement("div");
    container.classList.add("opts-container");

    //option learning type
    let opt = document.createElement("div");
    let lbl = document.createElement("h5");
    lbl.innerText = "Tipo de aprendizaje";
    //options
    let opt_sel = document.createElement("select");
    opt_sel.id = "learningType";
    let opt_1 = document.createElement("option");
    opt_1.innerText = "divergente";
    opt_1.value = "divergente"; 
    let opt_2 = document.createElement("option");
    opt_2.innerText = "convergente";
    opt_2.value = "convergente";
    let opt_3 = document.createElement("option");
    opt_3.innerText = "asimilador";
    opt_3.value = "asimilador";
    let opt_4 = document.createElement("option");
    opt_4.innerText = "acomodador";
    opt_4.value = "acomodador";

    opt_sel.appendChild(opt_1);
    opt_sel.appendChild(opt_2);
    opt_sel.appendChild(opt_3);
    opt_sel.appendChild(opt_4);

    opt.appendChild(lbl);
    opt.appendChild(opt_sel);
    

    //select for the average
    let average = document.createElement("div");
    let lbl_average = document.createElement("h5");
    lbl_average.innerText = "Promedio ";
    let input = document.createElement("input");
    input.id = "average";
    input.type = "number";
    average.appendChild(lbl_average);
    average.appendChild(input);


    //option branch
    let opt_branch = document.createElement("div");
    let lbl_branch = document.createElement("h5");
    lbl_branch.innerText = "Recinto";
    //options
    let opt_sel_branch = document.createElement("select");
    opt_sel_branch.id = "branch";
    let opt_1_branch = document.createElement("option");
    opt_1_branch.innerText = "Paraíso";
    opt_1_branch.value = "Paraiso"; 
    let opt_2_branch = document.createElement("option");
    opt_2_branch.innerText = "Turrialba";
    opt_2_branch.value = "Turrialba";

    opt_sel_branch.appendChild(opt_1_branch);
    opt_sel_branch.appendChild(opt_2_branch);

    opt_branch.appendChild(lbl_branch);
    opt_branch.appendChild(opt_sel_branch);
    


    //add rows to container
    container.appendChild(opt);
    container.appendChild(document.createElement("hr"))//space between
    container.appendChild(average);
    container.appendChild(document.createElement("hr"))//space between
    container.appendChild(opt_branch);
    
    
    //button to trigger the calculation
    let button = document.createElement("button");
    button.type= "submit";
    button.innerText = "Calcular"
    button.addEventListener("click",() => calculate3(root));
    button.classList.add("btn-calculate");
    

    //adds childs to the root
    root.appendChild(title); //add title to the root
    root.appendChild(subtitle); //add subtitle to the root
    root.appendChild(container); //add options to the root
    root.appendChild(button); //add button to the root
}





//make the euclidean calculation
function calculate3(root){

    let currentGender = "";
    let currentDistance;

    let learningType = document.getElementById("learningType").value;
    let average = document.getElementById("average").value;
    let branch = document.getElementById("branch").value;

    
    //evaluate all variables against the JSON
    getJSON()["EstiloSexoPromedioRecinto"].map(element => {
        //make the euclidean calc
        let euclidean = Math.sqrt( 
                                    ( ( learningType === element["Estilo"].toLowerCase()? 0.001 : 1 ) ^ 2 ) + 
                                    ( ( average - parseFloat(element["Promedio"]) ) ^ 2 ) + 
                                    ( ( branch === element["Recinto"] ? 0.001 : 1 ) ^ 2 ) 
                                );
        //basically, ask if is the first time or if the current euclidean calc is closer (lower) to the currentDistance temp variable 
        if(currentDistance === undefined || euclidean < currentDistance){
            currentDistance = euclidean;
            currentGender = element["Sexo"];
        }                   
    });

    //show the result dinamically in the screen
    let result = document.getElementById("result")
    while(result.firstChild){
        result.removeChild(result.firstChild);
    }
    let gender = currentGender.toLowerCase() === "m" ? "Masculino": "Femenino";
    let finalStr = document.createElement("h1");
    finalStr.innerText = "Tu género es, probablemente: "+ gender;
    finalStr.style= "margin-top: 3%;";
    result.appendChild(finalStr);
    window.scrollTo(0,document.body.scrollHeight);//scroll to bottom
}
