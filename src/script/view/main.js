import addPerson from "./add-person-view.js";
import questionForm from "./questions-form-view.js";
import "../component/form.js";
import BrowserStorage from "../data/data.js";
import personListView from "./person-list-view.js";

function removeAllChild(node) {
    while (node.lastElementChild) {
        node.removeChild(node.lastElementChild);
      }
}


function main() {
    const header = document.createElement("header-item");
    document.body.appendChild(header);

    const mainTag = document.createElement('main');
    document.body.appendChild(mainTag);

    const container = document.createElement("div");
    container.setAttribute("class","container")


    // const Form = document.createElement("form-set");
    
    location.hash = "#main";
    container.appendChild(personListView());

    window.addEventListener("hashchange", function() {
        if (location.hash === "#main") {

            removeAllChild(container)
            container.appendChild(personListView());
        
        }else if (location.hash === "#add-person") {
            
            removeAllChild(container);
            container.appendChild(addPerson());
        
        }else if (location.hash === "#question") {

            removeAllChild(container);
            container.appendChild(questionForm());
        
        }
    });
    


   
    // container.appendChild(questionForm());
    

    mainTag.appendChild(container);
}


export default main;