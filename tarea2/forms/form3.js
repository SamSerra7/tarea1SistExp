/*jshint esversion: 6 */

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
    opt_1.value = "DIVERGENTE"; 
    let opt_2 = document.createElement("option");
    opt_2.innerText = "convergente";
    opt_2.value = "CONVERGENTE";
    let opt_3 = document.createElement("option");
    opt_3.innerText = "asimilador";
    opt_3.value = "ASIMILADOR";
    let opt_4 = document.createElement("option");
    opt_4.innerText = "acomodador";
    opt_4.value = "ACOMODADOR";

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

//make the bayesian calculation
function calculate3(root){

    let currentGender = "";
    
    let bayesGM=0;
    let bayesGF=0;

    let branch = document.getElementById("branch").value;
    let average = document.getElementById("average").value;
    let learningType = document.getElementById("learningType").value;

    //sets the percentage of all attributes
    let p_branch = 1/percentageDistinctValues(entityNameStudent,"Recinto");
    let p_average = 1/percentageDistinctValues(entityNameStudent,"Promedio");
    let p_learningType = 1/percentageDistinctValues(entityNameStudent,"Estilo");
   
    const m = 3;

    let classInstancesGM = getInstances(entityNameStudent,"Sexo","M");
    let classInstancesGF = getInstances(entityNameStudent,"Sexo","F");

    let totalClassInstances = (classInstancesGM+classInstancesGF);
    
    let p_GM = classInstancesGM/totalClassInstances;
    let p_GF = classInstancesGF/totalClassInstances;


    currentGender = bayesAlgorithmGenderByBALT(bayesGM,bayesGF,branch,average,
                                                learningType,p_branch,p_average,
                                                p_learningType,m,classInstancesGM,classInstancesGF,
                                                p_GM,p_GF);

    //show the result dinamically in the screen
    let result = document.getElementById("result")
    while(result.firstChild){
        result.removeChild(result.firstChild);
    }
    let finalStr = document.createElement("h1");
    finalStr.innerText = "Tu género es, probablemente: "+ currentGender;
    finalStr.style= "margin-top: 3%;";
    result.appendChild(finalStr);
    window.scrollTo(0,document.body.scrollHeight);//scroll to bottom
}

function bayesAlgorithmGenderByBALT(bayesGM,bayesGF,branch,average,
                                    learningType,p_branch,p_average,
                                    p_learningType,m,classInstancesGM,classInstancesGF,
                                    p_GM,p_GF){

    //Gender M frecuencies
    let BfrecuencyGM = getInstancesByClass(entityNameStudent,"Recinto",branch,"M");
    let AfrecuencyGM = getInstancesByClass(entityNameStudent,"Promedio",average,"M");
    let LTfrecuencyGM = getInstancesByClass(entityNameStudent,"Estilo",learningType,"M");
    //Gender F frecuencies
    let BfrecuencyGF = getInstancesByClass(entityNameStudent,"Recinto",branch,"F");
    let AfrecuencyGF = getInstancesByClass(entityNameStudent,"Promedio",average,"F");
    let LTfrecuencyGF = getInstancesByClass(entityNameStudent,"Estilo",learningType,"F");


    //bayes calculations
    //M products
    let BbayesGM = bayes(BfrecuencyGM,m,p_branch,classInstancesGM);
    let AbayesGM = bayes(AfrecuencyGM,m,p_average,classInstancesGM);
    let LTbayesGM = bayes(LTfrecuencyGM,m,p_learningType,classInstancesGM);
    
    let GM_prod =  BbayesGM * AbayesGM * LTbayesGM;

    //F products
    let BbayesGF = bayes(BfrecuencyGF,m,p_branch,classInstancesGF);
    let AayesGF = bayes(AfrecuencyGF,m,p_average,classInstancesGF);
    let LTbayesGF = bayes(LTfrecuencyGF,m,p_learningType,classInstancesGF);
    
    let GF_prod =  BbayesGF * AayesGF * LTbayesGF;


    bayesGM = GM_prod*p_GM;
    bayesGF = GF_prod*p_GF;


    console.log("probabilidad Masculino: "+bayesGM);
    console.log("probabilidad Femenino: "+bayesGF); 
    
    return maxGenderByMF(bayesGM,bayesGF);
}

function maxGenderByMF(M,F){
    return M > F ?  "Masculino" : F > M ? "Femenino":"Ocurrió un problema, o no hay suficientes datos";
}