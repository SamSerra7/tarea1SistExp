/*jshint esversion: 6 */

function Form6(){
    let root = document.getElementById("root");
    while(root.firstChild){
        root.removeChild(root.firstChild);
    }
    let result = document.getElementById("result")
    while(result.firstChild){
        result.removeChild(result.firstChild);
    }
    createForm6(root);
}


function createForm6(root){
    //Page title
    let title = document.createElement("h1");
    title.innerText="Formulario 6";
    title.classList.add("title");
    
    //Subtitle
    let subtitle = document.createElement("h2");
    subtitle.innerText = "Qué tipo de red es...";
    subtitle.classList.add("subtitle");

    // div container
    let container = document.createElement("div");
    container.classList.add("opts-container");
    container.classList.add("row");

    // Option reliability
    let opt_reliability = document.createElement("div");
    let lbl_reliability = document.createElement("h5");
    lbl_reliability.innerText = "Confiabilidad";
    //options
    let opt_sel_reliability = document.createElement("select");
    opt_sel_reliability.id = "reliability";
    let opt_1_reliability = document.createElement("option");
    opt_1_reliability.innerText = "2";
    opt_1_reliability.value = "2"; 
    let opt_2_reliability = document.createElement("option");
    opt_2_reliability.innerText = "3";
    opt_2_reliability.value = "3";
    let opt_3_reliability = document.createElement("option");
    opt_3_reliability.innerText = "4";
    opt_3_reliability.value = "4";
    let opt_4_reliability = document.createElement("option");
    opt_4_reliability.innerText = "5";
    opt_4_reliability.value = "5";
    //append to select
    opt_sel_reliability.appendChild(opt_1_reliability);
    opt_sel_reliability.appendChild(opt_2_reliability);
    opt_sel_reliability.appendChild(opt_3_reliability);
    opt_sel_reliability.appendChild(opt_4_reliability);
    //append to div
    opt_reliability.appendChild(lbl_reliability);
    opt_reliability.appendChild(opt_sel_reliability);
    
    
    // Option links
    let opt_links = document.createElement("div");
    let lbl_links = document.createElement("h5");
    lbl_links.innerText = "Confiabilidad";
    //options
    let opt_sel_links = document.createElement("select");
    opt_sel_links.id = "links";
    let opt_1_links = document.createElement("option");
    opt_1_links.innerText = "7";
    opt_1_links.value = "7"; 
    let opt_2_links = document.createElement("option");
    opt_2_links.innerText = "8";
    opt_2_links.value = "8";
    let opt_3_links = document.createElement("option");
    opt_3_links.innerText = "9";
    opt_3_links.value = "9";
    let opt_4_links = document.createElement("option");
    opt_4_links.innerText = "10";
    opt_4_links.value = "10";
    let opt_5_links = document.createElement("option");
    opt_5_links.innerText = "11";
    opt_5_links.value = "11";
    let opt_6_links = document.createElement("option");
    opt_6_links.innerText = "12";
    opt_6_links.value = "12";
    let opt_7_links = document.createElement("option");
    opt_7_links.innerText = "13";
    opt_7_links.value = "13";
    let opt_8_links = document.createElement("option");
    opt_8_links.innerText = "14";
    opt_8_links.value = "14";
    let opt_9_links = document.createElement("option");
    opt_9_links.innerText = "15";
    opt_9_links.value = "15";
    let opt_10_links = document.createElement("option");
    opt_10_links.innerText = "16";
    opt_10_links.value = "16";
    let opt_11_links = document.createElement("option");
    opt_11_links.innerText = "17";
    opt_11_links.value = "17";
    let opt_12_links = document.createElement("option");
    opt_12_links.innerText = "18";
    opt_12_links.value = "18";
    let opt_13_links = document.createElement("option");
    opt_13_links.innerText = "19";
    opt_13_links.value = "19";
    let opt_14_links = document.createElement("option");
    opt_14_links.innerText = "20";
    opt_14_links.value = "20";
    //append to select
    opt_sel_links.appendChild(opt_1_links);
    opt_sel_links.appendChild(opt_2_links);
    opt_sel_links.appendChild(opt_3_links);
    opt_sel_links.appendChild(opt_4_links);
    opt_sel_links.appendChild(opt_5_links);
    opt_sel_links.appendChild(opt_6_links);
    opt_sel_links.appendChild(opt_7_links);
    opt_sel_links.appendChild(opt_8_links);
    opt_sel_links.appendChild(opt_9_links);
    opt_sel_links.appendChild(opt_10_links);
    opt_sel_links.appendChild(opt_11_links);
    opt_sel_links.appendChild(opt_12_links);
    opt_sel_links.appendChild(opt_13_links);
    opt_sel_links.appendChild(opt_14_links);
    //append to div
    opt_links.appendChild(lbl_links);
    opt_links.appendChild(opt_sel_links);



    // Option Total network capacity
    let opt_capacity = document.createElement("div");
    let lbl_capacity = document.createElement("h5");
    lbl_capacity.innerText = "Capacidad de la red";
    //options
    let opt_sel_capacity = document.createElement("select");
    opt_sel_capacity.id = "capacity";
    let opt_1_capacity = document.createElement("option");
    opt_1_capacity.innerText = "Baja";
    opt_1_capacity.value = "1"; 
    let opt_2_capacity = document.createElement("option");
    opt_2_capacity.innerText = "Media";
    opt_2_capacity.value = "2";
    let opt_3_capacity = document.createElement("option");
    opt_3_capacity.innerText = "Alta";
    opt_3_capacity.value = "3";


    opt_sel_capacity.appendChild(opt_1_capacity);
    opt_sel_capacity.appendChild(opt_2_capacity);
    opt_sel_capacity.appendChild(opt_3_capacity);

    opt_capacity.appendChild(lbl_capacity);
    opt_capacity.appendChild(opt_sel_capacity);


    // Option Cost
    let opt_cost = document.createElement("div");
    let lbl_cost = document.createElement("h5");
    lbl_cost.innerText = "Costo de la red";
    //options
    let opt_sel_cost = document.createElement("select");
    opt_sel_cost.id = "cost";
    let opt_1_cost = document.createElement("option");
    opt_1_cost.innerText = "Bajo";
    opt_1_cost.value = "1"; 
    let opt_2_cost = document.createElement("option");
    opt_2_cost.innerText = "Medio";
    opt_2_cost.value = "2";
    let opt_3_cost = document.createElement("option");
    opt_3_cost.innerText = "Alto";
    opt_3_cost.value = "3";


    opt_sel_cost.appendChild(opt_1_cost);
    opt_sel_cost.appendChild(opt_2_cost);
    opt_sel_cost.appendChild(opt_3_cost);

    opt_cost.appendChild(lbl_cost);
    opt_cost.appendChild(opt_sel_cost);



    //add rows to container
    container.appendChild(opt_reliability);
    container.appendChild(opt_links);
    container.appendChild(opt_capacity);
    container.appendChild(opt_cost);
    
    
    //button to trigger the calculation
    let button = document.createElement("button");
    button.type= "submit";
    button.innerText = "Calcular"
    button.addEventListener("click",() => calculate6(root));
    button.classList.add("btn-calculate");
    

    //adds childs to the root
    root.appendChild(title); //add title to the root
    root.appendChild(subtitle); //add subtitle to the root
    root.appendChild(container); //add options to the root
    root.appendChild(button); //add button to the root
}





