function closedd(){
    document.getElementById('left').style.display="none";
    document.getElementById('showpop').style.display="block";
    // document.getElementById('closepop').style.display="none";
}
 function showed(){
// document.getElementById('left').style.transition="100ms"
    document.getElementById('left').style.display="block";
document.getElementById('closepop').style.display="block";
document.getElementById('showpop').style.display="none";
 }
 
document.getElementById('showpop').style.display="block"; 
 document.getElementById('left').style.display="none";


//  console.log("I am  a log Message ! .. ");
//  console.info("I am Infomation Message ! .. ");
//  console.warn("I am Warning Message ! ..");
//  console.error("I am Error Message !.. ");

// let student ={
//     sName : "Dinesh Kumar"  ,
//     sAge  : "21" ,
//     sCourse: "Mechanical /  Full Stack Developer"  
// }
// console.table(student)
// let a =10 , b=20;
// // ES5 
// console.log('Sum of '+a+' , '+b+' is :'+(a+b));
// // ES6 
// console.log(`Sum of ${a} , ${b}  is : ${a+b}`);
// let employeeName = 'Dinesh Kumar';
// console.log(`Name : ${employeeName} \ntype of : ${typeof employeeName}`)
// let day = new Date().getDay();

// switch(day){
//     case 0 : console.log("Sunday"); break
//     case 1 : console.log(`today is Monday`); break
// }
// let eNames=["Dinesh","Imran","Tinny","Levin",'rosyy','keny'];
// for(i=0;i<=eNames.length-1;i++){
//     console.log("-----STARTED----");
//     let employee={Ename:eNames[i],EAge:18}
//     console.log(`Employee Name : ${employee.Ename} \nEmployee Age : ${employee.EAge+i} \nEmployee Salary : ${employee.Esalary=35000+i}`);
//     console.log("------END------");
// }