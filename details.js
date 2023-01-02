const queryString = window.location.search;
console.log(queryString);

const urlParams = new URLSearchParams(queryString);
var wachtwoord = urlParams.get('wachtwoord')
if (wachtwoord == null) {
  window.location.replace("login.html");
}
var date = urlParams.get('date')
if (date == null) {
  window.location.replace("index.html");
}

function delay(time) {
  return new Promise(resolve => setTimeout(resolve, time));
}

function login() {
  var url = "https://script.google.com/macros/s/AKfycbwJz1jIxfIgfe9XTODaX1MMcTlVwSGJb-H17b0wkTX-V3zeQEuqH-P65WNf70SJ4iLUnw/exec?wachtwoord="+window.wachtwoord;
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

async function post_nota(tekst) {
  var p = window.wachtwoord.toUpperCase();
  window.gegevens = undefined;
  document.body.innerHTML = "";

  var witregel = document.createElement("br");
  document.body.appendChild(witregel);
  var witregel = document.createElement("br");
  document.body.appendChild(witregel);

  var heading = document.createElement("h1");
  heading.innerHTML = "Activiteit toevoegen...";
  document.body.appendChild(heading);

  var date1 = window.date.split("/")
  //var input = document.getElementById("input1");

  var url ="https://script.google.com/macros/s/AKfycbwuvzhE2Q1z9mF7"+p[4]+p[0].toLowerCase()+"s"+p[2]+"Z4ZSqrYJTChQe1QJBpzm0"+p[6]+"4EUhsu5d5uV-h8xyD0s5X7FwNWlg/exec?dag="+date1[0]+"&maand="+date1[1]+"&jaar="+date1[2]+"&a=1&a1="+tekst;

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
      console.log(data)
      window.gegevens = data;

    })
  .catch(error => console.log(error))

  var loading = true;
  while (loading==true) {
    await delay(1);
    if (window.gegevens!=undefined) {
      console.log("data found!");
      display();
      loading = false;
    }
  }
}

async function post_nota2(tekst) {
  var p = window.wachtwoord.toUpperCase();

  window.gegevens = undefined;
  document.body.innerHTML = "";

  var witregel = document.createElement("br");
  document.body.appendChild(witregel);
  var witregel = document.createElement("br");
  document.body.appendChild(witregel);

  var heading = document.createElement("h1");
  heading.innerHTML = "Activiteit toevoegen...";
  document.body.appendChild(heading);

  var date1 = window.date.split("/")

  var url = "https://script.google.com/macros/s/AKfycbwyk"+p[1]+"hMns_"+p[2]+"aux"+p[3]+p[5]+"x8tWOQvo0"+p[4].toLowerCase()+"_mcSoAeNqS"+p[0]+"zVxXu_9Bfxdhi_1e1Mob7Yv88dgkx9Kw/exec?dag="+date1[0]+"&maand="+date1[1]+"&jaar="+date1[2]+"&a=1&description="+tekst;

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
      console.log(data)
      window.gegevens = data;
      console.log(window.gegevens);
    })
  .catch(error => console.log(error))

  var loading = true;
  while (loading==true) {
    await delay(1);
    if (window.gegevens!=undefined) {
      console.log("data found!");
      display();
      loading = false;
    }
  }
}

async function delete_nota(a_number) {
  var p = window.wachtwoord.toUpperCase();

  window.gegevens = undefined;
  document.body.innerHTML = "";

  var witregel = document.createElement("br");
  document.body.appendChild(witregel);
  var witregel = document.createElement("br");
  document.body.appendChild(witregel);

  var heading = document.createElement("h1");
  heading.innerHTML = "Activiteit verwijderen...";
  document.body.appendChild(heading);


  console.log(a_number)
  console.log(window.date)
  var date1 = window.date.split("/")
  var url ="https://script.google.com/macros/s/AKfycby"+p[6].toLowerCase()+p[4].toLowerCase()+p[1].toLowerCase()+"UuLAV71C"+p[2].toLowerCase()+"LAB4LN"+p[0]+"wdmuFfTva_wXlFYjXlai_wxu6zbAvyVXAdcQdUndX8"+p[3]+"mdwmg/exec?dag="+date1[0]+"&maand="+date1[1]+"&jaar="+date1[2]+"&a="+a_number;
  console.log(url)
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
      console.log(data)
      window.gegevens = data;

    })
  .catch(error => console.log(error))

  var loading = true;
  while (loading==true) {
    await delay(1);
    if (window.gegevens!=undefined) {
      console.log("data found!");
      display();
      loading = false;
    }
  }
}