//make the euclidean calculation
function calculate6(root){

    let networkType = "";
    let currentDistance;

    let reliability = document.getElementById("reliability").value;
    let links = document.getElementById("links").value;
    let capacity = document.getElementById("capacity").value;
    let cost = document.getElementById("cost").value;

    
    //evaluate all variables against the JSON
    getJSON()["Redes"].map(element => {
        //make the euclidean calc
        let euclidean = Math.sqrt( 
                                    ( ( parseInt(reliability) - parseInt(element["Reliability (R)"]) ) ^ 2 ) + 
                                    ( ( parseInt(links) - parseInt(element["Number of links (L)"]) ) ^ 2 ) + 
                                    //I change the values of High Medium Low for 3, 2, 1 respectively, to increase accuracy (capacity,cost)
                                    ( ( parseInt(capacity) - element["Capacity (Ca)"] == "High" ? 3 : element["Capacity (Ca)"] == "Medium" ? 2 : 1 ) ^ 2 ) + 
                                    ( ( parseInt(cost) - element["Costo (Co)"] == "High" ? 3 : element["Costo (Co)"] == "Medium" ? 2 : 1  ) ^ 2 ) 
                                );
        //basically, ask if is the first time or if the current euclidean calc is closer (lower) to the currentDistance temp variable 
        if(currentDistance === undefined || euclidean < currentDistance){
            currentDistance = euclidean;
            networkType = element["Class"];
        }
    });

    //show the result dinamically in the screen
    let result = document.getElementById("result")
    while(result.firstChild){
        result.removeChild(result.firstChild);
    }
    let finalStr = document.createElement("h1");
    finalStr.innerText = "La clase es de tipo, probablemente: "+ networkType;
    finalStr.style= "margin-top: 3%;";
    result.appendChild(finalStr);
    window.scrollTo(0,document.body.scrollHeight);//scroll to bottom
}
