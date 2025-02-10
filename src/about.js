

export const aboutLoad = function() {
    const main = document.querySelector("#content");

    const aboutInfo = document.createElement("p")
    aboutInfo.className = "contact-info"
    aboutInfo.textContent = "Stjepana Ljubise 82, rezervacije na broj telefona: 063-324-441 ili 011-334-155"
    main.appendChild(aboutInfo)
}