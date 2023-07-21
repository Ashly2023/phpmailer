$(document).ready(function () {
    $("#contact_msg").hide();
   $.validator.addMethod(
      "notplaceholder", 
      function(value, element){
        return ($(element).attr("placeholder") != value);
      }, 
         "Please enter a value"
      );
      $("#enquire-form").validate({
      rules:  {
        name:  {
       required    : true,
       notplaceholder  : true
               },
       
       email:  {
       required    : true,
       email: true,
       notplaceholder  : true
       },
       phone: {
         required: true,
         number: true,
      notplaceholder  : true
                  },			
      subject: {
        required: true,
        notplaceholder  : true
                    },
      comments: {
        required: true,
        notplaceholder  : true
                    },
        // message: {
        // required: true,
        // notplaceholder  : true
        //             },
                   },
              messages: {
                name:"Please enter your  Name",

                  email: { 
                  required : "Please enter your Email ",
                  email : "Please enter a valid Email",
                  },
                  phone:"Please enter your phone",
                 subject:"Please enter your subject",
                  comments:"Please enter your comments",

              },
               submitHandler: function(form) { 
           $("#contact_msg").show();
          $.ajax({
             type: "POST",
             url: "contactform.php",
            data:  $(form).serialize(), // serializes the form's elements.
            success: function(data)
             {
                 $("#contact_msg").html(data);
                  $("#enquire-form").trigger("reset");  // show response from the php script.
             }
           });
    }		
   }); 
  });



  