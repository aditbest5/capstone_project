class Header extends HTMLElement{
    // constructor(){
    //     // this._shadowRoot = this.attachShadow({mode: 'open'});
    //     this.render();
    // }

    connectedCallback(){
        this.innerHTML = `
            <style>
                header{
                    background-color: gray;
                    margin: auto;
                }
            </style>
            <header>
                <div class="row">
                    <div class="col">
                        <h1>Make your team</h1>
                    </div>
                    <div class="col">
                        2 of 2
                    </div>
                    <div class="col">
                    <button type="submit" class="btn btn-primary">Join</button>
                        
                    </div>
                </div>
            </header>
        `;
    }
}

customElements.define("header-item",Header);