let numSubjects;
let marks=[];
let average;
let grade;
function enterSubjects(){
    numSubjects=parseInt(prompt("Please,enter how mahy subjects do you have?"));
    alert("You have "+numSubjects+" subjects.");
    document.getElementById("subjects").style.display="none";//hide the button subjects
    document.getElementById("marks").style.display="inline-block";//shows the button marks
}
function enterMarks(){
    for(i=0;i<numSubjects;i++){
        marks[i]=parseInt(prompt("Please, enter your mark for subject from 0 to 100 "+(i+1)+":"));
        alert("Mark for subject "+(i+1)+": "+marks[i]);
    }
    alert("Your marks are: "+marks.join(", "));//array.join(separator)-method in array to gather all arrays together(","separator)
    document.getElementById("marks").style.display="none";
    document.getElementById("average").style.display="inline-block";
}    
function getAverage(){
    let totalMarks=0;
    for(i=0;i<marks.length;i++){
        totalMarks+=marks[i];//Sum of all marks
    }
    if(numSubjects>0){
    average=parseFloat(totalMarks/numSubjects);//  
    }
    alert("Your average mark is: "+average); 
    document.getElementById("average").style.display="none";
    document.getElementById("grade").style.display="inline-block";
}
function getGrade(){
    if(average>=80 && average<=100){
        grade="A";
    }
    else if(average>= 64 && average<80){
        grade="B";
    }
    else if(average>= 48 && average<64){
        grade="C";
    }
    else if(average>=32 && average<48){
        grade = "D";
    }
    else if(average>=16 && average<32){
        grade = "E";
    }
    else if(average>=0 && average<16){
        grade="F";
    }
    else{
        grade="Out of range";
    }
    alert("Your grade is: "+grade); 
}



       
        
    