/*jshint esversion: 6 */

const entityNameProfesors = "Profesores";


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
    //Page title
    let title = document.createElement("h1");
    title.innerText="Formulario 5";
    title.classList.add("title");
    
    //Subtitle
    let subtitle = document.createElement("h2");
    subtitle.innerText = "Qué tipo de profesor eres...";
    subtitle.classList.add("subtitle");

    // div container
    let container = document.createElement("div");
    container.classList.add("opts-container");
    container.classList.add("row");

    // Option Age
    let opt_age = document.createElement("div");
    let lbl_age = document.createElement("h5");
    lbl_age.innerText = "Edad";
    //options
    let opt_sel_age = document.createElement("select");
    opt_sel_age.id = "age";
    let opt_1_age = document.createElement("option");
    opt_1_age.innerText = "Menor a 30";
    opt_1_age.value = "1"; 
    let opt_2_age = document.createElement("option");
    opt_2_age.innerText = "Entre 30 y 55";
    opt_2_age.value = "2";
    let opt_3_age = document.createElement("option");
    opt_3_age.innerText = "Mayor a 55";
    opt_3_age.value = "3";


    opt_sel_age.appendChild(opt_1_age);
    opt_sel_age.appendChild(opt_2_age);
    opt_sel_age.appendChild(opt_3_age);

    opt_age.appendChild(lbl_age);
    opt_age.appendChild(opt_sel_age);
    

    // Option Gender
    let opt_gender = document.createElement("div");
    let lbl_gender = document.createElement("h5");
    lbl_gender.innerText = "Género";
    //options
    let opt_sel_gender = document.createElement("select");
    opt_sel_gender.id = "gender";
    let opt_1_gender = document.createElement("option");
    opt_1_gender.innerText = "Femenino";
    opt_1_gender.value = "F"; 
    let opt_2_gender = document.createElement("option");
    opt_2_gender.innerText = "Masculino";
    opt_2_gender.value = "M";
    let opt_3_gender = document.createElement("option");
    opt_3_gender.innerText = "No Aplica";
    opt_3_gender.value = "NA";


    opt_sel_gender.appendChild(opt_1_gender);
    opt_sel_gender.appendChild(opt_2_gender);
    opt_sel_gender.appendChild(opt_3_gender);

    opt_gender.appendChild(lbl_gender);
    opt_gender.appendChild(opt_sel_gender);
    

    // Option Experience
    let opt_exp = document.createElement("div");
    let lbl_exp = document.createElement("h5");
    lbl_exp.innerText = "Experiencia";
    //options
    let opt_sel_exp = document.createElement("select");
    opt_sel_exp.id = "exp";
    let opt_1_exp = document.createElement("option");
    opt_1_exp.innerText = "Principiante";
    opt_1_exp.value = "B"; 
    let opt_2_exp = document.createElement("option");
    opt_2_exp.innerText = "Intermedio";
    opt_2_exp.value = "I";
    let opt_3_exp = document.createElement("option");
    opt_3_exp.innerText = "Avanzado";
    opt_3_exp.value = "A";


    opt_sel_exp.appendChild(opt_1_exp);
    opt_sel_exp.appendChild(opt_2_exp);
    opt_sel_exp.appendChild(opt_3_exp);

    opt_exp.appendChild(lbl_exp);
    opt_exp.appendChild(opt_sel_exp);


    // Option Times the teacher has taught this type of course
    let opt_times = document.createElement("div");
    let lbl_times = document.createElement("h5");
    lbl_times.innerText = "Número de veces que ha enseñado el curso";
    //options
    let opt_sel_times = document.createElement("select");
    opt_sel_times.id = "times";
    let opt_1_times = document.createElement("option");
    opt_1_times.innerText = "Nunca";
    opt_1_times.value = "1"; 
    let opt_2_times = document.createElement("option");
    opt_2_times.innerText = "De 1 a 5";
    opt_2_times.value = "2";
    let opt_3_times = document.createElement("option");
    opt_3_times.innerText = "Más de 5";
    opt_3_times.value = "3";


    opt_sel_times.appendChild(opt_1_times);
    opt_sel_times.appendChild(opt_2_times);
    opt_sel_times.appendChild(opt_3_times);

    opt_times.appendChild(lbl_times);
    opt_times.appendChild(opt_sel_times);
    

    // Option Expertise Area
    let opt_area = document.createElement("div");
    let lbl_area = document.createElement("h5");
    lbl_area.innerText = "Área de expertís";
    //options
    let opt_sel_area = document.createElement("select");
    opt_sel_area.id = "area";
    let opt_1_area = document.createElement("option");
    opt_1_area.innerText = "Toma de desiciones";
    opt_1_area.value = "DM"; 
    let opt_2_area = document.createElement("option");
    opt_2_area.innerText = "Diseño de redes";
    opt_2_area.value = "ND";
    let opt_3_area = document.createElement("option");
    opt_3_area.innerText = "Otro";
    opt_3_area.value = "O";


    opt_sel_area.appendChild(opt_1_area);
    opt_sel_area.appendChild(opt_2_area);
    opt_sel_area.appendChild(opt_3_area);

    opt_area.appendChild(lbl_area);
    opt_area.appendChild(opt_sel_area);


    // Option Skills using computer
    let opt_skills = document.createElement("div");
    let lbl_skills = document.createElement("h5");
    lbl_skills.innerText = "Habilidades en la computadora";
    //options
    let opt_sel_skills = document.createElement("select");
    opt_sel_skills.id = "skills";
    let opt_1_skills = document.createElement("option");
    opt_1_skills.innerText = "Bajas";
    opt_1_skills.value = "L"; 
    let opt_2_skills = document.createElement("option");
    opt_2_skills.innerText = "Promedio";
    opt_2_skills.value = "A";
    let opt_3_skills = document.createElement("option");
    opt_3_skills.innerText = "Alta";
    opt_3_skills.value = "H";


    opt_sel_skills.appendChild(opt_1_skills);
    opt_sel_skills.appendChild(opt_2_skills);
    opt_sel_skills.appendChild(opt_3_skills);

    opt_skills.appendChild(lbl_skills);
    opt_skills.appendChild(opt_sel_skills);


    // Option Technologies for teaching
    let opt_tech_teaching = document.createElement("div");
    let lbl_tech_teaching = document.createElement("h5");
    lbl_tech_teaching.innerText = "Uso de tecnologías al enseñar";
    //options
    let opt_sel_tech_teaching = document.createElement("select");
    opt_sel_tech_teaching.id = "tech_teaching";
    let opt_1_tech_teaching = document.createElement("option");
    opt_1_tech_teaching.innerText = "Nunca";
    opt_1_tech_teaching.value = "N"; 
    let opt_2_tech_teaching = document.createElement("option");
    opt_2_tech_teaching.innerText = "Aveces";
    opt_2_tech_teaching.value = "S";
    let opt_3_tech_teaching = document.createElement("option");
    opt_3_tech_teaching.innerText = "Frecuentemente";
    opt_3_tech_teaching.value = "O";


    opt_sel_tech_teaching.appendChild(opt_1_tech_teaching);
    opt_sel_tech_teaching.appendChild(opt_2_tech_teaching);
    opt_sel_tech_teaching.appendChild(opt_3_tech_teaching);

    opt_tech_teaching.appendChild(lbl_tech_teaching);
    opt_tech_teaching.appendChild(opt_sel_tech_teaching);


    // Option Experience using a Web Site
    let opt_exp_web = document.createElement("div");
    let lbl_exp_web = document.createElement("h5");
    lbl_exp_web.innerText = "Experiencia con páginas web";
    //options
    let opt_sel_exp_web = document.createElement("select");
    opt_sel_exp_web.id = "exp_web";
    let opt_1_exp_web = document.createElement("option");
    opt_1_exp_web.innerText = "Nunca";
    opt_1_exp_web.value = "N"; 
    let opt_2_exp_web = document.createElement("option");
    opt_2_exp_web.innerText = "Aveces";
    opt_2_exp_web.value = "S";
    let opt_3_exp_web = document.createElement("option");
    opt_3_exp_web.innerText = "Frecuentemente";
    opt_3_exp_web.value = "O";


    opt_sel_exp_web.appendChild(opt_1_exp_web);
    opt_sel_exp_web.appendChild(opt_2_exp_web);
    opt_sel_exp_web.appendChild(opt_3_exp_web);

    opt_exp_web.appendChild(lbl_exp_web);
    opt_exp_web.appendChild(opt_sel_exp_web);



    //add rows to container
    container.appendChild(opt_age);
    container.appendChild(opt_gender);
    container.appendChild(opt_exp);
    container.appendChild(opt_times);
    container.appendChild(opt_area);
    container.appendChild(opt_skills);
    container.appendChild(opt_tech_teaching);
    container.appendChild(opt_exp_web);
    
    
    //button to trigger the calculation
    let button = document.createElement("button");
    button.type= "submit";
    button.innerText = "Calcular"
    button.addEventListener("click",() => calculate5(root));
    button.classList.add("btn-calculate");
    

    //adds childs to the root
    root.appendChild(title); //add title to the root
    root.appendChild(subtitle); //add subtitle to the root
    root.appendChild(container); //add options to the root
    root.appendChild(button); //add button to the root
}


