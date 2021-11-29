class Header extends HTMLElement{
    // constructor(){
    //     // this._shadowRoot = this.attachShadow({mode: 'open'});
    //     this.render();
    // }

    connectedCallback(){
        this.innerHTML = `
            <style>
                header{
                    background-color: black;
                    height: 3em;
                    margin: auto;
                }
                h1{

                }
                ul li{
                    display:inline-block;
                    color: white;
                    margin: auto;
                }
                li{
                    padding: 10px;
                }
            </style>
            <header>
                <div class="row">
                    <div class="col">
                        <div class="">
                            <ul>
                                <li>Get Code</li>
                                <li>Have a code</li>
                            </ul>
                        </div>
                    </div>
                    <div class="col ">
                    </div>
                    <div class="col">
                        <a href="#user">User</a>
                    </div>
                </div>
            </header>
        `;
    }
}

customElements.define("header-item",Header);