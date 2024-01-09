let myLeads = [];
const textEl = document.getElementById("input-el");
const ulEl = document.getElementById("ul-el");

const saveEl = document.getElementById("save-btn");

saveEl.addEventListener("click", function () {
  let newText = textEl.value;
  myLeads.push(newText);
  // console.log(myLeads);
  // ulEl.innerHTML += "<li>"+newText + "</li>"
  // const li = document.createElement("li")
  // li.innerText = newText
  // ulEl.append(li)
  textEl.value = "";

  if (newText != null) {
    render();
  }
});

function render() {
  let listItems = "";

  for (let i = 0; i < myLeads.length; i++) {
    // listItems+="<li>"+ "<a href='"+myLeads[i]+"' target='_blank'>"+myLeads[i]+"</a>"+"</li>"
    listItems += `<li>
                    <a href='${myLeads[i]}' target='_blank'>
                        ${myLeads[i]}
                    </a>
                </li>`;
  }
  ulEl.innerHTML = listItems;
}

// for(let i=0;i<myLeads.length;i++){
//     ulEl.innerHTML += "<li>" +  myLeads[i] + "</li>"
// }
