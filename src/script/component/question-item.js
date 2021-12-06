class Question extends HTMLElement{

    set question(question){
        this._question = question;
        this.render();
    }

    render(){
        this.innerHTML = `
            <style>
                .question{
                    border:1px solid black;
                    border-radius: 10px;
                    padding: 10px;
                    margin: auto;
                    background-color: white;
                }
            </style>
            <div class="mb-3 question">
                <label for="question-${this._question.id}" class="form-label">${this._question.question}</label>
                <div class="answer-${this._question.id}">
                    <div class="form-check form-check-inline">
                        <input class="form-check-input" type="radio" name="${this._question.id}" id="inlineRadio1" value="1">
                        <label class="form-check-label" for="inlineRadio1">1</label>
                    </div>
                    <div class="form-check form-check-inline">
                        <input class="form-check-input" type="radio" name="${this._question.id}" id="inlineRadio2" value="2">
                        <label class="form-check-label" for="inlineRadio2">2</label>
                    </div>
                    <div class="form-check form-check-inline">
                        <input class="form-check-input" type="radio" name="${this._question.id}" id="inlineRadio3" value="3" checked >
                        <label class="form-check-label" for="inlineRadio3">3</label>
                    </div>
                    <div class="form-check form-check-inline">
                        <input class="form-check-input" type="radio" name="${this._question.id}" id="inlineRadio3" value="4">
                        <label class="form-check-label" for="inlineRadio3">4</label>
                    </div>
                    <div class="form-check form-check-inline">
                        <input class="form-check-input" type="radio" name="${this._question.id}" id="inlineRadio3" value="5">
                        <label class="form-check-label" for="inlineRadio3">5</label>
                    </div>
                </div>
            </div>
        `;
    }
}

customElements.define("question-item",Question);