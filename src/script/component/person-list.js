class PersonList extends HTMLElement{

    set students(students){
        this._students = students;
        this.render();
    }

    render(){
        
        
        if (this._students.length === 0) {
            this.innerHTML=`No Person`;
            
        }else{
            
            this._students.forEach(student => {
                const div = document.createElement('div');
                div.innerHTML=`
                    <style>
                        .div-person{
                            padding: 10px;
                            border: 1px solid black;
                            margin: 5px;
                            border-radius: 5px;
                        }

                    </style>
                    <div class="div-person" id="$ {this.identity.id}">
                        <h2>${student.name}</h2>
                        <h3>${student.personality}</h3>
                    </div>
                `;
    
                this.appendChild(div);
            });
        }
    }
}

customElements.define("person-list",PersonList);