//make the bayes calculation
function calculate5(root){

    let profesorType = 0;
    let bayesB = 0;
    let bayesI = 0;
    let bayesA = 0;

    //get form attributes
    let age = parseInt(document.getElementById("age").value);
    let gender = document.getElementById("gender").value;
    let exp = document.getElementById("exp").value;
    let times = document.getElementById("times").value;
    let area = document.getElementById("area").value;
    let skills = document.getElementById("skills").value;
    let tech_teaching = document.getElementById("tech_teaching").value;
    let exp_web = document.getElementById("exp_web").value;

    //set percentage of all attributes
    let p_age = 1/percentageDistinctValues(entityNameProfesors,"A");
    let p_gender = 1/percentageDistinctValues(entityNameProfesors,"B");
    let p_exp = 1/percentageDistinctValues(entityNameProfesors,"C");
    let p_times = 1/percentageDistinctValues(entityNameProfesors,"D");
    let p_area = 1/percentageDistinctValues(entityNameProfesors,"E");
    let p_skills = 1/percentageDistinctValues(entityNameProfesors,"F");
    let p_tech_teaching = 1/percentageDistinctValues(entityNameProfesors,"G");
    let p_exp_web = 1/percentageDistinctValues(entityNameProfesors,"H");

    const m = 8;

    let classInstancesBeginner = getInstances(entityNameProfesors,"Class","Beginner");
    let classInstancesIntermediate = getInstances(entityNameProfesors,"Class","Intermediate");
    let classInstancesAdvanced = getInstances(entityNameProfesors,"Class","Advanced");

    let totalClassInstances = (classInstancesBeginner+classInstancesIntermediate+classInstancesAdvanced);
    let p_beginner = classInstancesBeginner/totalClassInstances;
    let p_intermediate = classInstancesIntermediate/totalClassInstances;
    let p_advanced = classInstancesAdvanced/totalClassInstances;

    //exevutes the bayes algorithm
    profesorType = bayesAlgorithmProfesors(age,gender,exp,times,
        area,skills,tech_teaching,exp_web,p_age,p_gender,p_exp,p_times,
        p_area,p_skills,p_tech_teaching,p_exp_web,m,p_beginner,p_intermediate,p_advanced,
        classInstancesBeginner,classInstancesIntermediate,classInstancesAdvanced);

    //show the result dinamically in the screen
    let result = document.getElementById("result")
    while(result.firstChild){
        result.removeChild(result.firstChild);
    }

    //show results
    let finalStr = document.createElement("h1");
    finalStr.innerText = `Usted es, probablemente, un tipo de profesor:  
                                ${profesorType == bayesB ? "Principiante"
                                  : profesorType == bayesI ? "Intermedio"
                                  : profesorType == bayesA ? "Avanzado" 
                                  : "...Disculpe, ocurrió un error en el calculo"}`;
    finalStr.style= "margin-top: 3%;";
    result.appendChild(finalStr);
    window.scrollTo(0,document.body.scrollHeight);//scroll to bottom
}

