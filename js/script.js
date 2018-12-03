//Focus on the name box here
document.getElementById("name").focus();

//Name necessary const variables
const $jobRole = $("#title");
const $design = $("#design");
const $activities = $(".activities");
const $payment = $("#payment");
const $creditcard = $("#credit-card");
const $paypal = $("p:eq(0)");
const $bitcoin = $("p:eq(1)");
const nameInput = document.getElementById("name");
const emailInput = document.getElementById("mail");
const $firstVal = "Please select a T-shirt theme";
const creditCardInput = document.getElementById("cc-num");
const zipInput = document.getElementById("zip");
const cvvInput = document.getElementById("cvv");
const btn = document.getElementsByTagName("BUTTON")[0];
const $selectPayment = $('#payment option[value="select_method"]');
const mainConf = 200;
const workShop = 100;
let newAmount = 0;

//Create a paragraph tag to display the cost of the activities
$(
  '<p id="activitiesCost">Total cost for your Activities: ' + newAmount + "</p>"
).insertAfter($(".activities"));

//Hide the Other input field
$("#other-title").hide();
$("#label-other").hide();

//Hide colors from the Color selection until design theme is selected
$('#color option[value="tomato"]').hide();
$('#color option[value="steelblue"]').hide();
$('#color option[value="dimgrey"]').hide();
$('#color option[value="cornflowerblue"]').hide();
$('#color option[value="darkslategrey"]').hide();
$('#color option[value="gold"]').hide();

//Make the first value of the Color selection have a different message until the user selects a theme
$("#color > option:first").text($firstVal);

//Add a paragrapch tag to hold the email error message; hide it for now until user interaction
$(
  '<p id="emailError" class="errorMsg">Email is format is incorrect</p>'
).insertAfter(emailInput);
$("#emailError").hide();

//Create a let variable for a counter that will keep track of if a checkbox is checked or not in Activities section
let checkboxCounter = 0;

//Remove the "Select payment type" text from the selection menu
$selectPayment.remove();

//Hide paypal and bitcoin paragraphs
$paypal.css("display", "none");
$bitcoin.css("display", "none");

//Show job role input when 'Other' selected; hide when anything else is selected
$jobRole.on("change", function() {
  //console.log(e.target);
  const $value = $(this).val();

  if ($value === "other") {
    //$('#color > option:first').text($punsVal);
    $("#other-title").show();
    $("#label-other").show();
  } else {
    $("#other-title").hide();
    $("#label-other").hide();
  }
});

//When user selects a Design theme, update the color selection menu with only those associated colors
$design.on("change", function() {
  //console.log(e.target);
  const $value = $(this).val();
  const $heartVal = $('#color option[value="tomato"]').text();
  const $punsVal = "Cornflower Blue (JS Puns shirt only";

  if ($value === "js puns") {
    $("#color > option:first").text($punsVal);
    $('#color option[value="cornflowerblue"]').show();
    $('#color option[value="darkslategrey"]').show();
    $('#color option[value="gold"]').show();
    $('#color option[value="tomato"]').hide();
    $('#color option[value="steelblue"]').hide();
    $('#color option[value="dimgrey"]').hide();
  } else if ($value === "heart js") {
    $("#color > option:first").text($heartVal);
    $('#color option[value="cornflowerblue"]').hide();
    $('#color option[value="darkslategrey"]').hide();
    $('#color option[value="gold"]').hide();
    $('#color option[value="tomato"]').show();
    $('#color option[value="steelblue"]').show();
    $('#color option[value="dimgrey"]').show();
  } else {
    $("#color > option:first").text($firstVal);
    $('#color option[value="tomato"]').hide();
    $('#color option[value="steelblue"]').hide();
    $('#color option[value="dimgrey"]').hide();
    $('#color option[value="cornflowerblue"]').hide();
    $('#color option[value="darkslategrey"]').hide();
    $('#color option[value="gold"]').hide();
  }
});

