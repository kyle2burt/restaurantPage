const about = () => {
    const content = document.querySelector("#content");

    const about = document.createElement("div");
    const head = document.createElement("h1")
    const para1 = document.createElement("p");
    const para2 = document.createElement("p");
    const para3 = document.createElement("p");
    const para4 = document.createElement("p");

    about.setAttribute("id", "about");

    head.textContent = "About Us";
    para1.textContent = "Hello from Kyle\'s Ramen"
    para2.textContent = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione rerum quaerat iste obcaecati ducimus libero totam sit, quia aspernatur explicabo, vero, quam beatae cum officiis sed officia tempora repellendus laborum!"
    para3.textContent = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione rerum quaerat iste obcaecati ducimus libero totam sit, quia aspernatur explicabo, vero, quam beatae cum officiis sed officia tempora repellendus laborum!"
    para4.textContent = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione rerum quaerat iste obcaecati ducimus libero totam sit, quia aspernatur explicabo, vero, quam beatae cum officiis sed officia tempora repellendus laborum!"


    about.appendChild(head);
    about.appendChild(para1);
    about.appendChild(para2);
    about.appendChild(para3);
    about.appendChild(para4);

    content.appendChild(about);
}

export default about;