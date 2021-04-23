let num1 = parseInt(prompt('Enter the first number ')) || 0  ;
let num2 = parseInt(prompt('Enter the second number ')) || 0  ;
let num3 = parseInt(prompt('Enter the second number ')) || 0  ;


if (num1 < num2 && num2 < num3 && num1 < num3) {
    alert (num1 + "," +num2+ "," +num3 );
     
} else if (num1 > num2 && num2 < num3 && num1 < num3) {
    alert(num2 + "," +num1+ "," +num3);
}
else if (num1 > num2 && num2 > num3 && num1 > num3) {
    alert( num3 + "," +num2+ "," +num1 );
    
}else if (num1 > num2 && num2 < num3 && num1 > num3) {
    alert( num2 + "," +num3+ "," +num1 );
    
}
else if (num1 > num2 && num2 < num3 && num1 === num3) {
    alert( num2 + "," +num3+ "," +num1 );
    
}else if (num1 > num2 && num2 === num3 && num1 > num3) {
    alert( num1 + "," +num2+ "," +num3 );
    
}else if (num1 === num2 && num2 > num3 && num1 > num3) {
    alert( num3 + "," +num2+ "," +num1 );
    
}else if (num1 < num2 && num2 === num3 && num1 < num3) {
    alert( num1 + "," +num2+ "," +num3 );
    
}else if (num1 === num2 && num2 === num3 && num1 === num3) {
    alert( num1 + "," +num2+ "," +num3 );
    
}else if (num1 < num2 && num2 > num3 && num1 === num3) {
    alert( num1 + "," +num3+ "," +num2 );
    
}else if (num1 < num2 && num2 > num3 && num1 < num3  ) {
    alert(num1 + "," +num3+ "," +num2   );
}
else if (num1 < num2 && num2 > num3 && num1 > num3  ) {
    alert(num3 + "," +num1+ "," +num2 );
}


  
  