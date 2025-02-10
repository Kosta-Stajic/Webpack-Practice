import "./styles.css";
import { pageLoad } from "./pageLoad";
import { menuLoad } from "./menu";
import { aboutLoad } from "./about";

pageLoad()

const menuButton = document.querySelector(".menuButton")
const aboutButton = document.querySelector(".aboutButton")
const homeButton = document.querySelector(".homeButton")

const main = document.querySelector("#content");

menuButton.addEventListener("click", () => {
    while (main.firstChild) {
        main.removeChild(main.firstChild);
    }
menuLoad()
})

homeButton.addEventListener("click", () => {
    while (main.firstChild) {
        main.removeChild(main.firstChild);

    }
pageLoad()
})


aboutButton.addEventListener("click", () => {
    while (main.firstChild) {
        main.removeChild(main.firstChild);
    }
    aboutLoad()
    })
console.log("THIS SHIT WORKS")