//Check which ones are checkmarked in the Activities section and gray out the checkbox options that have conflicting days/times. Also update the total activities cost, with the new amount, as you check and uncheck items
$activities.on("change", function(e) {
  $selectPayment.remove();
  if ($(e.target).attr("name") === "js-frameworks") {
    if ($(e.target).is(":checked")) {
      $('input[name="express"]').prop("disabled", true);
      $('input[name="express"]')
        .parent()
        .css("color", "gray");
      $('input[name="express"]')
        .parent()
        .css("text-decoration", "line-through");
      checkboxCounter++;
      console.log("counter gets one" + checkboxCounter);
    } else {
      $('input[name="express"]').prop("disabled", false);
      $('input[name="express"]')
        .parent()
        .css("color", "black");
      $('input[name="express"]')
        .parent()
        .css("text-decoration", "none");
      checkboxCounter--;
      console.log("counter loses one" + checkboxCounter);
    }
  } else if ($(e.target).attr("name") === "js-libs") {
    if ($(e.target).is(":checked")) {
      $('input[name="node"]').prop("disabled", true);
      $('input[name="node"]')
        .parent()
        .css("color", "gray");
      $('input[name="node"]')
        .parent()
        .css("text-decoration", "line-through");
      checkboxCounter++;
    } else {
      $('input[name="node"]').prop("disabled", false);
      $('input[name="node"]')
        .parent()
        .css("color", "black");
      $('input[name="node"]')
        .parent()
        .css("text-decoration", "none");
      checkboxCounter--;
    }
  } else if ($(e.target).attr("name") === "express") {
    if ($(e.target).is(":checked")) {
      $('input[name="js-frameworks"]').prop("disabled", true);
      $('input[name="js-frameworks"]')
        .parent()
        .css("color", "gray");
      $('input[name="js-frameworks"]')
        .parent()
        .css("text-decoration", "line-through");
      checkboxCounter++;
    } else {
      $('input[name="js-frameworks"]').prop("disabled", false);
      $('input[name="js-frameworks"]')
        .parent()
        .css("color", "black");
      $('input[name="js-frameworks"]')
        .parent()
        .css("text-decoration", "none");
      checkboxCounter--;
    }
  } else if ($(e.target).attr("name") === "node") {
    if ($(e.target).is(":checked")) {
      $('input[name="js-libs"]').prop("disabled", true);
      $('input[name="js-libs"]')
        .parent()
        .css("color", "gray");
      $('input[name="js-libs"]')
        .parent()
        .css("text-decoration", "line-through");
      checkboxCounter++;
    } else {
      $('input[name="js-libs"]').prop("disabled", false);
      $('input[name="js-libs"]')
        .parent()
        .css("color", "black");
      $('input[name="js-libs"]')
        .parent()
        .css("text-decoration", "none");
      checkboxCounter--;
    }
  } else if (
    $(e.target).attr("name") === "all" ||
    $(e.target).attr("name") === "express" ||
    $(e.target).attr("name") === "node" ||
    $(e.target).attr("name") === "build-tools" ||
    $(e.target).attr("name") === "npm"
  ) {
    if ($(e.target).is(":checked")) {
      checkboxCounter++;
    } else {
      checkboxCounter--;
    }
  }
  if ($(e.target).attr("name") === "all") {
    if ($(e.target).is(":checked")) {
      newAmount += 200;
      $("#activitiesCost").html(
        '<p id="activitiesCost">Total cost for your Activities: ' +
          newAmount +
          "</p>"
      );
    } else {
      newAmount -= 200;
      $("#activitiesCost").html(
        '<p id="activitiesCost">Total cost for your Activities: ' +
          newAmount +
          "</p>"
      );
    }
  } else if ($(e.target).attr("name") !== "all") {
    if ($(e.target).is(":checked")) {
      newAmount += 100;
      $("#activitiesCost").html(
        '<p id="activitiesCost">Total cost for your Activities: ' +
          newAmount +
          "</p>"
      );
    } else {
      newAmount -= 100;
      $("#activitiesCost").html(
        '<p id="activitiesCost">Total cost for your Activities: ' +
          newAmount +
          "</p>"
      );
    }
  }
});

//Show or hide which payment types based on what is selected
$payment.on("change", function() {
  const $value = $(this).val();

  if ($value === "paypal") {
    $paypal.css("display", "block");
    $creditcard.css("display", "none");
    $bitcoin.css("display", "none");
  } else if ($value === "bitcoin") {
    $bitcoin.css("display", "block");
    $creditcard.css("display", "none");
    $paypal.css("display", "none");
  } else if ($value === "credit card") {
    $creditcard.css("display", "block");
    $paypal.css("display", "none");
    $bitcoin.css("display", "none");
  }
});