async function edit_nota(a_number, input) {
  var p = window.wachtwoord.toUpperCase();

  window.gegevens = undefined;
  document.body.innerHTML = "";

  var witregel = document.createElement("br");
  document.body.appendChild(witregel);
  var witregel = document.createElement("br");
  document.body.appendChild(witregel);

  var heading = document.createElement("h1");
  heading.innerHTML = "Activiteit bijwerken...";
  document.body.appendChild(heading);

  var date1 = window.date.split("/")
  var url ="https://script.google.com/macros/s/AKfycbxc"+p[6]+"haZam"+p[4]+"-fm5UYaEevWGD5pznkhDAwZ8h"+p[2].toLowerCase()+"Cjo9kcj6CAF6"+p[1]+"cFyoYCVWDcJVkY-tmx0w/exec?dag="+date1[0]+"&maand="+date1[1]+"&jaar="+date1[2]+"&a="+a_number+"&description="+input;

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
      console.log(data)
      window.gegevens = data;

    })
  .catch(error => console.log(error))

  var loading = true;
  while (loading==true) {
    await delay(1);
    if (window.gegevens!=undefined) {
      console.log("data found!");
      display();
      loading = false;
    }
  }
}

function search() {
  var p = window.wachtwoord.toUpperCase();

  var url = "https://script.google.com/macros/s/AKfycbz8F"+p[0].toLowerCase()+"DompAr9Lic"+p[3]+p[6]+"K"+p[4]+"R0zbNN-DGbWK"+p[2]+"CPiYxd"+p[1]+"T6"+p[5]+"UxtJdt64eTWCX9_PdAI-B4OUXtg/exec";
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
      console.log(data.data[window.date])
      console.log(url)

      window.gegevens = data;//[window.date]

      //show_data(data, eenheid)
    })
  .catch(error => console.log(error))
}

function create_nota1() {
  var months = ["Januari", "Februari", "Maart", "April", "Mei", "Juni", "Juli", "Augustus", "September", "Oktober", "November", "December"]
  weekdays = ["Zondag", "Maandag", "Dinsdag", "Woensdag", "Donderdag","Vrijdag", "Zaterdag"]

  var date1 = window.date.split("/")
  var date2 = new Date(date1[2] + "-"+date1[1].padStart(2, '0')+"-"+date1[0].padStart(2, '0'));
  console.log(date2)

  document.body.innerHTML = "";

  var witregel = document.createElement("br");
  document.body.appendChild(witregel);
  var witregel = document.createElement("br");
  document.body.appendChild(witregel);

  var heading = document.createElement("h1");
  heading.innerHTML = "Onze Familie-agenda";
  document.body.appendChild(heading);
  var date_text = document.createElement("h2");
  date_text.innerHTML = weekdays[date2.getDay()]+" "+ date1[0]+" "+months[date1[1]-1]+" "+date1[2];
  document.body.appendChild(date_text);

  var witregel = document.createElement("br");
  document.body.appendChild(witregel);

  var activities = false;

  var input = document.createElement("textarea");
  input.setAttribute("rows", "10");
  input.width = 800;
  input.classList.toggle("input");
  input.classList.toggle("input2");
  input.id = "input1";
  input.placeholder = "Beschrijf een activiteit...";
  document.body.appendChild(input);


  var witregel = document.createElement("br");
  document.body.appendChild(witregel);

  var save_btn = document.createElement("a");
  save_btn.innerHTML = "Activiteit opslaan";
  save_btn.classList.toggle('btn');
  save_btn.classList.toggle('small-btn1');
  save_btn.classList.toggle('normal-btn');
  save_btn.addEventListener('click', function() {
      post_nota(input.value);
  }, false);
  document.body.appendChild(save_btn);

  var delete_btn = document.createElement("a");
  delete_btn.innerHTML = "Verwijderen";
  delete_btn.classList.toggle('btn');
  delete_btn.classList.toggle('small-btn2');
  delete_btn.classList.toggle('normal-btn');
  delete_btn.addEventListener('click', function() {
      show1();
  }, false)
  document.body.appendChild(delete_btn);

  var witregel = document.createElement("br");
  document.body.appendChild(witregel);
  var witregel = document.createElement("br");
  document.body.appendChild(witregel);
  var witregel = document.createElement("br");
  document.body.appendChild(witregel);
  var witregel = document.createElement("br");
  document.body.appendChild(witregel);


  var bottom_div = document.createElement('div');
  bottom_div.classList.toggle("bottom-div");
  var zin = document.createElement("p");
  zin.innerHTML = "© 2022 Mateo Claesen.";
  zin.classList.toggle("title1-1");
  bottom_div.appendChild(zin);
  document.body.appendChild(bottom_div);
}

