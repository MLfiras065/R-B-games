
$("#siginup").click(function() {
    var username = $(".sign[type='text']:eq(0)").val();
    var email = $(".sign[type='text']:eq(1)").val();
    var password = $(".sign[type='password']").val();
    if (username && email && password) {
      var user = {
        "username": username,
        "email": email,
        "password": password
      };
      localStorage.setItem("user", JSON.stringify(user));
      window.location.href = "/login and siginup/login.html";
    } else {
      alert("Please enter your username, email, and password.");
    }
  });
  
  var user = localStorage.getItem("user");
  
  if (user) {
    user = JSON.parse(user);
    $(".sign[type='text']:eq(0)").val(user.username);
    $(".sign[type='text']:eq(1)").val(user.email);
    $(".sign[type='password']").val(user.password);
  }
  console.log( localStorage.getItem(user));