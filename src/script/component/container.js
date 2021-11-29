class Conteiner extends HTMLElement{
    

    connectedCallback(){
        this.innerHTML = `
            <div class="container">
            </div>
        `;
    }
}

customElements.define("container-item",Conteiner);