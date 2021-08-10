
const courseName=document.querySelector("#course-name");
const creditHour=document.querySelector("#credithour");
const grades=document.querySelector("#grade");
const add=document.querySelector("#add");
const table=document.querySelector("#table");
const calculateGpa=document.querySelector("#calc-gpa");
const clear=document.querySelector("#clear");


let gpaArray = [];

add.addEventListener("click",addButtonPressed);

var finalGpa=calculateGpa.addEventListener("click",calculateMyGPA);








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
    alert("Your Final GPA is "+soFinalGpa);
    return soFinalGpa;
   

   
}












































function addButtonPressed()
{

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




