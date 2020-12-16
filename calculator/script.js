function clc(){

const num1 =  Number(prompt("first number"));
const num2 =  Number(prompt("second number"));




document.getElementById('add').innerHTML=`Here is the sum. of  ${num1}+${num2} = ${num1+num2}`;
document.getElementById('subtract').innerHTML=`Here is the sub. of  ${num1}-${num2} = ${num1-num2}`;
document.getElementById('multiply').innerHTML=`Here is the Mlt. of ${num1}x${num2} = ${num1*num2}`;
document.getElementById('divide').innerHTML=  `Here is the div. of  ${num1}/${num2} = ${num1/num2}`;

}




