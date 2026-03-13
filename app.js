window.onload = function(){
var submit1=document.getElementById("submit");
submit1.onclick=function() {



var div=document.createElement('div');
div.id="form2";

var subject= document.createElement('input');
subject.name="subject";
subject.type="text";
subject.placeholder="subject Name"


var fullMarks= document.createElement('input');
fullMarks.name= "full marks";
fullMarks.placeholder="fullmarks";
fullMarks.type="number";
fullMarks.value="100";


var obtm= document.createElement('input');
obtm.placeholder="fullmarks";
obtm.type="number";
obtm.className="obtained";

var delbutton=document.createElement("button");
delbutton.style.width="48px";
delbutton.style.height="48px";
delbutton.style.background="red";
delbutton.style.borderRadius="50%"
delbutton.type="button"
delbutton.innerHTML="<i class='fa fa-trash'></i>";



div.append(subject);
div.append(fullMarks);
div.append(obtm);
div.append(delbutton);

//create tr table tr
var subjectTr=document.createElement("tr");
subjectTr.style.textAlign="center";

var subjectTd=document.createElement("td");
 subjectTd.setAttribute("colspan", "3");
 
 var fullmarkstd=document.createElement("td");
 fullmarkstd.innerHTML="100";

 var obtainedmarks=document.createElement("td");
 obtainedmarks.setAttribute("colspan", "2");
  
 subjectTr.append(subjectTd);
 subjectTr.append(fullmarkstd);
 subjectTr.append(obtainedmarks);
 

var subjectbody=document.getElementById("subject-body");
subjectbody.append(subjectTr);




var dynamic=document.getElementById("dynamic-area");
dynamic.append(div);

//deleting button
delbutton.onclick=function(){
      div.remove();
    subjectTr.remove();
}


// live previw text 
subject.oninput=function(){
   subjectTd.innerHTML=this.value;
}
fullMarks.oninput=function(){
 fullmarkstd.innerHTML=this.value;
}
obtm.oninput=function(){
   obtainedmarks.innerHTML=this.value;





 //calculate
 var totalno =0;
var obm=document.getElementsByClassName("obtained");
for(var i=0; i<obm.length; i++){
   var plus = Number(obm[i].value)

   console.log(plus)
    totalno=totalno+plus;


}
var putInform=document.getElementById("marks");
putInform.innerHTML=totalno;


var subjectsno = obm.length;
    var percentage= parseInt(totalno/subjectsno);
   
var per=document.getElementById("percent");
per.innerHTML=percentage+ '%';


//calculate grade
var grade ="";
if(percentage > 90){
   grade="A+";
}
else if (percentage > 80){
grade="A";
}
else if(percentage > 70){
   grade="b+";
}
else if(percentage > 60){
   grade="c+";
}

else if(percentage > 50){
   grade="c";
}
else if(percentage > 40){
   grade="E";
}
else{
   grade="F";
}

var addgrades=document.getElementById("grade-marks");
addgrades.innerHTML=grade;
}

}
//pdf













//second session

//adding image profile in preview
var student=document.getElementById("student-pic");
 student.onchange=function(){
    var file=this.files[0];
   var url= URL.createObjectURL(file);
   alert(url);
    var preview=document.getElementById("stu-pic");
preview.src=url;
 }


 // obtained marks calculation


 //adding school 
 var schoolimg=document.getElementById("school-pic");
 schoolimg.onchange=function(){

       var file=  this.files[0];
       var url= URL.createObjectURL(file);
       var addingschool=document.getElementById("sch-pic");
     addingschool.src=url;
 }


 var schoolname=document.getElementById("school-name-input");
 schoolname.oninput = function(){
    var schl= document.getElementById("school-name");
    schl.innerHTML=this.value;
    
 }


 var tagname=document.getElementById("tag");
 tagname.oninput = function(){
    var tag= document.getElementById("tag-line");
    tag.innerHTML=this.value;
    
 }
 var addingname=document.getElementById("name");
 addingname.oninput = function(){
    var name= document.getElementById("adding-name");
    name.innerHTML=this.value;
    
 }


 var fathername=document.getElementById("father-name");
 fathername.oninput = function(){
    var father= document.getElementById("adding-f");
    father.innerHTML=this.value;
    
 }

 var dob=document.getElementById("date");
 dob.onchange=function(){
   var date=document.getElementById("dob");
   date.innerHTML = this.value;
 }

 var gender=document.getElementById("choose-gender");
 gender.onchange=function(){
   var change=document.getElementById("gendername");
   change.innerHTML = this.value;
 }



var classname =document.getElementById("class");
classname.oninput = function(){
var classn=document.getElementById("classname");
classn.innerHTML=this.value;
}



var rollname =document.getElementById("roll");
rollname.oninput = function(){
var rolln=document.getElementById("rollname");
rolln.innerHTML=this.value;
}




}
