let black = document.querySelector(".black");
let grey = document.querySelector(".grey");
let darkred = document.querySelector(".darkred");
let red = document.querySelector(".red");
let orange = document.querySelector(".orange");
let yellow = document.querySelector(".yellow");
let green = document.querySelector(".green");
let turquoise = document.querySelector(".turquoise");
let blue = document.querySelector(".blue");
let purple = document.querySelector(".purple");
let white = document.querySelector(".white");
let lightgrey = document.querySelector(".lightgrey");
let brown = document.querySelector(".brown");
let pink = document.querySelector(".pink");
let gold = document.querySelector(".gold");
let lightyellow = document.querySelector(".lightyellow");
let lime = document.querySelector(".lime");
let skyblue = document.querySelector(".skyblue");
let bluegray = document.querySelector(".bluegray");
let lavender = document.querySelector(".lavender");
let small = document.querySelector(".small");
let medium = document.querySelector(".medium");
let large = document.querySelector(".large");
let xlarge = document.querySelector(".xlarge");
let xxlarge = document.querySelector(".xxlarge");
let pallette;
let thickness;

black.addEventListener("click", () => pallette = "black");
grey.addEventListener("click", () => pallette = "grey");
darkred.addEventListener("click", () => pallette = "darkred");
red.addEventListener("click", () => pallette = "red");
orange.addEventListener("click", () => pallette = "orange");
yellow.addEventListener("click", () => pallette = "yellow");
green.addEventListener("click", () => pallette = "green");
turquoise.addEventListener("click", () => pallette = "turquoise");
blue.addEventListener("click", () => pallette = "blue");
purple.addEventListener("click", () => pallette = "purple");
white.addEventListener("click", () => pallette = "white");
lightgrey.addEventListener("click", () => pallette = "lightgrey");
brown.addEventListener("click", () => pallette = "185, 122, 87");
gold.addEventListener("click", () => pallette = "gold");
lightyellow.addEventListener("click", () => pallette = "239, 228, 176");
pink.addEventListener("click", () => pallette = "pink");
lime.addEventListener("click", () => pallette = "lime");
skyblue.addEventListener("click", () => pallette = "skyblue");
bluegray.addEventListener("click", () => pallette = "112, 146, 190");
lavender.addEventListener("click", () => pallette = "lavender");
small.addEventListener("click", () => thickness = 3);
medium.addEventListener("click", () => thickness = 6);
large.addEventListener("click", () => thickness = 9);
xlarge.addEventListener("click", () => thickness = 12);
xxlarge.addEventListener("click", () => thickness = 15);


function mouseDragged(){
    if (pallette === "185, 122, 87"){
        stroke(185, 122, 87);
        strokeWeight(thickness);
        point(mouseX, mouseY);
        return;
    } else if (pallette === "239, 228, 176"){
        stroke(239, 228, 176);
        strokeWeight(thickness);
        point(mouseX, mouseY);
        return;
    } else if (pallette === "112, 146, 190"){
        stroke(112, 146, 190);
        strokeWeight(thickness);
        point(mouseX, mouseY);
        return;
    } else {
        stroke(pallette);
        strokeWeight(thickness);
        point(mouseX, mouseY);
    }
}

function setup(){
    createCanvas(1000, 750);
    pallette = "black";
    thickness = 3;
}
