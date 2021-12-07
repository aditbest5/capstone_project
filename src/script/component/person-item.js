class PersonItem extends HTMLElement{


    set identity(identity){
        this._identity = identity;
        this.render();
    }

    render(){
        this.innerHTML=`
            <style>
                .div-person{
                    padding: 10px;
                    border: 1px solid black;
                    margin: 5px;
                    border-radius: 5px;
                }

            </style>
            <div class="div-person" id="$ {this.identity.id}">
                <h2>${this._identity.name}</h2>
                <h3>${this._identity.personality}</h3>
            </div>
        `;
    }
}

customElements.define("person-item",PersonItem);