function create_nota2(a_number) {
  var months = ["Januari", "Februari", "Maart", "April", "Mei", "Juni", "Juli", "Augustus", "September", "Oktober", "November", "December"]
  weekdays = ["Zondag", "Maandag", "Dinsdag", "Woensdag", "Donderdag","Vrijdag", "Zaterdag"]

  var date1 = window.date.split("/")
  var date2 = new Date(date1[2] + "-"+date1[1].padStart(2, '0')+"-"+date1[0].padStart(2, '0'));
  console.log(date2)

  document.body.innerHTML = "";

  var witregel = document.createElement("br");
  document.body.appendChild(witregel);
  var witregel = document.createElement("br");
  document.body.appendChild(witregel);

  var heading = document.createElement("h1");
  heading.innerHTML = "Onze Familie-agenda";
  document.body.appendChild(heading);
  var date_text = document.createElement("h2");
  date_text.innerHTML = weekdays[date2.getDay()]+" "+ date1[0]+" "+months[date1[1]-1]+" "+date1[2];
  document.body.appendChild(date_text);

  var witregel = document.createElement("br");
  document.body.appendChild(witregel);

  var activities = false;
  var activities_num = 0;
  if (window.gegevens != null) {
    if ((window.date in window.gegevens.data)==true) {
      //console.log(window.gegevens.data[date_in_format].Activiteiten.length);
      if (window.gegevens.data[window.date].Activiteiten.length > 0) {
        activities = true;
        activities_num = window.gegevens.data[window.date].Activiteiten.length;

        for (i=0;i<window.gegevens.data[window.date].Activiteiten.length;i++) {
          console.log((i+1)+"="+a_number)
          var input = document.createElement("textarea");
          input.setAttribute("rows", "10");
          input.width = 800;
          input.classList.toggle("input");
          input.classList.toggle("input2");
          input.id = "input"+(i+1);
          input.disabled = true;
          input.value = window.gegevens.data[window.date].Activiteiten[i];
          input.placeholder = "Beschrijf een activiteit...";
          document.body.appendChild(input);
        }

        console.log(100000000000)
        var input1 = document.createElement("textarea");
        input1.setAttribute("rows", "10");
        input1.width = 800;
        input1.classList.toggle("input");
        input1.classList.toggle("input2");
        input1.id = "input"+(i+1);
        input1.disabled = false;
        input1.placeholder = "Beschrijf een activiteit...";
        document.body.appendChild(input1);


        var witregel = document.createElement("br");
        document.body.appendChild(witregel);

        var edit_btn = document.createElement("a");
        edit_btn.innerHTML = "Activiteit opslaan";
        edit_btn.classList.toggle('btn');
        edit_btn.classList.toggle('small-btn1');
        edit_btn.classList.toggle('normal-btn');
        edit_btn.addEventListener('click', function() {
            post_nota2(input1.value);
        }, false);
        document.body.appendChild(edit_btn);

        var delete_btn = document.createElement("a");
        delete_btn.innerHTML = "Verwijderen";
        delete_btn.classList.toggle('btn');
        delete_btn.classList.toggle('small-btn2');
        delete_btn.classList.toggle('normal-btn');
        delete_btn.addEventListener('click', function() {
            show1();
        }, false)
        document.body.appendChild(delete_btn);


        var witregel = document.createElement("br");
        document.body.appendChild(witregel);
      }
    }
  }

  var witregel = document.createElement("br");
  document.body.appendChild(witregel);
  var witregel = document.createElement("br");
  document.body.appendChild(witregel);
  var witregel = document.createElement("br");
  document.body.appendChild(witregel);
  var witregel = document.createElement("br");
  document.body.appendChild(witregel);
  var witregel = document.createElement("br");
  document.body.appendChild(witregel);


  var bottom_div = document.createElement('div');
  bottom_div.classList.toggle("bottom-div");
  var zin = document.createElement("p");
  zin.innerHTML = "© 2022 Mateo Claesen.";
  zin.classList.toggle("title1-1");
  bottom_div.appendChild(zin);
  document.body.appendChild(bottom_div);
}

