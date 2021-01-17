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
    //Page title
    let title = document.createElement("h1");
    title.innerText="Formulario 4";
    title.classList.add("title");
    
    //Subtitle
    let subtitle = document.createElement("h2");
    subtitle.innerText = "Yo aprendo...";
    subtitle.classList.add("subtitle");

    // div container
    let container = document.createElement("div");
    container.classList.add("opts-container");

   
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
    

    //select for the average
    let average = document.createElement("div");
    let lbl_average = document.createElement("h5");
    lbl_average.innerText = "Promedio ";
    let input = document.createElement("input");
    input.id = "average";
    input.type = "number";
    average.appendChild(lbl_average);
    average.appendChild(input);


    //option gender
    let opt_gender = document.createElement("div");
    let lbl_gender = document.createElement("h5");
    lbl_gender.innerText = "Sexo";
    //options
    let opt_sel_gender = document.createElement("select");
    opt_sel_gender.id = "gender";
    let opt_1_gender = document.createElement("option");
    opt_1_gender.innerText = "F";
    opt_1_gender.value = "F"; 
    let opt_2_gender = document.createElement("option");
    opt_2_gender.innerText = "M";
    opt_2_gender.value = "M";

    opt_sel_gender.appendChild(opt_1_gender);
    opt_sel_gender.appendChild(opt_2_gender);

    opt_gender.appendChild(lbl_gender);
    opt_gender.appendChild(opt_sel_gender);
    


    //add rows to container
    container.appendChild(opt_branch);
    container.appendChild(document.createElement("hr"))//space between
    container.appendChild(average);
    container.appendChild(document.createElement("hr"))//space between
    container.appendChild(opt_gender);
    
    
    //button to trigger the calculation
    let button = document.createElement("button");
    button.type= "submit";
    button.innerText = "Calcular"
    button.addEventListener("click",() => calculate4(root));
    button.classList.add("btn-calculate");
    

    //adds childs to the root
    root.appendChild(title); //add title to the root
    root.appendChild(subtitle); //add subtitle to the root
    root.appendChild(container); //add options to the root
    root.appendChild(button); //add button to the root
}





//make the euclidean calculation
function calculate4(root){

   let currentLearningType = "";
   let currentDistance;

   let branch = document.getElementById("branch").value;
   let average = document.getElementById("average").value;
   let gender = document.getElementById("gender").value;

   
   //evaluate all variables against the JSON
   getJSON()["EstiloSexoPromedioRecinto"].map(element => {
        //make the euclidean calc
        let euclidean = Math.sqrt( 
                                   ( ( branch === element["Recinto"].toLowerCase()? 0.001 : 1 ) ^ 2 ) + 
                                   ( ( average - parseFloat(element["Promedio"]) ) ^ 2 ) + 
                                   ( ( gender === element["Sexo"] ? 0.001 : 1 ) ^ 2 ) 
                               );
       //basically, ask if is the first time or if the current euclidean calc is closer (lower) to the currentDistance temp variable  
       if(currentDistance === undefined || euclidean < currentDistance){
           currentDistance = euclidean;
           currentLearningType = element["Estilo"];
       }                   
   });

   //show the result dinamically in the screen
   let result = document.getElementById("result")
   while(result.firstChild){
       result.removeChild(result.firstChild);
   }
   let finalStr = document.createElement("h1");
   finalStr.innerText = "Tu estilo de aprendizaje es, probablemente: "+currentLearningType;
   finalStr.style= "margin-top: 3%;";
   result.appendChild(finalStr);
   window.scrollTo(0,document.body.scrollHeight);//scroll to bottom
}
