const btn = document.getElementById('calculate');
 
btn.addEventListener('click', function(){
    let weight = document.querySelector('#weight').value;
    let height = document.querySelector('#height').value;
 
    if(weight == '' || height == '' )
    {
        alert ('Enter your correct Height and Weight');
        return;
    }
 
    height = height / 100 
 
    let bmi = (weight / (height * height));
    bmi = bmi.toFixed(2);
     
    document.querySelector('#result').innerHTML = bmi;
 
    let status = '';
 
    if(bmi < 18.5){
        status = "are Underweight 🥲";
    }
    if(bmi >= 18.5 && bmi < 25){
        status = "have a Normal Weight 😁";
    }
    if(bmi > 25 && bmi < 30){
        status = "are Overweight 😟";
    }
    if(bmi >= 30){
        status = "are Obese 😥";
    }
 
    document.querySelector('.comment').innerHTML = `Comment : You <span>${status}</span>`;
})

window.addEventListener("load", () => {
    const loader = document.querySelector(".loader");
    loader. classList.add("loader-hidden");
    loader.addEventListener("transitionend", () => {
        document.body.removeChild(".loader");
    })
})