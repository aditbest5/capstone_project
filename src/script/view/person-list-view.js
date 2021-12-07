import "../component/person-list.js";
import BrowserStorage from "../data/data.js";
import students from "../data/dump.js";

function personListView(){
    const personList = document.createElement("person-list");
    personList.students = students;
    // personList.students = BrowserStorage.getAllData();

//    console.log(students[0].name);


    return personList;

}


export default personListView;