
/*function assignment(myName,mylocation,myGender,theMonth,dob,sof){
    const person = {
        "name":myName,
        "location":mylocation,
        "gender":myGender,
        "month":theMonth,
      "date-of-birth":dob,
      "state-of-origin":sof,
     
     
    }
    console.log(person);
}
assignment("dayo","lagos","male","august","2023","kogi");*/



function multiplication(num1, num2){
  const multiplication = num1 * num2;
  return multiplication;
}


function division (num1,num2){
  const division =num1 / num2;
  return division;
}


function substration(num1,num2){
  const substration = num1 - num2;
  return substration;
}
function addition (num1,num2){
  const addition = num1 + num2;
  return addition;
 //console.log(addition);

}

function calculator(num1,num2,num3,num4,num5){
  const dayo = multiplication(num1,num2);
  const dayo2 = division(num3,num4);
  const dayo3 = addition(dayo,dayo2);
  const dayo4 =substration(dayo3,num5);
  console.log(dayo4);
}
calculator(192,4,13,2,466);

// (192*4) + 13/2 - 466







