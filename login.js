const togglePassword = document.querySelector('#togglePassword');
  const password = document.querySelector('#password_input');

  togglePassword.addEventListener('click', function (e) {
    // toggle the type attribute
    const type = password.getAttribute('type') === 'password' ? 'text' : 'password';
    password.setAttribute('type', type);
    // toggle the eye slash icon
    this.classList.toggle('fa-eye-slash');
});

login_btn = document.getElementById('login-btn');
login_btn.addEventListener('click', function() {
  login();
}, false);


function test() {
  console.log("test")
}


function login() {
  password_input = document.getElementById('password_input');
  pass_word = password_input.value;

  var url = "https://script.google.com/macros/s/AKfycbz7xNNQZC_03Et5YyAMalw4bHBy-fsr_vLNJJMSci-XCLxSBc3tJBpu7MDVD7OpHIdAjA/exec?wachtwoord="+pass_word;
  //var url = "https://script.google.com/macros/s/AKfycbwJqqD9iQExovqOs0-tQHQCjK7e5xzNTSZPtMXvUKe815cxc7OfJqmEBOWQRuUG8YuR/exec";
  fetch(url)
    .then(response => {
  // indicates whether the response is successful (status code 200-299) or not
    if (!response.ok) {
      throw new Error(`Request failed with status ${response.status}`)
      }
      return response.json()
      document.write("error")
    })
    .then(data => {
      console.log(data.data)
      console.log(url)

      window.gegevens = data;
      if (data.data=="ok") {
        window.location.replace("index.html?wachtwoord="+pass_word);
      }
      password_input.value="";

    })
  .catch(error => console.log(error))
}
