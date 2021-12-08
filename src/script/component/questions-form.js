import { event } from "jquery";
import "./question-item.js";

class QuestionForm extends HTMLElement{

    set questions(questions){
        this._questions=questions;
    }

    connectedCallback(){
        this.innerHTML = `
            <style>
    
            </style>
                <form id="questionForm">
                    <h2>Answer the Question Below</h2>
                    <div class="question-list"></div>

                    <button type="submit" class="btn btn-dark btn-primary">Submit</button>
                </form>
           
        `;

        this._questions.forEach(question => {
                const item = document.createElement("question-item");
                item.question = question; 
                this.getElementsByClassName("question-list")[0].appendChild(item);
        });


        document.querySelector('#questionForm').addEventListener("submit", (event) =>{
            this.answers = [];
            this._questions.forEach(q => {
               
                let answ =  document.querySelector('input[name="'+ q.id +'"]:checked').value;

                try {
                    answ = parseInt(answ);
                } catch (error) {
                    answ = 0;
                }
                this.answers.push(parseInt(answ));
            });
            
            
            event.preventDefault();

            let tempData = localStorage.getItem("TEMP_DATA");

            if (tempData == null) {
                alert("Data Hilang, Kembali ke masukkan data");

                location.hash = "#add-person";
            }else{

                tempData = JSON.parse(tempData);
    
                tempData["answers"] = this.answers;
    
                console.log(tempData);
    
                tempData = JSON.stringify(tempData);
    
                localStorage.setItem("TEMP_DATA",tempData);

                location.hash = "#main";
            }

        })
    }


}


customElements.define("questions-form",QuestionForm);