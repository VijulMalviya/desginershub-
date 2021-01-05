$(document).ready(function() {
    $("#form").validate({
      rules: {
        name : {
          required: true,
          minlength: 3
        },
        phone: {
          required: true,
          number: true,
          min: 10
        },
        email: {
          required: true,
          email: true
        },
        msg: {
            required: true,
            min:5
          }
        },
        
      messages : {
        name: {
          required :" Name Required",  
          minlength: "Name should be at least 3 characters"
        },
        phone: {
          required: "Please enter your valid Phone Number",
          number: "Please enter your  Phone Number as a numerical value",
          min: "10 Digit Phone Number"
        },
        email: {
          required: "Please enter your valid Email Address",
          email: "The email should be in the format: abc@domain.com"
        },
        msg: {
            required: "Please write a message",
            min: "Please write a valid message"
          },
        
      }
    });
  });