//REGEX used below to check to make sure the content the user inputs is correct for that input box. I relied heavily on our video lessons on REGEX to help me with these as well as this page https://www.rexegg.com/regex-quickstart.html:

//Check to make sure the CVV box is a 3 digit number only
function isValidCvv(text) {
  return /^[0-9]{3}?$/.test(text);
}
//Check that the zip code is a 5 digit number only
function isValidZip(text) {
  return /^[0-9]{5}?$/.test(text);
}

// Valid CC; must be between 13-16 digits. This page helped me figure this one out: https://www.regular-expressions.info/creditcard.html
function isValidCreditCard(text) {
  //Got help from this site (https://www.regular-expressions.info/creditcard.html) but I understand that it means must be either 13 digits OR 13 digits plus 3 more digits:
  return /^[0-9]{13}(?:[0-9]{3})?$/.test(text);
}

// Valid Email
function isValidEmail(email) {
  return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
    email
  );
}

// Valid name: Can only contain letters a-z in lowercase
/*function isValidName(name) {
  //starts ^ and ends $ with a lower case letter
  return /^[a-z]+$/.test(name);
}*/

function showOrHideTip(show, element) {
  // show element when show is true, hide when false
  if (show) {
    element.style.border = "2px solid red";
    $("#emailError").text("Email is format is incorrect");
    $("#emailError").show();
  } else {
    element.style.border = "1px solid #c1deeb";
    $("#emailError").hide();
  }
}

function createListener(validator) {
  return e => {
    const text = e.target.value;
    const valid = validator(text);
    const showTip = text !== "" && !valid;
    const tooltip = e.target;
    showOrHideTip(showTip, tooltip);
  };
}

//Set up the event listeners for running regex testing for each input box that is interacted with
//nameInput.addEventListener("input", createListener(isValidName));

emailInput.addEventListener("input", createListener(isValidEmail));

creditCardInput.addEventListener("input", createListener(isValidCreditCard));

zipInput.addEventListener("input", createListener(isValidZip));

cvvInput.addEventListener("input", createListener(isValidCvv));

//Do not allow the form to submit (e.preventDefault()) when certain conditions are true:
btn.addEventListener("click", e => {
  //check for red border on any form elements will not allow form to submit
  if (
    nameInput.style.border === "2px solid red" ||
    nameInput.value === "" ||
    emailInput.value === ""
  ) {
    if (nameInput.value === "") {
      nameInput.style.border = "2px solid red";
    }
    if (emailInput.value === "") {
      emailInput.style.border = "2px solid red";
      $("#emailError").text("Email cannot be blank");
      $("#emailError").show();
    }
    if (creditCardInput.value === "") {
      creditCardInput.style.border = "2px solid red";
    }
    if (zipInput.value === "") {
      zipInput.style.border = "2px solid red";
    }
    if (cvvInput.value === "") {
      cvvInput.style.border = "2px solid red";
    }
    e.preventDefault();
  } else if (
    emailInput.style.border === "2px solid red" ||
    emailInput.value === ""
  ) {
    emailInput.style.border = "2px solid red";
    //if checkboxCounter is 0 or less, form cannot submit
  } else if (checkboxCounter <= 0) {
    e.preventDefault();
    console.log("form did not submit");
    //Check all credit card boxes, only if creditcard is chosen as a payment method
  } else if (
    ($("#payment").val() === "credit card" &&
      (creditCardInput.value === "" ||
        zipInput.value === "" ||
        cvvInput.value === "")) ||
    (creditCardInput.style.border === "2px solid red" ||
      zipInput.style.border === "2px solid red" ||
      cvvInput.style.border === "2px solid red")
  ) {
    if (creditCardInput.value === "") {
      creditCardInput.style.border = "2px solid red";
    }
    if (zipInput.value === "") {
      zipInput.style.border = "2px solid red";
    }
    if (cvvInput.value === "") {
      cvvInput.style.border = "2px solid red";
    }
    e.preventDefault();
  } else {
    //Success!
    console.log("The form can successfully submit now!");
  }
});
