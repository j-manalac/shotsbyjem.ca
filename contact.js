/*function validation() {
  var fName = document.querySelector('#feedback-first-name').value;
  var lName = document.querySelector('#feedback-last-name').value;
  var email = document.querySelector('#feedback-email').value;
  var address = document.querySelector('#address').value;
  var city = document.querySelector('#city').value;
  var phone = document.querySelector('#phone').value;
  var postalCode = document.querySelector('#postal-code').value;
  var checkbox = document.querySelector('#check-phone-yes').value;
  var errorMsg = document.querySelector('#error-message');
  var comments = document.querySelector('#comments');
  var msg;

  //when trigger validation(), dynamically add padding
  //var radio = document.querySelector('#form-check-input');
  errorMsg.style.padding = "10px";

  if (fName.length < 1) {
    msg = "Please enter your first name.";
    errorMsg.innerHTML = msg; 
    return false;
  }
  if (lName.length < 1) {
    msg = "Please enter your last name.";
    errorMsg.innerHTML = msg;
    return false;
  }
  /*
  if (!validateEmail(email)) {
    alert("alert!");
    return false;
  }*/
  /*if (!(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email))) {
    msg = "Please enter a valid email address.";
    errorMsg.innerHTML = msg;
    return false;
  }*/
  /*
  var regexEmail = /\S+@\S+\.\S+/;
  if (email.match(regexEmail)) {
    msg = "Please enter a valid email address.";
    errorMsg.innerHTML = msg;
    return false;
  }
  return false;
}
function validateEmail(email) {
  var re = /\S+@\S+\.\S+/;
  if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)){
    return true;
  }
  else {
    msg = "Please enter a valid email address.";
    errorMsg.innerHTML = msg;
    errorMsg.focus();
    return false;
  }
}
*/
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
  cities.forEach(function(city) {
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
window.onload = function() {
  this.citiesDatalist();
};
