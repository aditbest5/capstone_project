class Question extends HTMLElement{
    constructor(){
        super();

        this._shadowRoot = this.attachShadow({mode:"open"});
    }


    set question(question){
        this.question = question;
    }

    set questionNumber(questionNumber){
        this.questionNumber = questionNumber;
    }

    render(){
        this._shadowRoot.innerHTML = `
            <div class="mb-3">
                <label for="question${this.questionNumber}" class="form-label">${this.question}</label>
                <div class="Answer">
                    <div class="form-check form-check-inline">
                        <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1" value="1">
                        <label class="form-check-label" for="inlineRadio1">1</label>
                    </div>
                    <div class="form-check form-check-inline">
                        <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2" value="2">
                        <label class="form-check-label" for="inlineRadio2">2</label>
                    </div>
                    <div class="form-check form-check-inline">
                        <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio3" value="3">
                        <label class="form-check-label" for="inlineRadio3">3</label>
                    </div>
                    <div class="form-check form-check-inline">
                        <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio3" value="4">
                        <label class="form-check-label" for="inlineRadio3">4</label>
                    </div>
                    <div class="form-check form-check-inline">
                        <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio3" value="5">
                        <label class="form-check-label" for="inlineRadio3">5</label>
                    </div>
                </div>
            </div>
        `;
    }
}