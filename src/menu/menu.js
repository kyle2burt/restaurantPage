const menu = () => {
    const content = document.querySelector("#content");

    const menu = document.createElement("div");
    const title = document.createElement("h1");

    menu.setAttribute("id", "menu")

    title.textContent = "Menu";

    menu.appendChild(title);
    menu.appendChild(createMenuItem("Tonkotsu", "Tonkotsu is a viscous, creamy, and complex ramen made from simmered pork bones. The bones break down and release collagen while cooking, meaning that tonkotsu can be so thick that it coats the back of a spoon.", "../src/menu/images/ramen.webp"));
    menu.appendChild(createMenuItem("Miso", "As its name suggests, miso ramen is flavored with the fermented soybean paste of the same name, which can be made from soybeans, rice, or miso, and colored white or red.", "../src/menu/images/ramen2.png"));
    menu.appendChild(createMenuItem("Shoyu", "Shoyu is the Japanese word for soy sauce and this lighter-style ramen­­ — which can appear clear-brown or darker and cloudy — is flavored with exactly that.", "../src/menu/images/ramen3.png"));

    content.appendChild(menu);
}

function createMenuItem(name, description, image) {
    const menuItem = document.createElement("div");
    const imageElement = document.createElement("img");
    const boxElement = document.createElement("div");
    const nameElement = document.createElement("p");
    const descriptionElement = document.createElement("p");

    menuItem.setAttribute("class", "menu-item");
    imageElement.setAttribute("width", "150px");
    imageElement.setAttribute("height", "150px");

    imageElement.src = image;
    nameElement.textContent = name;
    descriptionElement.textContent = description;

    boxElement.appendChild(nameElement);
    boxElement.appendChild(descriptionElement);

    menuItem.appendChild(imageElement);
    menuItem.appendChild(boxElement);

    return menuItem;
}

export default menu;