const form = document.querySelector("form");
const btn_recheck=document.querySelector(".recheckBtn")
//1st we have selected form because our submit button is in this form no click event it will be submit event

form.addEventListener("submit", (e) => {
  e.preventDefault(); // default action of form prevented from getting in URL.

  //All variables--
  const height = parseInt(document.querySelector("#height").value); // we get values in string so converted into Integer
  const weight = parseInt(document.querySelector("#weight").value);
  const results = document.querySelector("#results");
  const message = document.querySelector(".message");

  if (height === " " || height < 0 || isNaN(height)) {
    results.innerHTML = `Please give a valid height ! ${height}`;
  } else if (weight === " " || weight < 0 || isNaN(weight)) {
    results.innerHTML = `Please give a valid weight ! ${weight}`;
  } else {
    const fMBI = (weight / ((height * height) / 10000)).toFixed(2); //will give for two decemal places
    //show the result
    results.append(fMBI);
    console.log(fMBI);
    if (fMBI < 18.6) {
      message.append(`Underweight: ${fMBI}`);
    } else if (fMBI >= 18.6 && fMBI <= 24.9) {
      message.append(`Normal Weight: ${fMBI}`);
    } else {
      message.append(`Overweight: ${fMBI}`);
      
    }
  }
  btn_recheck.addEventListener("click", () => {
    console.log("Recheck button clicked");
    document.querySelector("#results").innerHTML = "Your BMI is: ";
    document.querySelector(".message").innerHTML = "Our Message is:";
    document.querySelector("#weight").value = ""; // Reset the weight input field
    document.querySelector("#height").value = ""; // Reset the weight input field
  });  
});



