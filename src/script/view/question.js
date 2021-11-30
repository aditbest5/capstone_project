import '../component/questionSet.js';
import '../component/container.js';


function questionsSet(){
    const mainTag = document.getElementsByTagName("main")[0];
    const container = document.createElement("container-item");
    const questionSet = document.createElement("question-set");

    container.appendChild(questionSet);
    mainTag.appendChild(container);
}