function create_nota3(a_number) {
  var months = ["Januari", "Februari", "Maart", "April", "Mei", "Juni", "Juli", "Augustus", "September", "Oktober", "November", "December"]
  weekdays = ["Zondag", "Maandag", "Dinsdag", "Woensdag", "Donderdag","Vrijdag", "Zaterdag"]

  var date1 = window.date.split("/")
  var date2 = new Date(date1[2] + "-"+date1[1].padStart(2, '0')+"-"+date1[0].padStart(2, '0'));
  console.log(date2)

  document.body.innerHTML = "";

  var witregel = document.createElement("br");
  document.body.appendChild(witregel);
  var witregel = document.createElement("br");
  document.body.appendChild(witregel);

  var heading = document.createElement("h1");
  heading.innerHTML = "Onze Familie-agenda";
  document.body.appendChild(heading);
  var date_text = document.createElement("h2");
  date_text.innerHTML = weekdays[date2.getDay()]+" "+ date1[0]+" "+months[date1[1]-1]+" "+date1[2];
  document.body.appendChild(date_text);

  var witregel = document.createElement("br");
  document.body.appendChild(witregel);

  var activities = false;
  var activities_num = 0;
  if (window.gegevens != null) {
    if ((window.date in window.gegevens.data)==true) {
      //console.log(window.gegevens.data[date_in_format].Activiteiten.length);
      if (window.gegevens.data[window.date].Activiteiten.length > 0) {
        activities = true;
        activities_num = window.gegevens.data[window.date].Activiteiten.length;

        for (i=0;i<window.gegevens.data[window.date].Activiteiten.length;i++) {
          console.log((i+1)+"="+a_number)
          if ((i+1)==a_number) {
            console.log(100000000000)
            var input1 = document.createElement("textarea");
            input1.setAttribute("rows", "10");
            input1.width = 800;
            input1.classList.toggle("input");
            input1.classList.toggle("input2");
            input1.id = "input"+(i+1);
            input1.value = window.gegevens.data[window.date].Activiteiten[i];
            input1.disabled = false;
            input1.placeholder = "Beschrijf een activiteit...";
            document.body.appendChild(input1);


            var witregel = document.createElement("br");
            document.body.appendChild(witregel);

            var edit_btn = document.createElement("a");
            edit_btn.innerHTML = "Activiteit opslaan";
            edit_btn.classList.toggle('btn');
            edit_btn.classList.toggle('small-btn1');
            edit_btn.classList.toggle('normal-btn');
            edit_btn.addEventListener('click', function() {
                edit_nota(a_number, input1.value);
            }, false);
            document.body.appendChild(edit_btn);

            var delete_btn = document.createElement("a");
            delete_btn.innerHTML = "Verwijderen";
            delete_btn.classList.toggle('btn');
            delete_btn.classList.toggle('small-btn2');
            delete_btn.classList.toggle('normal-btn');
            delete_btn.addEventListener('click', function() {
                delete_nota(a_number);
            }, false)
            document.body.appendChild(delete_btn);
          }

          if ((i+1)!=a_number) {
            var input = document.createElement("textarea");
            input.setAttribute("rows", "10");
            input.width = 800;
            input.classList.toggle("input");
            input.classList.toggle("input2");
            input.id = "input"+(i+1);
            input.disabled = true;
            input.value = window.gegevens.data[window.date].Activiteiten[i];
            input.placeholder = "Beschrijf een activiteit...";
            document.body.appendChild(input);
          }

          var witregel = document.createElement("br");
          document.body.appendChild(witregel);
        }
      }
    }
  }

  var witregel = document.createElement("br");
  document.body.appendChild(witregel);
  var witregel = document.createElement("br");
  document.body.appendChild(witregel);
  var witregel = document.createElement("br");
  document.body.appendChild(witregel);
  var witregel = document.createElement("br");
  document.body.appendChild(witregel);
  var witregel = document.createElement("br");
  document.body.appendChild(witregel);


  var bottom_div = document.createElement('div');
  bottom_div.classList.toggle("bottom-div");
  var zin = document.createElement("p");
  zin.innerHTML = "© 2022 Mateo Claesen.";
  zin.classList.toggle("title1-1");
  bottom_div.appendChild(zin);
  document.body.appendChild(bottom_div);
}