//returns the profesor type who fits the most
function bayesAlgorithmProfesors(age,gender,exp,times,
    area,skills,tech_teaching,exp_web,p_age,p_gender,p_exp,p_times,
    p_area,p_skills,p_tech_teaching,p_exp_web,m,p_beginner,p_intermediate,p_advanced,
    classInstancesBeginner,classInstancesIntermediate,classInstancesAdvanced){

    //Beginner Frecuencies
    let AfrecuencyB = getInstancesByClass(entityNameProfesors,"A",age,"Beginner");
    let BfrecuencyB = getInstancesByClass(entityNameProfesors,"B",gender,"Beginner");
    let CfrecuencyB = getInstancesByClass(entityNameProfesors,"C",exp,"Beginner");
    let DfrecuencyB = getInstancesByClass(entityNameProfesors,"D",times,"Beginner");
    let EfrecuencyB = getInstancesByClass(entityNameProfesors,"E",area,"Beginner");
    let FfrecuencyB = getInstancesByClass(entityNameProfesors,"F",skills,"Beginner");
    let GfrecuencyB = getInstancesByClass(entityNameProfesors,"G",tech_teaching,"Beginner");
    let HfrecuencyB = getInstancesByClass(entityNameProfesors,"H",exp_web,"Beginner");

    //Intermediate Frecuencies
    let AfrecuencyI = getInstancesByClass(entityNameProfesors,"A",age,"Intermediate");
    let BfrecuencyI = getInstancesByClass(entityNameProfesors,"B",gender,"Intermediate");
    let CfrecuencyI = getInstancesByClass(entityNameProfesors,"C",exp,"Intermediate");
    let DfrecuencyI = getInstancesByClass(entityNameProfesors,"D",times,"Intermediate");
    let EfrecuencyI = getInstancesByClass(entityNameProfesors,"E",area,"Intermediate");
    let FfrecuencyI = getInstancesByClass(entityNameProfesors,"F",skills,"Intermediate");
    let GfrecuencyI = getInstancesByClass(entityNameProfesors,"G",tech_teaching,"Intermediate");
    let HfrecuencyI = getInstancesByClass(entityNameProfesors,"H",exp_web,"Intermediate");

    //Intermediate Advanced
    let AfrecuencyA = getInstancesByClass(entityNameProfesors,"A",age,"Advanced");
    let BfrecuencyA = getInstancesByClass(entityNameProfesors,"B",gender,"Advanced");
    let CfrecuencyA = getInstancesByClass(entityNameProfesors,"C",exp,"Advanced");
    let DfrecuencyA = getInstancesByClass(entityNameProfesors,"D",times,"Advanced");
    let EfrecuencyA = getInstancesByClass(entityNameProfesors,"E",area,"Advanced");
    let FfrecuencyA = getInstancesByClass(entityNameProfesors,"F",skills,"Advanced");
    let GfrecuencyA = getInstancesByClass(entityNameProfesors,"G",tech_teaching,"Advanced");
    let HfrecuencyA = getInstancesByClass(entityNameProfesors,"H",exp_web,"Advanced");

    //bayes calculations
    //beginer products
    let AbayesB = bayes(AfrecuencyB,m,p_age,classInstancesBeginner);
    let BbayesB = bayes(BfrecuencyB,m,p_gender,classInstancesBeginner);
    let CbayesB = bayes(CfrecuencyB,m,p_exp,classInstancesBeginner);
    let DbayesB = bayes(DfrecuencyB,m,p_times,classInstancesBeginner);
    let EbayesB = bayes(EfrecuencyB,m,p_area,classInstancesBeginner);
    let FbayesB = bayes(FfrecuencyB,m,p_skills,classInstancesBeginner);
    let GbayesB = bayes(GfrecuencyB,m,p_tech_teaching,classInstancesBeginner);
    let HbayesB = bayes(HfrecuencyB,m,p_exp_web,classInstancesBeginner);
    
    let beg_prod =  AbayesB * BbayesB * CbayesB *
                    DbayesB * EbayesB * FbayesB *
                    GbayesB * HbayesB;

    //intermediate products
    let AbayesI = bayes(AfrecuencyI,m,p_age,classInstancesIntermediate);
    let BbayesI = bayes(BfrecuencyI,m,p_gender,classInstancesIntermediate);
    let CbayesI = bayes(CfrecuencyI,m,p_exp,classInstancesIntermediate);
    let DbayesI = bayes(DfrecuencyI,m,p_times,classInstancesIntermediate);
    let EbayesI = bayes(EfrecuencyI,m,p_area,classInstancesIntermediate);
    let FbayesI = bayes(FfrecuencyI,m,p_skills,classInstancesIntermediate);
    let GbayesI = bayes(GfrecuencyI,m,p_tech_teaching,classInstancesIntermediate);
    let HbayesI = bayes(HfrecuencyI,m,p_exp_web,classInstancesIntermediate);

    let inter_prod =    AbayesI * BbayesI * CbayesI *
                        DbayesI * EbayesI * FbayesI *
                        GbayesI * HbayesI;

    //advanced products
    let AbayesA = bayes(AfrecuencyA,m,p_age,classInstancesAdvanced);
    let BbayesA = bayes(BfrecuencyA,m,p_gender,classInstancesAdvanced);
    let CbayesA = bayes(CfrecuencyA,m,p_exp,classInstancesAdvanced);
    let DbayesA = bayes(DfrecuencyA,m,p_times,classInstancesAdvanced);
    let EbayesA = bayes(EfrecuencyA,m,p_area,classInstancesAdvanced);
    let FbayesA = bayes(FfrecuencyA,m,p_skills,classInstancesAdvanced);
    let GbayesA = bayes(GfrecuencyA,m,p_tech_teaching,classInstancesAdvanced);
    let HbayesA = bayes(HfrecuencyA,m,p_exp_web,classInstancesAdvanced);

    let adv_prod =  AbayesA * BbayesA * CbayesA *
                    DbayesA * EbayesA * FbayesA *
                    GbayesA * HbayesA;

    
    bayesB = beg_prod*p_beginner;
    bayesI = inter_prod*p_intermediate;
    bayesA = adv_prod*p_advanced;

    return maxBayesBIA(bayesB,bayesI,bayesA)
}


//gets the total distinct count of a specific atribute
function percentageDistinctValues(type,attr){
    let attributesSet = new Set();

    getJSON()[type].map(profesor =>{
        let actualAttr = profesor[attr];
        attributesSet.add(actualAttr);
    });

    return attributesSet.size;
}


//gets the total instances of a specific atribute of a specific value
function getInstances(type,attr,value){
    let count = 0;

    getJSON()[type].map(profesor =>{
        let actualAttr = profesor[attr];
        if(actualAttr === value){
            count++;
        }
    });

    return count;
}

//gets the total instances of a specific atribute of a specific value by class
function getInstancesByClass(type,attr,value,category){
    let count = 0;

    getJSON()[type].map(profesor =>{
        if(profesor["Class"] === category){
            let actualAttr = profesor[attr];
            if(actualAttr === value){
                count++;
            }
        }
    });

    return count;
}


//bayes formulation
function bayes(frecuency,m,p,n){
    return (frecuency + ( m * p ) )/ (n + m);
}

//finds the lowest value of B I A
function maxBayesBIA(B,I,A){
    return (B>I) ? (B>A) ? B:A : (I>A) ? I:A; //find the lowest between the three with ternary operators
}
