// alert banner :
const alertBanner = document.getElementById("alert");
alertBanner.innerHTML = 
`
 <div class="alert-banner">
 <p class= "alertp"><strong>Alert:</strong> You have <strong>6</strong> unread message<span class="alert-banner-close">x</span></p>
 </div>
 `
 alertBanner.addEventListener('click', e => {
  const element = e.target;
   if (element.classList.contains("alert-banner-close")) {
    alertBanner.style.display = "none"
    }
  });


  // line graph

  let trafficData = {
    labels: ["16-22", "23-29", "30-5", "6-12", "13-19", "20-26", "27-3",
    "4-10", "11-17", "18-24", "25-31"],
    datasets: [{
    data: [750, 1250, 1000, 2000, 1500, 1750, 1250, 1850, 2250, 1500,
    2500],
    backgroundColor: 'rgba(116, 119, 191, .3)',
    borderWidth: 1,
    }]
    };
  let trafficOptions = {
     backgroundColor: 'rgba(112, 104, 201, .5)',
     fill: true,
    aspectRatio: 2.5,
     animation: {
     duration: 0
     },
    scales: {
    y: {
    beginAtZero: true
     }
     },
    plugins: {
    legend: {
    display: false
     }
    }
    };
  let trafficCanvas = document.getElementById('traffic-chart')
  let trafficChart = new Chart(trafficCanvas, {
      type: 'line',
      data: trafficData,
      options: trafficOptions
       });

        // Bar Graph :
  const dailyCanvas = document.getElementById("daily-chart");
  const dailyData = {
      labels: ["S", "M", "T", "W", "T", "F", "S"],
      datasets: [{
      label: '# of Hits', /* here i should add 0-250 */
      data: [75, 115, 175, 125, 225, 200, 100],
      backgroundColor: '#7477BF',
       borderWidth: 1
         }]
         };
  const dailyOptions = {
      scales: {
       y: {
      beginAtZero: true
         }
         },
      plugins: {
      legend: {
      display: false
        }
         }
        };
  let dailyChart = new Chart(dailyCanvas, {
      type: 'bar',
      data: dailyData,
      options: dailyOptions
         });

// mobile user donut :
  const mobileCanvas = document.getElementById("mobile-chart");
  const mobileData = {
     labels: ["Desktop", "Tablet", "Phones"],
     datasets: [{
     label: '# of Users',
     data: [2000, 550, 500],
     borderWidth: 0,
     backgroundColor: [
     '#7477BF',
     '#78CF82',
     '#51B6C8'
          ]
         }]
          };
  const mobileOptions = {
   aspectRatio: 1.9,
   plugins: {
   legend: {
   position: 'right',
   labels: {
   boxWidth: 20,
   fontStyle: 'bold'
    }
      }
      }
     };
   let mobileChart = new Chart(mobileCanvas, {
    type: 'doughnut',
    data: mobileData,
    options: mobileOptions
      });

       // message :
  const user = document.getElementById("userField");
  const message = document.getElementById("messageField");
  const send = document.getElementById("send");

        send.addEventListener('click', () => {
       // ensure user and message fields are filled out
        if (user.value === "" && message.value === "") {
         alert("Please fill out user and message fields before sending");
        } else if (user.value === "" ) {
         alert("Please fill out user field before sending");
        } else if (message.value === "" ) {
         alert("Please fill out message field before sending");
        } else {
         alert(`Message successfully sent to: ${user.value}`);
          }
      });
    // my js 
// 2 alert message
    const webApp = document.getElementById('svgbell')

    webApp.addEventListener('click', () => {
      let newL = '\r\n'
      let message = "You have 1 message request";
      let message2 = "you have 1 friend request"
      let total = (message + '\n' + message2)
       if (true) {
        alert(total)
    }
  });

  
// trafic chart nav 
const button1 = document.getElementById('traffic-nav-link1')
const button2 = document.getElementById('traffic-nav-link2')
const button3 = document.getElementById('traffic-nav-link3')
const button4 = document.getElementById('traffic-nav-link4')

