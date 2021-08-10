
const courseName=document.querySelector("#course-name");
const creditHour=document.querySelector("#credithour");
const grades=document.querySelector("#grade");
const add=document.querySelector("#add");
const table=document.querySelector("#table");
const calculateGpa=document.querySelector("#calc-gpa");
const clear=document.querySelector("#clear");


let gpaArray = [];

add.addEventListener("click",addButtonPressed);

calculateGpa.addEventListener("click",calculateMyGPA);

clear.addEventListener("click",clearAll);




function addButtonPressed()
{

    if (tfoot.querySelector("tr") !== null) {
        tfoot.querySelector("tr").remove();
    }

    if(courseName.value==="" || creditHour.value<=0 || creditHour.value>4)
    {
        alert("wrong input, please provide valid name for course and  value greater than 1 or less than 5 for credit hour");
    }

    else 
    {

        const tr=document.createElement("tr");
        const tdForCourseName=document.createElement("td");
        const tdForCreaditHours=document.createElement("td");
        const tdForGrades=document.createElement("td");

        tdForCourseName.innerHTML=courseName.value;
        tdForCreaditHours.innerHTML=creditHour.value;
        tdForGrades.innerHTML=grades.options[grades.selectedIndex].value;

        tr.appendChild(tdForCourseName);
        tr.appendChild(tdForCreaditHours);
        tr.appendChild(tdForGrades);

        tbody.appendChild(tr);

        table.classList.remove("display-none");
        calculateGpa.classList.remove("display-none");
        clear.classList.remove("display-none");


        gpaArray.push(
            {
                creaditHours: creditHour.value,
                grades: grades.options[grades.selectedIndex].value,

            });

        console.log(gpaArray);

        courseName.value="";
        creditHour.value="";
        grade.selectedIndex = "0";

    }
}


function calculateMyGPA()
{


    var totalCreaditHours=0;
    var totalgrades=0;
    
    var allvalues=[];
    var first;
    var second;
    var third;



    for(var i=0; i<gpaArray.length;i++)
    {

        totalCreaditHours+=Number(gpaArray[i].creaditHours);
        first=Number(gpaArray[i].creaditHours);
        second=Number(gpaArray[i].grades);
        third=first*second;
        totalgrades+=third;
    }

    var soFinalGpa=totalgrades/totalCreaditHours;
    soFinalGpa=soFinalGpa.toFixed(3);

    const tr=document.createElement("tr");
    const td=document.createElement("td");

    if (tfoot.querySelector("tr") !== null) {
        tfoot.querySelector("tr").remove();
    }

    if(soFinalGpa>3.5)
    {
       
        td.innerHTML="Your GPA is "+soFinalGpa+"  Great! Kepp it up💪";
    }
    else if(soFinalGpa<2)
    {
       
        td.innerHTML="Your GPA is "+soFinalGpa+"     Work Hard! :(";
    }
    else{
        
        td.innerHTML="Your GPA is "+soFinalGpa;
    }

    td.setAttribute("colspan", "3");
    td.setAttribute("class", "democlass");

    tr.appendChild(td);
    tfoot.appendChild(tr);   
}


function clearAll()
{
    gpaArray = [];
  
    tbody.querySelectorAll("*").forEach((child) => child.remove());
    if (tfoot.querySelector("tr") !== null) {
      tfoot.querySelector("tr").remove();
    }
  
    table.classList.add("display-none");
    calculateGpa.classList.add("display-none");
    clear.classList.add("display-none");

}

