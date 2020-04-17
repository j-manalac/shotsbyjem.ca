var cities = [
  'Brampton',
  'Calgary',
  'Edmonton',
  'Halifax',
  'Hamilton',
  'Kitchener',
  'London',
  'Markham',
  'Mississauga',
  'Montreal',
  'North York',
  'Ottawa',
  'Quebec City',
  'Toronto',
  'Vancouver',
  'Vaughan',
  'Winnipeg'
];
//datalist for cities - complete
//called when page is loaded
// eslint-disable-next-line no-unused-vars
function citiesDatalist() {
  var list = document.querySelector('#cityList');
  cities.forEach(function (city) {
    var option = document.createElement('option');
    option.value = city;
    list.appendChild(option);
  });
}
//dynamically reveal input box when "Order Problem" is checked
//called via onclick
// eslint-disable-next-line no-unused-vars
function enterOrder() {
  if (document.querySelector('#radio-option3').checked) {
    document.querySelector('#if-problem').style.display = 'block';
  } else {
    document.querySelector('#if-problem').style.display = 'none';
  }
}

window.onload = function () {
  this.citiesDatalist();
};
function validate() {
  if (!checkInputs()) {
    return false;
  }
  else {
    return true;
  }
}
//Target all the elements to check their values
const form = document.getElementById('contact-form');
const fName = document.querySelector('#feedback-first-name');
const lName = document.querySelector('#feedback-last-name');
const email = document.querySelector('#feedback-email');
const address = document.querySelector('#address');
const city = document.querySelector('#city');
const phone = document.querySelector('#phone');
const postal = document.querySelector('#postal-code');
const comments = document.querySelector('#comments');
/*form.addEventListener('submit', e => {
  //don't submit form, check inputs first
  e.preventDefault();
  checkInputs();
});*/

function checkInputs() {
  //trim to account for any whitespace
  const fNameValue = fName.value.trim();
  const lNameValue = lName.value.trim();
  const emailValue = email.value.trim();
  const addressValue = address.value.trim();
  const cityValue = city.value.trim();
  const phoneValue = phone.value.trim();
  const postalValue = postal.value.trim();
  const commentsValue = comments.value;
  var success = true;
  /*const cityValue = city.value.trim(); */

  if (fNameValue === '') {
    //show error
    //add error class
    displayError(fName, 'First name cannot be blank'); //target input to set error
    success = false;
  }
  else {
    //add success class
    setSuccess(fName);
  }
  if (lNameValue === '') {
    //show error
    //add error class
    displayError(lName, 'Last name cannot be blank'); //target input to set error
    success = false;
  }
  else {
    //add success class
    setSuccess(lName);
  }
  if (emailValue === '') {
    //show error
    //add error class
    displayError(email, 'Email cannot be blank'); //target input to set error
    success = false;
  }
  else if (!validEmail(emailValue)) {
    //add success class
    displayError(email, 'Enter a valid email');
    success = false;
  }
  else {
    setSuccess(email);
  }
  if (addressValue === '') {
    displayError(address, 'Address cannot be blank');
    success = false;
  }
  else {
    setSuccess(address);
  }
  if (cityValue === '') {
    displayError(city, 'City cannot be blank');
    success = false;
  }
  else {
    setSuccess(city);
  }
  if (phoneValue === '') {
    displayError(phone, 'Phone number cannot be blank');
    success = false;
  }
  else if (!validPhone(phoneValue)) {
    displayError(phone, 'Enter a valid phone number');
    success = false;
  }
  else {
    setSuccess(phone);
  }
  if (postalValue === '') {
    displayError(postal, 'Postal code cannot be blank');
    success = false;
  }
  else if (!validPostal(postalValue)) {
    displayError(postal, 'Enter a valid postal code');
    success = false;
  }
  else {
    setSuccess(postal);
  }
  if (commentsValue === '') {
    displayError(comments, 'Please enter your comments');
    success = false;
  }
  else {
    setSuccess(comments);
  }
  return success;
}
//Add error to class name to turn on 'error' state
//in error state, input box is red, exclamation point is present, and an error message is displayed
function displayError(input, message) {
  const formGroup = input.parentElement; //target form-group (parent of the input)
  const small = formGroup.querySelector('small');
  //add error message inside small element
  small.innerText = message;
  //add error class
  formGroup.className = 'form-group error';
}
//Add success to class name to turn on 'success' state
//in success state, input box is green and checkmark is present
function setSuccess(input) {
  const formGroup = input.parentElement;
  formGroup.className = 'form-group success';
}

function validEmail(email) {
  return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
}

function validPhone(phone) {
  return /^\d{3}\d{3}\d{4}$/.test(phone);
}

function validPostal(postal) {
  return /^[A-Za-z]\d[A-Za-z]\d[A-Za-z]\d$/.test(postal);
}