function chart1() {
      trafficChart.data.labels = ["00-05", "06-10", "11-15", "16-20", "21-00"];
      trafficChart.data.datasets[0].data = [100, 350, 450, 200, 50, 600, 500];
      trafficChart.update();
      button1.classList.add('active');
      button2.classList.remove('active');
      button3.classList.remove('active');
      button4.classList.remove('active');
}
function chart2() {
      trafficChart.data.labels = ["S", "M", "T", "W", "T", "F", "S"];
      trafficChart.data.datasets[0].data  = [350, 150, 250, 200, 250, 450, 350];
      trafficChart.update();
      button1.classList.remove('active');
      button2.classList.add('active');
      button3.classList.remove('active');
      button4.classList.remove('active');
}
function chart3() {
      trafficChart.data.labels = ["16-22", "23-29", "30-5", "6-12", "13-19", "20-26", "27-3",
      "4-10", "11-17", "18-24", "25-31"]
      trafficChart.data.datasets[0].data  = [200, 200, 300, 400, 700, 500, 350, 250, 200, 150, 400, 500]
      trafficChart.update();
      button1.classList.remove('active');
      button2.classList.remove('active');
      button3.classList.add('active');
      button4.classList.remove('active');
}
function chart4() {
        trafficChart.data.labels = ["01-22", "02-22", "03-22", "04-22", "05-22", "06-22", "07-22",
      "08-22", "09-22", "10-22", "11-22", "12-22"]
      trafficChart.data.datasets[0].data  = [200, 100, 500, 500, 350, 250, 250, 300, 100, 200, 100, 100]
      trafficChart.update();
      button1.classList.remove('active');
      button2.classList.remove('active');
      button3.classList.remove('active');
      button4.classList.add('active');
}

//Auto-Complete 
var userNames = [
  "Victoria Chambers",
  "Dale Byrd",
  "Dawn Wood",
  "Dan Oliver"
];

function autocomplete(inp, arr) {
var currentFocus;
inp.addEventListener("input", function(e) {
var a, b, i, val= this.value;
closeAllLists();
if (!val) { return false;}
currentFocus = -1;
a = document.createElement("DIV");
a.setAttribute("id", this.id + "autocomplete-list");
a.setAttribute("class", "autocomplete-items");
this.parentNode.appendChild(a);
for (i = 0; i < arr.length; i++) {
  if (arr[i].substr(0, val.length).toUpperCase() == val.toUpperCase()) {
    b = document.createElement("DIV");
    b.innerHTML = "<strong>" + arr[i].substr(0, val.length) + "</strong>";
    b.innerHTML += arr[i].substr(val.length);
    b.innerHTML += "<input type='hidden' value='" + arr[i] + "'>";
    b.addEventListener("click", function(e) {
      inp.value = this.getElementsByTagName("input")[0].value;
      closeAllLists();
    });
    a.appendChild(b);
  }
}
});
  inp.addEventListener("keydown", function(e) {
    var x = document.getElementById(this.id + "autocomplete-list");
    if (x) x = x.getElementsByTagName("div");
    if (e.keyCode == 40) {
      currentFocus++;
      addActive(x);
  } else if (e.keyCode == 13) {
    e.preventDefault();
    if (currentFocus > -1) {
      if (x) x[currentFocus].click();
    }
  }
  });
  function addActive(x) {
    if (!x) return false;
    removeActive(x);
    if (currentFocus >= x.length) currentFocus =0;
    if (currentFocus < 0) currentFocus = (x.length - 1);
    x[currentFocus].classList.add("autocomplete-active");
  }
  function removeActive(x) {
    for(var i = 0; i < x.length; i++) {
      x[i].classList.remove("autocomplete-active");
    }
  }
  function closeAllLists(elmnt) {
    var x = document.getElementsByClassName("autocomplete-items");
    for (var i = 0; i < x.length; i++) {
      if (elmnt != x[i] && elmnt != inp) {
        x[i].parentNode.removeChild(x[i]);
      }
    }
  }
  document.addEventListener('click', function(e) {
    closeAllLists(e.target);
  });
}
autocomplete(document.getElementById("userField"), userNames);

// local storage //
// got it from stack.overflow : https://stackoverflow.com/questions/26628812/localstorage-how-to-save-a-checkbox 


let boxes = document.getElementsByClassName('checkapp').length;
function saveCheckBox() {
  localStorage.setItem('select', document.getElementById('timezone').selectedIndex)
  for(let i = 1; i <= boxes; i++) {
    var checkbox = document.getElementById(String(i));
    localStorage.setItem("checkbox" + String(i), checkbox.checked)
  }
    }

function loadCheckBox() {
  for (let i = 1; i <= boxes; i++) {
    if(localStorage.length > 0) {
      var checked = JSON.parse(localStorage.getItem("checkbox" + String(i)));
      document.getElementById(String(i)).checked = checked;
    }
  }
  document.getElementById('timezone').selectedIndex = localStorage.getItem('select')
}

window.addEventListener('change', saveCheckBox);


function deleteButton() {
  location.reload();
  localStorage.clear();
}
