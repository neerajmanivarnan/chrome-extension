//CONSTANTS AND VARIABLE DECLARATIONS
let myLeads = [];
const textEl = document.getElementById("input-el");
const ulEl = document.getElementById("ul-el");
const saveEl = document.getElementById("save-btn");
const leadsFromLocalStorage = JSON.parse(localStorage.getItem("myLeads"));
const dltEl = document.getElementById("dlt-btn");
const savTabEl = document.getElementById("save-tab");
// const tabs = [{ url: "https://instagram.com/neergasm" }];

//fetching data from local storage and checking if it contains any values
if (leadsFromLocalStorage) {
  myLeads = leadsFromLocalStorage;
  render(myLeads);
} else {
}

//FUNTIONS AND EVENT LISTENERS

//event listener for save button
saveEl.addEventListener("click", function () {
  let newText = textEl.value;
  myLeads.push(newText);

  textEl.value = "";
  //text value is cleared or else bugs are appeared

  render(myLeads);

  localStorage.setItem("myLeads", JSON.stringify(myLeads));
});

//render function for rendering out HTML elements in the HTML document
function render(leads) {
  let listItems = "";

  for (let i = 0; i < leads.length; i++) {
    listItems += `<li>
                    <a href='${myLeads[i]}' target='_blank'>
                        ${myLeads[i]}
                    </a>
                    
                </li>`;
  }
  ulEl.innerHTML = listItems;
}

//event listener for delete button
dltEl.addEventListener("dblclick", function () {
  localStorage.clear();
  myLeads = [];
  render(myLeads);
});

savTabEl.addEventListener("click", function () {
  chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
    console.log(tabs[0]);
    myLeads.push(tabs[0].url);
    localStorage.setItem("myLeads", JSON.stringify(myLeads));
    render(myLeads);
  });
});
