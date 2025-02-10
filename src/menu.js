import menuPicture from "./karadjordjeva.jpeg"

export const menuLoad = function () {
    const main = document.querySelector("#content");

    const menuContent = document.createElement("div");
    menuContent.className = "menu";
    main.appendChild(menuContent)

    const pic = document.createElement("img")
    pic.src = menuPicture
    pic.className= "karadjoka"
    menuContent.appendChild(pic)

    const info = document.createElement("p")
    info.className = "karaText"
    info.textContent = "Legendarni srpski specijalitet - Cuvena Karadjordjeva snicla. Svinjski file punjen kajmakom zatim savrseno pohovan u krckaom omotu. Servirano uz pomfrit i tartar sos."
    menuContent.appendChild(info)
}

