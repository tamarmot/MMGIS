//Form nav
let pages = [
  "README",
  "JavaScript_API",
  "AR_and_VR",
  "Deep_Linking",
  "Development",
  "ENVs",
];
let configure = [
  "Configure",
  "Overall_Tab",
  "Initial_Tab",
  "Layers_Tab",
  "Tools_Tab",
  "Projection_Tab",
  "Look_Tab",
  "Panels_Tab",
  "Time_Tab",
  "Kinds",
  "Vector_Styling",
  "Layer_URLs",
  "Keys",
  "Manage_Datasets",
  "Manage_Geodatasets",
  "Remote_Virtual_Layer",
];
let layers = [
  "Data",
  "Header",
  "Model",
  "Query",
  "Tile",
  "Vector_Tile",
  "Vector",
];
let tools = [
  "Chemistry",
  "Draw",
  "Identifier",
  "Info",
  "Isochrone",
  "Layers",
  "Legend",
  "Measure",
  "Sites",
  "Viewshed",
];
let apis = [
  { name: "Main", path: "../api/docs/main" },
  { name: "Spatial", path: "../api/docs/spatial/" },
];

pages.forEach((v) => {
  let node = document.createElement("li");
  node.setAttribute("id", v);
  node.setAttribute("class", "page");
  node.addEventListener(
    "click",
    (function (page) {
      return function () {
        let pageElms = document.getElementsByClassName("page");
        for (let i = 0; i < pageElms.length; i++) {
          pageElms[i].setAttribute("class", "page");
        }
        document.getElementById(page).setAttribute("class", "page active");
        setPage(page);
      };
    })(v)
  );

  let text = v.replace(/_/g, " ");
  if (text == "README") text = "Home";
  let textnode = document.createTextNode(text);
  node.appendChild(textnode);
  document.getElementById("nav").appendChild(node);
});

configure.forEach((v) => {
  let node = document.createElement("li");
  node.setAttribute("id", v);
  node.setAttribute("class", "page");
  node.addEventListener(
    "click",
    (function (page) {
      return function () {
        let pageElms = document.getElementsByClassName("page");
        for (let i = 0; i < pageElms.length; i++) {
          pageElms[i].setAttribute("class", "page");
        }
        document.getElementById(page).setAttribute("class", "page active");
        setPage(page);
      };
    })(v)
  );

  let text = v.replace(/_/g, " ");
  if (text == "README") text = "Home";
  let textnode = document.createTextNode(text);
  node.appendChild(textnode);
  document.getElementById("navconfigure").appendChild(node);
});

layers.forEach((v) => {
  let node = document.createElement("li");
  node.setAttribute("id", v);
  node.setAttribute("class", "page");
  node.addEventListener(
    "click",
    (function (page) {
      return function () {
        let pageElms = document.getElementsByClassName("page");
        for (let i = 0; i < pageElms.length; i++) {
          pageElms[i].setAttribute("class", "page");
        }
        document.getElementById(page).setAttribute("class", "page active");
        setPage(page);
      };
    })(v)
  );

  let text = v.replace(/_/g, " ");
  if (text == "README") text = "Home";
  let textnode = document.createTextNode(text);
  node.appendChild(textnode);
  document.getElementById("navlayers").appendChild(node);
});

tools.forEach((v) => {
  let node = document.createElement("li");
  node.setAttribute("id", v);
  node.setAttribute("class", "page");
  node.addEventListener(
    "click",
    (function (page) {
      return function () {
        let pageElms = document.getElementsByClassName("page");
        for (let i = 0; i < pageElms.length; i++) {
          pageElms[i].setAttribute("class", "page");
        }
        document.getElementById(page).setAttribute("class", "page active");
        setPage(page);
      };
    })(v)
  );

  let text = v.replace(/_/g, " ");
  if (text == "README") text = "Home";
  let textnode = document.createTextNode(text);
  node.appendChild(textnode);
  document.getElementById("navtools").appendChild(node);
});

apis.forEach((v) => {
  let node = document.createElement("li");
  node.setAttribute("id", v.name);
  node.addEventListener(
    "click",
    (function (api) {
      return function () {
        window.location.href = api.path;
      };
    })(v)
  );

  let text = v.name.replace(/_/g, " ");
  let textnode = document.createTextNode(text);
  node.appendChild(textnode);
  document.getElementById("navapi").appendChild(node);
});

function setPage(page) {
  let xhr = new XMLHttpRequest();
  xhr.addEventListener("load", function () {
    let url = window.location.href.split("?")[0] + "?page=" + page;
    window.history.replaceState("", "", url);

    let options = {
      highlight: (code) => hljs.highlightAuto(code).value,
    };
    document.getElementById("markdown").innerHTML = marked(
      this.responseText,
      options
    );
  });
  let path = "../documentation/pages/markdowns/" + page + ".md";
  if (page == "README") path = "../README.md";
  xhr.open("GET", path);
  xhr.send();
}

function getSingleQueryVariable(variable) {
  var query = window.location.search.substring(1);
  var vars = query.split("&");
  for (var i = 0; i < vars.length; i++) {
    var pair = vars[i].split("=");
    if (pair[0] == variable) {
      return decodeURIComponent(pair[1]);
    }
  }

  return false;
}

document.getElementById("tbtitle").addEventListener("click", function () {
  window.location.href = "/";
});

setTimeout(function () {
  let page = getSingleQueryVariable("page") || "README";

  let pageElm = document.getElementById(page);

  if (pageElm) pageElm.dispatchEvent(new CustomEvent("click"));
}, 100);
