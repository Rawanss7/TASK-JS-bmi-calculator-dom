function calculateBMI() {
  // Don't edit the code
  let age = document.getElementById("age").value;
  let weight = document.getElementById("weight").value;
  let height = document.getElementById("height").value;
  let male = document.getElementById("m").checked;
  let female = document.getElementById("f").checked;
  console.table({ age, weight, height, male, female });

  // You are going to write the code here before the curly braces 👇🏻
  const heightinM = height / 100;
  const BMI = weight / (heightinM**2);

  alert(BMI)

  ////Challenge2

 /* if (BMI < 18.5) {
    alert("underweight")
  }
  else if (( BMI >= 18.5) && (BMI <= 24.9)) {
    alert("healthy weight");
  }
  else if (( BMI >= 25 ) && (BMI <= 29.9)){
    alert("overweight");
  }
  else 
    alert("Above Obesity");
    */

///Challenge3

if (age >=19 && age <=24 && BMI >= 19 && BMI <=24){
      alert("Normal for the age range 19-24")

}else if (age >= 25 && age <=34 && BMI >=20 && BMI <=25){
      alert("Normal for the age range 19-24") 
}else if (age >= 35 && age <=44 && BMI >=21 && BMI <=26){
      alert("tNormal for the age range 21-26")
}else if (age >= 45 && age <=54 && BMI >=22 && BMI <=27){
      alert("Normal for the age range 22-27")
    }else if (age >= 55 && age <=64 && BMI >=23 && BMI <=28){
      alert("Normal for the age range 23-28")
    }else{
      alert("Normal for the age range 24-29");
    }
  }
