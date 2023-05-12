
$("#log").click(function() {
    var email = $(".login[type='text']").val();
    var password = $(".login[type='password']").val();
  
   
    if (email && password) {
      
      localStorage.setItem("email", email);
      localStorage.setItem("password", password);
        window.location.href = "/R-B-games.html"; 
    } else {
      alert("Please enter your email and password.");
    }
  });
  
  
  var email = localStorage.getItem("email");
  var password = localStorage.getItem("password");
  
  if (email && password) {
    
    $(".login[type='text']").val(email);
    $(".login[type='password']").val(password);
  }
  console.log( localStorage.getItem("email"));