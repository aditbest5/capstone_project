class PersonItem extends HTMLElement{


    set identity(identity){
        this._identity = identity;
        this.render();
    }

    render(){
        this.innerHTML=`
            <div id="${this.identity.id}">
                <h3>${this.identity.name}</h3>
                <h2>${this.identity.personality}</h2>
            </div>
        `;
    }
}