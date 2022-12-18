const form = document.querySelector(".feedback-form");


form.addEventListener("input", formsymbols);

form.addEventListener("submit", formSubmit);


const SYMBOLS = "feedback-form-state";
const inputObject = {
  email: " ",
  message: " "
}

function formsymbols (elem) {
  
  if (elem.target.name === "email") {
    
    inputObject.email += elem.data
  } else if(elem.target.name === "message") {
    
    inputObject.message += elem.data
  }
   localStorage.setItem(SYMBOLS, JSON.stringify(inputObject));
  
  console.log(inputObject) 
  console.log(form[0].value)
}
const savedInput = JSON.parse(localStorage.getItem(SYMBOLS));
// console.log(savedInput);
// console.log(savedInput.email);


(function(){
  try {
    if (!savedInput.email == " ") {
      form[0].value = savedInput.email
    } 
  } catch (error) {
    console.log("localstorage")
  }

  try {
    if (!savedInput.message == " ") {
      form[1].value = savedInput.message
    } 
  } catch (error) {
    console.log("localstorage")
  } 
     
})();

function formSubmit (e) {
  
  console.log(savedInput)
  localStorage.removeItem(SYMBOLS);
  form.reset()
};



// console.log(input[0].value)



