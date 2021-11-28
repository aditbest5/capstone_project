import "../component/question.js";

class QuestionSet extends HTMLElement{
    constructor(){
        super();
        this._shadowRoot = this.attachShadow({mode: 'closed'});
    }

    set questions(questions){
        this.questions = questions;
    }

    render(){
        this._shadowRoot.innerHTML = `
            <div class="row">
                <form>
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
    }


    get answers(){
        return this.answers;
    }


}