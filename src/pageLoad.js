
import backgroundImage from "./foody.jpg"

export const pageLoad = function(){

   const main = document.querySelector("#content")
   
   const image = document.createElement("img")
   image.src = backgroundImage;

   const name = document.createElement("div")
   name.className = "name"
   name.textContent = "Grandma's Kitchen Paradise"

   const textContainer = document.createElement("div")
   textContainer.className = "text-container"

   const paragraph = document.createElement("p")
   paragraph.textContent = "Welcome to Grandma's Kitchen Paradise. Here we strive to deliver delicious food and exemplary service. We take pride in sourcing our food locally and preparing it with love and attention to every detail!"

   const footer = document.createElement("footer")
   footer.textContent = "Copy right GitHub @Kosta-Stajic"
   
   
   
   main.appendChild(image)
   main.appendChild(name)
   main.appendChild(textContainer)
   textContainer.appendChild(paragraph)
   document.body.appendChild(footer)
   
}

