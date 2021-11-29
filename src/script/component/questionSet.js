import "../component/question.js";

class QuestionSet extends HTMLElement{
    // constructor(){
    //     super();
    //     this._shadowRoot = this.attachShadow({mode: 'open'});
    // }

    set questions(questions){
        this.questions = questions;
    }



    connectedCallback(){
        this.innerHTML = `
            <div class="row">
                <form id="questionForm">
                    <div id="question-list"></div>

                    <button type="submit" class="btn btn-primary">Primary</button>
                </form>
            </div>
        `;
        this.questions.forEach(q => {
            const item = document.createElement("question-item");
            item.question = q.question;
            item.questionNumber = q.id;
            this._shadowRoot.getElementById("question-list").appendChild(item);
        });

        document.querySelector('questionForm').addEventListener('submit',event => {
            this.questions.forEach(q => {
                const answ = document.getElementById(q.id).value;
                this.answers.push(answ);
            });
        });
    }


    get answers(){
        return this.answers;
    }


}


customElements.define("questions-set",QuestionSet);