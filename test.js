const myNodelist = document.getElementsByTagName("td");
let i;
for (i = 0; i < myNodelist.length; i++) {
  const p = document.createElement("p");
  const txt = document.createTextNode("\u00D7");
  // const txt = document.getElementsByTagName("input").value;
  p.className = "close";
  p.appendChild(txt);
  myNodelist[i].appendChild(p);
}

for (i = 0; i < arr.length; i++) {
  arr[i].plas = function () {
    var div = this.parentElement;
    div.style.display = "none";
  };
}
