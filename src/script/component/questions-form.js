import "./question-item.js";

class QuestionForm extends HTMLElement{

    set questions(questions){
        this._questions=questions;
        this.render();
    }

    render(){
        this.innerHTML = `
            <style>
    
            </style>
            <div class="row">
                <form id="questionForm">
                    <div class="question-list"></div>

                    <button type="submit" class="btn btn-primary">Submit</button>
                </form>
            </div>
        `;

        this._questions.forEach(question => {
                const item = document.createElement("question-item");
                item.question = question; 
                this.getElementsByClassName("question-list")[0].appendChild(item);
        });

        document.querySelector('#questionForm').addEventListener('submit',(event) => {
            this._questions.forEach(q => {
                const answ = document.getElementById(q.id).value;
                this.answers.push(answ);
            });
            
            event.preventDefault();
            console.log(this.answers);

        });
    }


    get answers(){
        return this.answers;
    }


}


customElements.define("questions-form",QuestionForm);