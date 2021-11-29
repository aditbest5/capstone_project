class Form extends HTMLElement{
    constructor(){
        super();
        this._shadowRoot = this.attachShadow({mode: "open"});
    }

    render(){
        this._shadowRoot.innerHTML = `
        <form id="registrasi">
            <div class="form-row">
                <div class="form-group col-md-6">
                    <label for="inputName">Name</label>
                    <input type="text" class="form-control" id="inputName" placeholder="Name">
                </div>
                <div class="form-group col-md-6">
                    <label for="classId">Password</label>
                    <input type="text" class="form-control" id="classId" placeholder="Class code">
                </div>
            </div>
            <button type="submit" class="btn btn-primary">Join</button>
        </form>
        `;
    }
}


customElements.define("form-set",Form);