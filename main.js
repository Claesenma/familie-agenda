const queryString = window.location.search;
console.log(queryString);

const urlParams = new URLSearchParams(queryString);
var wachtwoord = urlParams.get('wachtwoord')
if (wachtwoord == null) {
  window.location.replace("login.html");
}


function login() {
  var url = "https://script.google.com/macros/s/AKfycbz7xNNQZC_03Et5YyAMalw4bHBy-fsr_vLNJJMSci-XCLxSBc3tJBpu7MDVD7OpHIdAjA/exec?wachtwoord="+window.wachtwoord;
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
      if (data.data=="wrong") {
        window.location.replace("login.html");
      }

    })
  .catch(error => console.log(error))
}

login();


var months = ["Januari", "Februari", "Maart", "April", "Mei", "Juni", "Juli", "Augustus", "September", "Oktober", "November", "December"]


function delay(time) {
  return new Promise(resolve => setTimeout(resolve, time));
}

function search() {
  var p = window.wachtwoord.toUpperCase();
  var url = "https://script.google.com/macros/s/AKfycbw"+p[3]+"E0ExHs-s2aB8lmXEdNj"+p[4].toLowerCase()+"8e-lyDNDpT"+p[0]+"ScMAzm"+p[1]+"5JBo1RoPbGBonwRs9nRcARgG"+p[2].toLowerCase()+"GPQ/exec";
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
      window.gegevens = data;

      //show_data(data, eenheid)
    })
  .catch(error => console.log(error))
}

async function display_calendar(year) {
  weekdays = ["Ma", "Di", "Wo", "Do","Vr", "Za", "Zo"]
  document.body.innerHTML = "";

  var heading = document.createElement("h1");
  heading.innerHTML = "Onze Familie-agenda";
  document.body.appendChild(heading);

  var year_input = document.createElement("input");
  year_input.setAttribute("type", "number");
  year_input.id = "jaar_input";
  year_input.value = year;
  year_input.placeholder = "Type een jaar...";
  document.body.appendChild(year_input);

  var year_btn = document.createElement("a");
  year_btn.setAttribute("id", "btn2");
  year_btn.classList.toggle("btn");
  //year_btn.onclick = "search_year()";
  year_btn.addEventListener('click', function() {
      search_year();
  }, false);
  document.body.appendChild(year_btn);


  var today = new Date();
  var year_text = document.createElement("h2");
  year_text.innerHTML = year;
  document.body.appendChild(year_text);
  var date = new Date(year + "-01-01");

  for (i = 0; i < 12; i++) {
    var title = document.createElement("h2");
    title.innerHTML = months[i];
    document.body.appendChild(title);
    var div = document.createElement('div');
    div.classList.toggle('month');

    if (date.getFullYear()==today.getFullYear()) {
      if (date.getMonth()==today.getMonth()) {
        title.id = "today"
      }
    }



    for (l = 0; l < 7; l++) {
      var weekday_btn = document.createElement("a");
      weekday_btn.innerHTML = weekdays[l];
      weekday_btn.classList.toggle('btn');
      weekday_btn.classList.toggle('weekday-btn');
      div.appendChild(weekday_btn);
    }

    var space = document.createElement("br");
    div.appendChild(space);

    hidden_btn_num = [6, 0, 1, 2, 3, 4, 5]
    for (k = 0; k < hidden_btn_num[date.getDay()]; k++) {
      var hidden_btn = document.createElement("a");
      hidden_btn.style.visibility = "hidden";
      hidden_btn.classList.toggle('btn');
      div.appendChild(hidden_btn);
    }

    for (j = 0; j < 31; j++) {
      if (date.getMonth()==i) {
        var btn = document.createElement("a");
        btn.innerHTML = date.getDate();
        btn.href = "details.html?wachtwoord="+window.wachtwoord+"&date="+ date.getDate()+"/"+(date.getMonth()+1)+"/"+date.getFullYear()
        document.body.appendChild(btn);
        btn.classList.toggle('btn');
        btn.classList.toggle('normal-btn');
        div.appendChild(btn);

        if (date.getFullYear()==today.getFullYear()) {
          if (date.getMonth()==today.getMonth()) {
            if (date.getDate()==today.getDate()) {
              btn.classList.toggle('normal-btn');
              btn.classList.toggle('today-btn');
            }
          }
        }

        if (window.gegevens != null) {
          var date_in_format = date.getDate()+"/"+(date.getMonth()+1)+"/"+date.getFullYear();//date.getFullYear()+"-"+String(date.getMonth()).padStart(2, '0')+"-"+String(date.getDate()).padStart(2, '0')+"T23:00:00.000Z"
          if ((date_in_format in window.gegevens.data)==true) {
            //console.log(window.gegevens.data[date_in_format].Activiteiten.length);
            if (window.gegevens.data[date_in_format].Activiteiten.length > 0) {
              if (!btn.classList.contains('today-btn')) {
                btn.classList.toggle('normal-btn');
                btn.classList.toggle('activity-btn');
              }
              btn.innerHTML = date.getDate()+"*";
            }
          }
        }

        var date = new Date(date)
        date.setDate(date.getDate() + 1)

        if (date.getDay()==1) {
          if (date.getMonth()==i) {
            var enter = document.createElement("br");
            div.appendChild(enter);
          }
        }
      }
    }

    document.body.appendChild(div);
  }

  var bottom_div = document.createElement('div');
  bottom_div.classList.toggle("bottom-div");
  var zin = document.createElement("p");
  zin.innerHTML = "© 2022 Mateo Claesen.";
  zin.classList.toggle("title1-1");
  bottom_div.appendChild(zin);
  document.body.appendChild(bottom_div);

  if (year==today.getFullYear()) {
    await delay(1000);
    //location.href = "#today";
    document.querySelector('#today').scrollIntoView({
      behavior: 'smooth'
    });
  }
}

async function show1() {
  var today = new Date();
  current_year = today.getFullYear();

  search();

  var loading = true;
  while (loading==true) {
    await delay(1);
    if (window.gegevens!=undefined) {
      console.log("data found!");
      display_calendar(current_year);
      loading = false;
    }
  }
  //search();
  //await delay(3000);
  //display_calendar(current_year);
}
async function show2(year) {
  search();
  //await delay(3000);
  display_calendar(year);
}

function search_year() {
  letters = ["a", "b", "c", "d","e","f","g", "h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]
  var input = document.getElementById("jaar_input");
  console.log(input.value)

  if (input.value=="") {
    alert("Je hebt geen jaar ingevuld!");
  }
  var error = false
  for (i= 0; i<input.value.length; i++) {
    if ((input.value[i] in letters)==false) {
      error = true;
    }
  }
  if (error==true) {
    alert("Je hebt een ongeldig jaartal ingevuld!");
  }

  if (error==false) {
    if (!input.value=="") {
      show2(input.value);
    }
  }

}

show1();
