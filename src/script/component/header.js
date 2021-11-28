class Header extends HTMLElement{
    constructor(){
        super();
        this._shadowRoot = this.attachShadow({mode: "open"});
        this.render();
    }


    render(){
        this._shadowRoot.innerHTML = `
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
                        
                    </div>
                </div>
            </header>
        `;
    }
}

customElements.define("header-item",Header);