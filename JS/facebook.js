let container = document.getElementById("container");
let row = document.getElementById("row");
let colmd6 = document.getElementById("colmd6");
let card = document.getElementById("card");
let cardheader = document.getElementById("cardheader");
let cardbody = document.getElementById("cardbody");
let formgroup = document.getElementById("formgroup");
let formgroup2 = document.getElementById("formgroup2");
let formgroup3 = document.getElementById("formgroup3");
let formcontrol = document.getElementById("formcontrol");
let formgroup4 = document.getElementById("formgroup4");
let dblock = document.getElementById("dblock");
let formgroup5 = document.getElementById("formgroup5");
let txtbox = document.getElementById("txtbox");

container.style.width = "100%";
container.style.paddingRight = "15px";
container.style.paddingLeft = "15px";
container.style.marginRight = "auto";
container.style.marginLeft = "auto";

colmd6.style.position = "relative";
colmd6.style.width = "100%";
colmd6.style.minHeight = "1px";
colmd6.style.paddingRight = "15px";
colmd6.style.paddingLeft = "15px";

card.style.position = "relative";
card.style.display = "-webkit-box";
card.style.display = "-ms-flexbox";
card.style.display = "flex";
card.style.flexDirection = "column";
card.style.minWidth = "0";
card.style.wordWrap = "breakWord";
card.style.backgroundColor = "#fff";
card.style.backgroundClip = "border-box";
card.style.border = "1px solid rgba(0, 0, 0, 0.125)";
card.style.borderRadius = "0.25rem";
card.style.width = "500px";

cardheader.style.padding = "0.75rem 1.25rem;";
cardheader.style.marginBottom = "0";
cardheader.style.backgroundColor = "rgba(0, 0, 0, 0.03)";
cardheader.style.borderBottom = "1px solid rgba(0, 0, 0, 0.125)";

cardbody.style.webkitBoxFlex = "1";
cardbody.style.MsFlex = "1 1 auto";
cardbody.style.flex = "1 1 auto";
cardbody.style.padding = "1.25rem";

formgroup.style.marginBottom = "1rem";

formgroup2.style.marginBottom = "1rem";

formgroup3.style.marginBottom = "1rem";

formgroup4.style.marginBottom = "1rem";

formgroup5.style.marginBottom = "1rem";

formcontrol.style.display = "block";
formcontrol.style.width = "95%";
formcontrol.style.padding = "0.375rem 0.75rem";
formcontrol.style.fontSize = "1rem";
formcontrol.style.lineHeight = "1.5";
formcontrol.style.color = "#495057";
formcontrol.style.backgroundColor = "#fff";
formcontrol.style.backgroundClip = "padding-box";
formcontrol.style.border = "1px solid #ced4da";
formcontrol.style.borderRadius = "0.25rem";
formcontrol.style.transition = "border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;";

dblock.style.display = "block"
