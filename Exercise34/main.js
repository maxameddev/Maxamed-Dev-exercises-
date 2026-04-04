function add() {
    let ul = document.getElementById("mylist");
    let li = document.createElement("li");
    li.textContent = "Water";
    ul.appendChild(li);
}

function remove() {
    let ul = document.getElementById("mylist");

    if (!ul.lastElementChild) {
        alert("No items to remove");
        return;
    }

    ul.removeChild(ul.lastElementChild);
}