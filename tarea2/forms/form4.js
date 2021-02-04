/*jshint esversion: 6 */

const entityNameStudent = "EstiloSexoPromedioRecinto"

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


//make the bayesian calculation
function calculate4(root){

    let currentLearningType = "";
    
    /*
        LT= Learning Types
        LT1=ASIMILADOR
        LT2=ACOMODADOR
        LT3=CONVERGENTE
        LT4=DIVERGENTE
    */

    let bayesLT1=0;
    let bayesLT2=0;
    let bayesLT3=0;
    let bayesLT4=0;

    //gets the info from the form
    let branch = document.getElementById("branch").value;
    let average = document.getElementById("average").value;
    let gender = document.getElementById("gender").value;

    //sets the percentage of all attributes
    let p_branch = 1/percentageDistinctValues(entityNameStudent,"Recinto");
    let p_average = 1/percentageDistinctValues(entityNameStudent,"Promedio");
    let p_gender = 1/percentageDistinctValues(entityNameStudent,"Sexo");
   
    const m = 3;

    let classInstancesLT1 = getInstances(entityNameStudent,"Estilo","ASIMILADOR");
    let classInstancesLT2 = getInstances(entityNameStudent,"Estilo","ACOMODADOR");
    let classInstancesLT3 = getInstances(entityNameStudent,"Estilo","CONVERGENTE");
    let classInstancesLT4 = getInstances(entityNameStudent,"Estilo","DIVERGENTE");

    let totalClassInstances = (classInstancesLT1+classInstancesLT2+classInstancesLT3+classInstancesLT4);
    
    let p_LT1 = classInstancesLT1/totalClassInstances;
    let p_LT2 = classInstancesLT2/totalClassInstances;
    let p_LT3 = classInstancesLT3/totalClassInstances;
    let p_LT4 = classInstancesLT4/totalClassInstances;

    currentLearningType = bayesAlgorithmLearningTypesByBAG(bayesLT1,bayesLT2,bayesLT3,bayesLT4,
                                                            branch,average,gender,p_branch,p_average,
                                                            p_gender,m,classInstancesLT1,classInstancesLT2,
                                                            classInstancesLT3,classInstancesLT4,p_LT1,
                                                            p_LT2,p_LT3,p_LT4);
    
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


function bayesAlgorithmLearningTypesByBAG(bayesLT1,bayesLT2,bayesLT3,bayesLT4,
                                        branch,average,gender,p_branch,p_average,
                                        p_gender,m,classInstancesLT1,classInstancesLT2,
                                        classInstancesLT3,classInstancesLT4,p_LT1,
                                        p_LT2,p_LT3,p_LT4){

    //Learning Type 1 frecuencies
    let BfrecuencyLT1 = getInstancesByClass(entityNameStudent,"Recinto",branch,"ASIMILADOR");
    let AfrecuencyLT1 = getInstancesByClass(entityNameStudent,"Promedio",average,"ASIMILADOR");
    let GfrecuencyLT1 = getInstancesByClass(entityNameStudent,"Sexo",gender,"ASIMILADOR");
    //Learning Type 2 frecuencies
    let BfrecuencyLT2 = getInstancesByClass(entityNameStudent,"Recinto",branch,"ACOMODADOR");
    let AfrecuencyLT2 = getInstancesByClass(entityNameStudent,"Promedio",average,"ACOMODADOR");
    let GfrecuencyLT2 = getInstancesByClass(entityNameStudent,"Sexo",gender,"ACOMODADOR");
    //Learning Type 3 frecuencies
    let BfrecuencyLT3 = getInstancesByClass(entityNameStudent,"Recinto",branch,"CONVERGENTE");
    let AfrecuencyLT3 = getInstancesByClass(entityNameStudent,"Promedio",average,"CONVERGENTE");
    let GfrecuencyLT3 = getInstancesByClass(entityNameStudent,"Sexo",gender,"CONVERGENTE");
    //Learning Type 4 frecuencies
    let BfrecuencyLT4 = getInstancesByClass(entityNameStudent,"Recinto",branch,"DIVERGENTE");
    let AfrecuencyLT4 = getInstancesByClass(entityNameStudent,"Promedio",average,"DIVERGENTE");
    let GfrecuencyLT4 = getInstancesByClass(entityNameStudent,"Sexo",gender,"DIVERGENTE");


    //bayes calculations
    //ASIMILADOR products
    let BbayesLT1 = bayes(BfrecuencyLT1,m,p_branch,classInstancesLT1);
    let AayesLT1 = bayes(AfrecuencyLT1,m,p_average,classInstancesLT1);
    let GbayesLT1 = bayes(GfrecuencyLT1,m,p_gender,classInstancesLT1);
    
    let LT1_prod =  BbayesLT1 * AayesLT1 * GbayesLT1;

    //ACOMODADOR products
    let BbayesLT2 = bayes(BfrecuencyLT2,m,p_branch,classInstancesLT2);
    let AayesLT2 = bayes(AfrecuencyLT2,m,p_average,classInstancesLT2);
    let GbayesLT2 = bayes(GfrecuencyLT2,m,p_gender,classInstancesLT2);
    
    let LT2_prod =  BbayesLT2 * AayesLT2 * GbayesLT2;

    //CONVERGENTE products
    let BbayesLT3 = bayes(BfrecuencyLT3,m,p_branch,classInstancesLT3);
    let AayesLT3 = bayes(AfrecuencyLT3,m,p_average,classInstancesLT3);
    let GbayesLT3 = bayes(GfrecuencyLT3,m,p_gender,classInstancesLT3);
    
    let LT3_prod =  BbayesLT3 * AayesLT3 * GbayesLT3;

    //DIVERGENTE products
    let BbayesLT4 = bayes(BfrecuencyLT4,m,p_branch,classInstancesLT4);
    let AayesLT4 = bayes(AfrecuencyLT4,m,p_average,classInstancesLT4);
    let GbayesLT4 = bayes(GfrecuencyLT4,m,p_gender,classInstancesLT4);
    
    let LT4_prod =  BbayesLT4 * AayesLT4 * GbayesLT4;

    
    bayesLT1 = LT1_prod*p_LT1;
    bayesLT2 = LT2_prod*p_LT2;
    bayesLT3 = LT3_prod*p_LT3;
    bayesLT4 = LT4_prod*p_LT4;


    console.log("probabilidad ASIMILADOR: "+bayesLT1);
    console.log("probabilidad ACOMODADOR: "+bayesLT2);
    console.log("probabilidad CONVERGENTE: "+bayesLT3);
    console.log("probabilidad DIVERGENTE: "+bayesLT4);

    return maxLearningTypeByAACD(bayesLT1,bayesLT2,bayesLT3,bayesLT4);
}

//returns the name of the max value Learning Type between ASIMILADOR,ACOMODADOR,CONVERGENTE,DIVERGENTE
function maxLearningTypeByAACD(LT1,LT2,LT3,LT4){
    return  (LT1>LT2) ? 
                ( (LT1>LT3) ? ((LT1>LT4) ? "ASIMILADOR": "DIVERGENTE") 
                    : ( (LT3>LT4) ? "CONVERGENTE":"DIVERGENTE" ) ) 
            : 
                ( (LT2>LT3) ? ((LT2>LT4) ? "ACOMODADOR" : "DIVERGENTE")
                    : ( (LT3>LT4) ? "CONVERGENTE":"DIVERGENTE" ) ); 
}