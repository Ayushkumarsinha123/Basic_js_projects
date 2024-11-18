let items = [];

const itemsDiv = document.querySelector("#items")

function loadItems() {}

function  renderItems() {
  itemsDiv.innerHTML = null;
  
  for(const [idx, item] of Object.entries(items)){
    const text = document.createElement("p");
    text.textContent = item;

    const button = document.createElement("button")
    button.textContent = "delete"

    itemsDiv.appendChild(text)
  }
}



function saveItems() {

}

function addItem() {}

function removeItem() {}
