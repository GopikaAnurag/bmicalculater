function calculate(){
    let weight = document.getElementById('weight').value
    let height = document.getElementById('height').value

    if (height === "" || weight ===""){
        console.log("Please enter both height and weight");
        return
    }

    let bmi = (weight/ (height / 100) ** 2);
    let result = "Your result is :" + bmi;

    let catogory ="";


    if (bmi <18.5){
        catogory = " Underweight";
    }else if (bmi >= 18.5 && bmi < 25){
        catogory = " Normal weight";
    }else if (bmi >=25 && bmi <30) {
        catogory = "Overweight";
    }else{
        catogory =" Obese";
    }
    
   result += "<br> category: " + catogory;

    document.getElementById("result").innerHTML = result;
}