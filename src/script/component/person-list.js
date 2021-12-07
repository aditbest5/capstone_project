import './person-item.js'

class PersonList extends HTMLElement{


    set students(students){
        this._students = students;
        this.render();
    }


    render(){
        this.innerHTML=`
            
        `;

        this._students.forEach(student => {
            const personItem = document.createElement('person-item');
            
            // console.log(student);
            personItem.identity = student;

            this.appendChild(personItem);
        });


    }
}

customElements.define("person-list",PersonList);