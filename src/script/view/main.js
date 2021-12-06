import addPerson from "./add-person-view.js";
import questionForm from "./questions-form-view.js";
import "../component/form.js";
import BrowserStorage from "../data/data.js";

function main() {

    const mainTag = document.getElementsByTagName('main')[0];

    const container = document.createElement("div");
    container.setAttribute("class","container")
   
    // container.appendChild(questionForm());
    
    const Form = document.createElement("form-set");
    container.appendChild(addPerson());

    mainTag.appendChild(container);
}


export default main;