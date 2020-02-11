//tab settings//

function showPanel(panelIndex) {
  var tabButtons = document.querySelectorAll(".tab .buttonContainer button");
  var tabPanels = document.querySelectorAll(".tab .tabPanel");
  tabButtons.forEach(function(node) {
    node.getElementsByClassName.backgroundColor = "";
    node.style.color = "";
  });
  tabButtons[panelIndex].style.color = "red";
  tabPanels.forEach(function(node) {
    node.style.display = "none";
  });
  tabPanels[panelIndex].style.display = "block";
}
showPanel(0);

////////////////////////////////////////////////////////////////////
//      Add new task
///////////////////////////////////////////////////////////////////
document.querySelector("#addnew").addEventListener("click", function() {
  //var list = document.getElementById("newWork");
  //var button = document.createElement("button");
  //var clone = document.getElementsByClassName("tabpanel")[0];
  var clone = document.getElementsByClassName("new-container")[0];
  var clonenode = clone.cloneNode(true);
  document.getElementById("newWork").appendChild(clonenode);
  //list.insertBefore(button,list.childNodes[0]);
});

document.querySelector("#submit").addEventListener("click", e => {
  e.preventDefault();
  let workout = document.getElementsByTagName("select");
  let set = document.getElementsByClassName("add-set");
  let weight = document.getElementsByClassName("add-weight");
  let reps = document.getElementsByClassName("add-reps");
  //arr = document.getElementsByClassName(".new-workout").value[0];
  //arr = document.querySelectorAll(".new-workout").innerText;
  let select = [];
  let setarr = [];
  let weightarr = [];
  let repsarr = [];
  var items = [];
  var date =new Date();
  var tostring = (date.toString()).slice(4,15);
  const container = {
    workout: "default",
    setno: 0,
    weight: 0,
    reps: 0,
    Date :0
  };

  const demo = Object.create(container);
    console.log(demo);
  (() => {
    ///get and store value of all the workout added
    for (let i = 0; i < workout.length; i++) {
      array0 = workout[i].value;
      select.push(array0);
    }
    console.log(select);

    //get and store value of all the sets added
    for (let j = 0; j < set.length; j++) {
      array1 = set[j].value;
      setarr.push(array1);
    }
    console.log(setarr);

    //get and store value of all the weight added
    for (let k = 0; k < weight.length; k++) {
      array2 = weight[k].value;
      weightarr.push(array2);
    }
    console.log(weightarr);

    //get and store value of allt the reps added
    for (let l = 0; l < reps.length; l++) {
      array3 = reps[l].value;
      repsarr.push(array3);
    }
    console.log(repsarr);
  })();

  for (var p = 0; p < workout.length; p++) {
    demo.workout = select[p];
    demo.setno = setarr[p];
    demo.weight = weightarr[p];
    demo.reps = repsarr[p];
    demo.Date = tostring;
    console.log(demo);
    let json = JSON.stringify(demo);
    localStorage.setItem("exercise",json);
    items.push(demo);
  }
});
