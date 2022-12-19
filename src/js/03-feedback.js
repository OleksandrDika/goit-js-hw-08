import throttle from "lodash.throttle";
const form = document.querySelector(".feedback-form");
form.addEventListener("input", throttle(onInput, 300));
form.addEventListener("submit", formSubmit);


const SYMBOLS = "feedback-form-state";

const userData = JSON.parse(localStorage.getItem(SYMBOLS));

if (userData) {
  form.email.value = userData.email || "";
  form.message.value = userData.message || "";
}

function onInput (event) {
  const{name, value} = event.target;
  const userData = JSON.parse(localStorage.getItem(SYMBOLS)) || {};
  userData[name] = value;
  localStorage.setItem(SYMBOLS, JSON.stringify(userData))
  
}

function formSubmit (e) {
  e.preventDefault();
  const{email:{value: email}, message:{value:message}} = e.target.elements;
  console.log({email, message})
  localStorage.removeItem(SYMBOLS);
  form.reset()
};



// console.log(input[0].value)



