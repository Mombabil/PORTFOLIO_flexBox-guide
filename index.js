const content = document.querySelector(".content");
const items = document.querySelectorAll(".items");

const fdRow = document.getElementById("fdRow");
const fdRowReverse = document.getElementById("fdRowReverse");
const fdColumn = document.getElementById("fdColumn");
const fdColumnReverse = document.getElementById("fdColumnReverse");
const fwW = document.getElementById("fwW");
const fwNoW = document.getElementById("fwNoW");
const fwWReverse = document.getElementById("fwWReverse");
const jcFs = document.getElementById("jcFs");
const jcFe = document.getElementById("jcFe");
const jcC = document.getElementById("jcC");
const jcSa = document.getElementById("jcSa");
const jcSb = document.getElementById("jcSb");
const jcSe = document.getElementById("jcSe");
const aiS = document.getElementById("aiS");
const aiFs = document.getElementById("aiFs");
const aiFe = document.getElementById("aiFe");
const aiC = document.getElementById("aiC");
const aiB = document.getElementById("aiB");

function defaultSize() {
  items.forEach((item) => {
    item.style.width = "98px";
    item.style.height = "98px";
    item.style.fontSize = "16px";
  });
}

function wrapSize() {
  items.forEach((item) => {
    item.style.width = "198px";
    item.style.height = "198px";
    item.style.fontSize = "16px";
  });
}
function justifySize() {
  items.forEach((item) => {
    item.style.width = "48px";
    item.style.height = "48px";
    item.style.fontSize = "10px";
  });
}

// flex-direction
fdRow.addEventListener("click", () => {
  content.style.flexDirection = "row";
  defaultSize();
});
fdRowReverse.addEventListener("click", () => {
  content.style.flexDirection = "row-reverse";
  defaultSize();
});
fdColumn.addEventListener("click", () => {
  content.style.flexDirection = "column";
  defaultSize();
});
fdColumnReverse.addEventListener("click", () => {
  content.style.flexDirection = "column-reverse";
  defaultSize();
});

// flex-wrap
fwW.addEventListener("click", () => {
  content.style.flexWrap = "wrap";
  wrapSize();
});
fwNoW.addEventListener("click", () => {
  content.style.flexWrap = "nowrap";
  wrapSize();
});
fwWReverse.addEventListener("click", () => {
  content.style.flexWrap = "wrap-reverse";
  wrapSize();
});

// justify-content
jcFs.addEventListener("click", () => {
  content.style.justifyContent = "flex-start";
  justifySize();
});
jcFe.addEventListener("click", () => {
  content.style.justifyContent = "flex-end";
  justifySize();
});
jcC.addEventListener("click", () => {
  content.style.justifyContent = "center";
  justifySize();
});
jcSa.addEventListener("click", () => {
  content.style.justifyContent = "space-around";
  justifySize();
});
jcSb.addEventListener("click", () => {
  content.style.justifyContent = "space-between";
  justifySize();
});
jcSe.addEventListener("click", () => {
  content.style.justifyContent = "space-evenly";
  justifySize();
});

// align-items
aiS.addEventListener("click", () => {
  content.style.alignItems = "stretch";
  justifySize();
});
aiFs.addEventListener("click", () => {
  content.style.alignItems = "flex-start";
  justifySize();
});
aiFe.addEventListener("click", () => {
  content.style.alignItems = "flex-end";
  justifySize();
});
aiC.addEventListener("click", () => {
  content.style.alignItems = "center";
  justifySize();
});
aiB.addEventListener("click", () => {
  content.style.alignItems = "baseline";
  justifySize();
});
