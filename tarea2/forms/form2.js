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
    //Page title
    let title = document.createElement("h1");
    title.innerText="Formulario 2";
    title.classList.add("title");
    
    //Subtitle
    let subtitle = document.createElement("h2");
    subtitle.innerText = "De que recinto eres...";
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
    container.appendChild(opt);
    container.appendChild(document.createElement("hr"))//space between
    container.appendChild(average);
    container.appendChild(document.createElement("hr"))//space between
    container.appendChild(opt_gender);
    
    
    //button to trigger the calculation
    let button = document.createElement("button");
    button.type= "submit";
    button.innerText = "Calcular"
    button.addEventListener("click",() => calculate2(root));
    button.classList.add("btn-calculate");
    

    //adds childs to the root
    root.appendChild(title); //add title to the root
    root.appendChild(subtitle); //add subtitle to the root
    root.appendChild(container); //add options to the root
    root.appendChild(button); //add button to the root
}





//make the euclidean calculation
function calculate2(root){

    let currentBranch = "";
    let bayesP=0;
    let bayesT=0;

    let learningType = document.getElementById("learningType").value;
    let average = document.getElementById("average").value;
    let gender = document.getElementById("gender").value;

    //sets the percentage of all attributes
    let p_average = 1/percentageDistinctValues(entityNameStudent,"Promedio");
    let p_learningType = 1/percentageDistinctValues(entityNameStudent,"Estilo");
    let p_gender = 1/percentageDistinctValues(entityNameStudent,"Sexo");
   
    const m = 8;

    let classInstancesP = getInstances(entityNameStudent,"Recinto","Paraiso");
    let classInstancesT = getInstances(entityNameStudent,"Recinto","Turrialba");

    let totalClassInstances = (classInstancesP+classInstancesT);
    
    let p_P = classInstancesP/totalClassInstances;
    let p_T = classInstancesT/totalClassInstances;

    debugger;
    currentBranch = bayesAlgorithmBranchByGALT(bayesP,bayesT,gender,average,
                                                learningType,p_gender,p_average,
                                                p_learningType,m,classInstancesP,classInstancesT,
                                                p_P,p_T);
    

    //show the result dinamically in the screen
    let result = document.getElementById("result")
    while(result.firstChild){
        result.removeChild(result.firstChild);
    }
    let finalStr = document.createElement("h1");
    finalStr.innerText = "Tu recinto es, probablemente: "+currentBranch;
    finalStr.style= "margin-top: 3%;";
    result.appendChild(finalStr);
    window.scrollTo(0,document.body.scrollHeight);//scroll to bottom
}


function bayesAlgorithmBranchByGALT(bayesP,bayesT,gender,average,
                                    learningType,p_gender,p_average,
                                    p_learningType,m,classInstancesP,classInstancesT,
                                    p_P,p_T){

    //Branch Paraiso frecuencies
    let GfrecuencyP = getInstancesByClass(entityNameStudent,"Sexo",gender,"Paraiso");
    let AfrecuencyP = getInstancesByClass(entityNameStudent,"Promedio",average,"Paraiso");
    let LTfrecuencyP = getInstancesByClass(entityNameStudent,"Estilo",learningType,"Paraiso");
    //Branch Turrialba frecuencies
    let GfrecuencyT = getInstancesByClass(entityNameStudent,"Sexo",gender,"Turrialba");
    let AfrecuencyT = getInstancesByClass(entityNameStudent,"Promedio",average,"Turrialba");
    let LTfrecuencyT = getInstancesByClass(entityNameStudent,"Estilo",learningType,"Turrialba");


    //bayes calculations
    //M products
    let GbayesP = bayes(GfrecuencyP,m,p_gender,classInstancesP);
    let AbayesP = bayes(AfrecuencyP,m,p_average,classInstancesP);
    let LTbayesP = bayes(LTfrecuencyP,m,p_learningType,classInstancesP);

    let P_prod =  GbayesP * AbayesP * LTbayesP;

    //F products
    let GbayesT = bayes(GfrecuencyT,m,p_gender,classInstancesT);
    let AbayesT = bayes(AfrecuencyT,m,p_average,classInstancesT);
    let LTbayesT = bayes(LTfrecuencyT,m,p_learningType,classInstancesT);

    let T_prod =  GbayesT * AbayesT * LTbayesT;


    bayesP = P_prod*p_P;
    bayesT = T_prod*p_T;


    return maxBranch(bayesP,bayesT);
}

function maxBranch(P,T){
return P > T ?  "Paraiso" : T > P ? "Turrialba":"Ocurrió un problema, o no hay suficientes datos";
}