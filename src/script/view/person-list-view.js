import { event } from "jquery";
import "../component/person-list.js";
import BrowserStorage from "../data/data.js";
import students from "../data/dump.js";

function personListView(){
    const personList = document.createElement("person-list");
    personList.students = students;
    // personList.students = BrowserStorage.getAllData();

    const buttonCreateTeam = document.createElement("button");
    buttonCreateTeam.innerHTML="Create Team";
    buttonCreateTeam.setAttribute("class","btn btn0 btn-dark");
    personList.appendChild(buttonCreateTeam);

    buttonCreateTeam.addEventListener("click",event =>{
        console.log("clicked");

        alert("clicked");
    })


    return personList;

}


export default personListView;