function display() {
  var months = ["Januari", "Februari", "Maart", "April", "Mei", "Juni", "Juli", "Augustus", "September", "Oktober", "November", "December"]
  weekdays = ["Zondag", "Maandag", "Dinsdag", "Woensdag", "Donderdag","Vrijdag", "Zaterdag"]

  var date1 = window.date.split("/")
  var date2 = new Date(date1[2] + "-"+date1[1].padStart(2, '0')+"-"+date1[0].padStart(2, '0'));
  console.log(date2)

  document.body.innerHTML = "";

  var witregel = document.createElement("br");
  document.body.appendChild(witregel);
  var witregel = document.createElement("br");
  document.body.appendChild(witregel);

  var heading = document.createElement("h1");
  heading.innerHTML = "Onze Familie-agenda";
  document.body.appendChild(heading);
  var date_text = document.createElement("h2");
  date_text.innerHTML = weekdays[date2.getDay()]+" "+ date1[0]+" "+months[date1[1]-1]+" "+date1[2];
  document.body.appendChild(date_text);

  var witregel = document.createElement("br");
  document.body.appendChild(witregel);

  var activities = false;
  var activities_num = 0;
  if (window.gegevens != null) {
    if ((window.date in window.gegevens.data)==true) {
      //console.log(window.gegevens.data[date_in_format].Activiteiten.length);
      if (window.gegevens.data[window.date].Activiteiten.length > 0) {
        activities = true;
        activities_num = window.gegevens.data[window.date].Activiteiten.length;

        for (i=0;i<window.gegevens.data[window.date].Activiteiten.length;i++) {
          var input = document.createElement("textarea");
          input.setAttribute("rows", "10");
          input.width = 800;
          input.classList.toggle("input");
          input.id = "input"+(i+1);
          input.disabled = true;
          input.value = window.gegevens.data[window.date].Activiteiten[i];
          input.placeholder = "Beschrijf een activiteit...";
          document.body.appendChild(input);

          var edit_btn = document.createElement("a");
          edit_btn.id = "edit_btn"+(i+1)
          edit_btn.classList.toggle("btn2");
          edit_btn.classList.toggle("btn");
          //edit_btn.innerHTML = "<a onclick='create_nota3(number)'></a>"
          //edit_btn.onClick = function () {
          //  create_nota3(number);
          //}
          //edit_btn.addEventListener('click', function() {
          //    create_nota3(number);
          //}, false);
          document.body.appendChild(edit_btn);

          var delete_btn = document.createElement("a");
          delete_btn.id = "delete_btn"+(i+1)
          delete_btn.classList.toggle("btn3");
          delete_btn.classList.toggle("btn");
          //delete_btn.addEventListener('click', function() {
          //    delete_nota(Lambda(i));
          //}, false);
          document.body.appendChild(delete_btn);

          var witregel = document.createElement("br");
          document.body.appendChild(witregel);
        }

        for (var m=0;m<window.gegevens.data[window.date].Activiteiten.length;m++) {
          window["edit_btn"+ (m+1)] = document.getElementById('edit_btn'+(m+1));
          window["delete_btn"+ (m+1)] = document.getElementById('delete_btn'+(m+1));
        }


        if (window.gegevens.data[window.date].Activiteiten.length>0) {
          edit_btn1.addEventListener('click', function() {
            create_nota3(1);
          }, false);
          delete_btn1.addEventListener('click', function() {
            delete_nota(1);
          }, false);
        }
        if (window.gegevens.data[window.date].Activiteiten.length>1) {
          edit_btn2.addEventListener('click', function() {
            create_nota3(2);
          }, false);
          delete_btn2.addEventListener('click', function() {
            delete_nota(2);
          }, false);
        }
        if (window.gegevens.data[window.date].Activiteiten.length>2) {
          edit_btn3.addEventListener('click', function() {
            create_nota3(3);
          }, false);
          delete_btn3.addEventListener('click', function() {
            delete_nota(3);
          }, false);
        }
        if (window.gegevens.data[window.date].Activiteiten.length>3) {
          edit_btn4.addEventListener('click', function() {
            create_nota3(4);
          }, false);
          delete_btn4.addEventListener('click', function() {
            delete_nota(4);
          }, false);
        }
        if (window.gegevens.data[window.date].Activiteiten.length>4) {
          edit_btn5.addEventListener('click', function() {
            create_nota3(5);
          }, false);
          delete_btn5.addEventListener('click', function() {
            delete_nota(5);
          }, false);
        }
        if (window.gegevens.data[window.date].Activiteiten.length>5) {
          edit_btn6.addEventListener('click', function() {
            create_nota3(6);
          }, false);
          delete_btn6.addEventListener('click', function() {
            delete_nota(6);
          }, false);
        }
        if (window.gegevens.data[window.date].Activiteiten.length>6) {
          edit_btn7.addEventListener('click', function() {
            create_nota3(7);
          }, false);
          delete_btn7.addEventListener('click', function() {
            delete_nota(7);
          }, false);
        }
        if (window.gegevens.data[window.date].Activiteiten.length>7) {
          edit_btn8.addEventListener('click', function() {
            create_nota3(8);
          }, false);
          delete_btn8.addEventListener('click', function() {
            delete_nota(8);
          }, false);
        }
        if (window.gegevens.data[window.date].Activiteiten.length>8) {
          edit_btn9.addEventListener('click', function() {
            create_nota3(9);
          }, false);
          delete_btn9.addEventListener('click', function() {
            delete_nota(9);
          }, false);
        }
        if (window.gegevens.data[window.date].Activiteiten.length>9) {
          edit_btn10.addEventListener('click', function() {
            create_nota3(10);
          }, false);
          delete_btn10.addEventListener('click', function() {
            delete_nota(10);
          }, false);
        }
      }
    }
  }

  if (activities == false) {
    var activity_text = document.createElement("p");
    activity_text.innerHTML = "Op deze dag zijn er geen activiteiten gepland.";
    document.body.appendChild(activity_text);
  }

  var witregel = document.createElement("br");
  document.body.appendChild(witregel);

  if (activities_num < 10) {
    var btn = document.createElement("a");
    btn.innerHTML = "Activiteit toevoegen";
    btn.classList.toggle('btn');
    btn.classList.toggle('normal-btn');
    if (activities== false) {
      btn.addEventListener('click', function() {
        create_nota1();
      }, false);
    }
    if (activities== true) {
      btn.addEventListener('click', function() {
        create_nota2((activities_num+1));
      }, false);
    }
    document.body.appendChild(btn);
  }

  var witregel = document.createElement("br");
  document.body.appendChild(witregel);

  var terug_btn = document.createElement("a");
  terug_btn.innerHTML = "Terug";
  terug_btn.classList.toggle('btn2');
  //terug_btn.classList.toggle('normal-btn');
  terug_btn.classList.toggle('terug-btn');
  terug_btn.href = "index.html?wachtwoord="+window.wachtwoord+"&jaar="+date1[2];
  document.body.appendChild(terug_btn);

  var witregel = document.createElement("br");
  document.body.appendChild(witregel);
  var witregel = document.createElement("br");
  document.body.appendChild(witregel);
  var witregel = document.createElement("br");
  document.body.appendChild(witregel);
  var witregel = document.createElement("br");
  document.body.appendChild(witregel);


  var bottom_div = document.createElement('div');
  bottom_div.classList.toggle("bottom-div");
  var zin = document.createElement("p");
  zin.innerHTML = "© 2022 Mateo Claesen.";
  zin.classList.toggle("title1-1");
  bottom_div.appendChild(zin);
  document.body.appendChild(bottom_div);
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
      display();
      loading = false;
    }
  }
}

async function show2() {
  var today = new Date();
  current_year = today.getFullYear();

  search();
  await delay(10000);
  console.log(1)
  display();
}

show1();
