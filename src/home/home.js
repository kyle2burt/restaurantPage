const intro = () => {
    const content = document.querySelector("#content");

    const intro = document.createElement("div");
    const title = document.createElement("h1");
    const quote = document.createElement("p");
    const address = document.createElement("p");

    intro.setAttribute("id", "home");

    title.textContent = "Kyle\'s Ramen";
    quote.textContent = "\“In Japan, our favorite thing to do after drinking all night is to go to the ramen place at two or three in the morning\”"
    address.textContent = "(1234 Ramen street #567 92071)";

    intro.appendChild(title);
    intro.appendChild(quote);
    intro.appendChild(address);

    content.appendChild(intro);
}

export default intro;