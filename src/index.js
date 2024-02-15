console.log("Hello Webpack");

console.log("Hello from index.js")

// import your function
import intro from './home/home';

const content = document.querySelector("#content");

intro(content);
